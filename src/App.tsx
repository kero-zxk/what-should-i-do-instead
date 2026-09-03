import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  EscapeStage,
  InputStage,
  ResultStage,
  type ShareStatus,
} from './components/AppStages'
import { escapes } from './data/escapes'
import { buildResultText, cleanUserTask, pickNextEscape } from './escape-utils'
import { appCopy, DEFAULT_LOCALE } from './i18n'
import { copyResultText, downloadCard } from './share-utils'
import type { AppStage, Escape, Locale } from './types'

function App() {
  const [stage, setStage] = useState<AppStage>('input')
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)
  const [draftTask, setDraftTask] = useState('')
  const [userTask, setUserTask] = useState('')
  const [selectedEscape, setSelectedEscape] = useState<Escape | null>(null)
  const [inputError, setInputError] = useState('')
  const [shareStatus, setShareStatus] = useState<ShareStatus>('idle')
  const [isSaving, setIsSaving] = useState(false)
  const stageHeadingRef = useRef<HTMLHeadingElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (stage !== 'input') {
      stageHeadingRef.current?.focus()
    }
  }, [stage])

  useEffect(() => {
    const copy = appCopy[locale]
    document.documentElement.lang = locale
    document.title = copy.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.pageDescription)
  }, [locale])

  const chooseEscape = (currentId?: string) => {
    const nextEscape = pickNextEscape(escapes, currentId)
    setSelectedEscape(nextEscape)
    setShareStatus('idle')
    return nextEscape
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const cleanedTask = cleanUserTask(draftTask)

    if (!cleanedTask) {
      setInputError(appCopy[locale].taskError)
      inputRef.current?.focus()
      return
    }

    setDraftTask(cleanedTask)
    setUserTask(cleanedTask)
    setInputError('')
    chooseEscape(selectedEscape?.id)
    setStage('escape')
  }

  const handleAnother = () => {
    chooseEscape(selectedEscape?.id)
  }

  const handleDone = () => {
    setShareStatus('idle')
    setStage('result')
  }

  const handleEscapeAgain = () => {
    chooseEscape(selectedEscape?.id)
    setStage('escape')
  }

  const handleCopy = async () => {
    if (!selectedEscape) return

    try {
      await copyResultText(buildResultText(userTask, selectedEscape, locale))
      setShareStatus('copied')
    } catch {
      setShareStatus('copy-error')
    }
  }

  const handleSave = async () => {
    if (!cardRef.current || isSaving) return

    setIsSaving(true)
    setShareStatus('idle')

    try {
      await downloadCard(cardRef.current)
    } catch {
      setShareStatus('save-error')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="app-shell">
      <section className={`phone-shell phone-shell--${stage}`}>
        {stage === 'input' && (
          <InputStage
            draftTask={draftTask}
            locale={locale}
            inputError={inputError}
            inputRef={inputRef}
            onDraftChange={(value) => {
              setDraftTask(value)
              if (inputError) setInputError('')
            }}
            onSubmit={handleSubmit}
            onLocaleChange={setLocale}
          />
        )}

        {stage === 'escape' && selectedEscape && (
          <EscapeStage
            escape={selectedEscape}
            locale={locale}
            headingRef={stageHeadingRef}
            onBack={() => setStage('input')}
            onAnother={handleAnother}
            onDone={handleDone}
            onLocaleChange={setLocale}
          />
        )}

        {stage === 'result' && selectedEscape && (
          <ResultStage
            escape={selectedEscape}
            userTask={userTask}
            locale={locale}
            headingRef={stageHeadingRef}
            cardRef={cardRef}
            isSaving={isSaving}
            shareStatus={shareStatus}
            onBack={() => setStage('escape')}
            onSave={handleSave}
            onCopy={handleCopy}
            onEscapeAgain={handleEscapeAgain}
            onLocaleChange={setLocale}
          />
        )}
      </section>
    </main>
  )
}

export default App
