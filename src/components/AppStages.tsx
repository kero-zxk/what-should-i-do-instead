import type { FormEvent, RefObject } from 'react'
import { appCopy, localized } from '../i18n'
import type { Escape, Locale } from '../types'
import { Mascot, Sparkles, TinyLandscape } from './Decorations'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CopyIcon,
  DownloadIcon,
  ShuffleIcon,
} from './Icons'
import { PixelIllustration } from './PixelIllustration'
import { ShareCard } from './ShareCard'

export type ShareStatus = 'idle' | 'copied' | 'copy-error' | 'save-error'

interface InputStageProps {
  draftTask: string
  locale: Locale
  inputError: string
  inputRef: RefObject<HTMLInputElement | null>
  onDraftChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onLocaleChange: (locale: Locale) => void
}

interface LanguageToggleProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

function LanguageToggle({ locale, onLocaleChange }: LanguageToggleProps) {
  const copy = appCopy[locale]

  return (
    <div className="language-toggle" role="group" aria-label={copy.languageGroup}>
      <button
        className="language-toggle__option"
        type="button"
        aria-label={copy.switchToChinese}
        aria-pressed={locale === 'zh-CN'}
        onClick={() => onLocaleChange('zh-CN')}
      >
        中
      </button>
      <button
        className="language-toggle__option"
        type="button"
        aria-label={copy.switchToEnglish}
        aria-pressed={locale === 'en'}
        onClick={() => onLocaleChange('en')}
      >
        EN
      </button>
    </div>
  )
}

export function InputStage({
  draftTask,
  locale,
  inputError,
  inputRef,
  onDraftChange,
  onSubmit,
  onLocaleChange,
}: InputStageProps) {
  const copy = appCopy[locale]

  return (
    <div className="stage stage--input">
      <header className="stage-header stage-header--input">
        <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
      </header>
      <div className="input-stage-content">
        <div className="hero-art" aria-hidden="true">
          <Sparkles />
          <Mascot />
        </div>

        <div className="intro-copy">
          <h1>
            {copy.brandLine}<br />
            {copy.brandLead} <span>{copy.brandAccent}</span>
          </h1>
          <p>{copy.intro}</p>
        </div>

        <form className="task-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="user-task">{copy.taskLabel}</label>
          <input
            ref={inputRef}
            id="user-task"
            value={draftTask}
            onChange={(event) => onDraftChange(event.target.value)}
            aria-describedby={inputError ? 'task-error' : undefined}
            aria-invalid={Boolean(inputError)}
            placeholder={copy.taskPlaceholder}
            autoComplete="off"
          />
          {inputError && (
            <p className="field-error" id="task-error" role="alert">
              {inputError}
            </p>
          )}
          <button className="button button--primary" type="submit">
            {copy.submit} <ArrowRightIcon />
          </button>
        </form>
      </div>

      <TinyLandscape />
    </div>
  )
}

interface EscapeStageProps {
  escape: Escape
  locale: Locale
  headingRef: RefObject<HTMLHeadingElement | null>
  onBack: () => void
  onAnother: () => void
  onDone: () => void
  onLocaleChange: (locale: Locale) => void
}

export function EscapeStage({
  escape,
  locale,
  headingRef,
  onBack,
  onAnother,
  onDone,
  onLocaleChange,
}: EscapeStageProps) {
  const copy = appCopy[locale]

  return (
    <div className="stage stage--escape">
      <header className="stage-header">
        <button className="icon-button" type="button" aria-label={copy.backToTask} onClick={onBack}>
          <ArrowLeftIcon />
        </button>
        <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
      </header>

      <div className="escape-copy">
        <p className="eyebrow">{copy.escapeEyebrow}</p>
        <span className="eyebrow-rule" aria-hidden="true" />
        <PixelIllustration visualKey={escape.visualKey} accent={escape.accent} locale={locale} />
        <h2 ref={headingRef} tabIndex={-1} aria-live="polite">
          {localized(escape.title, locale)}
        </h2>
        <p>{localized(escape.description, locale)}</p>
        <span className="time-label">
          <ClockIcon /> {copy.minutes}
        </span>
      </div>

      <div className="escape-actions">
        <button className="button button--secondary" type="button" onClick={onAnother}>
          <ShuffleIcon /> {copy.another}
        </button>
        <button className="button button--yellow" type="button" onClick={onDone}>
          {copy.done} <CheckIcon />
        </button>
      </div>
    </div>
  )
}

interface ResultStageProps {
  escape: Escape
  userTask: string
  locale: Locale
  headingRef: RefObject<HTMLHeadingElement | null>
  cardRef: RefObject<HTMLDivElement | null>
  isSaving: boolean
  shareStatus: ShareStatus
  onBack: () => void
  onSave: () => void
  onCopy: () => void
  onEscapeAgain: () => void
  onLocaleChange: (locale: Locale) => void
}

export function ResultStage({
  escape,
  userTask,
  locale,
  headingRef,
  cardRef,
  isSaving,
  shareStatus,
  onBack,
  onSave,
  onCopy,
  onEscapeAgain,
  onLocaleChange,
}: ResultStageProps) {
  const copy = appCopy[locale]

  return (
    <div className="stage stage--result">
      <header className="stage-header">
        <button className="icon-button" type="button" aria-label={copy.backToEscape} onClick={onBack}>
          <ArrowLeftIcon />
        </button>
        <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
      </header>

      <div className="result-heading">
        <h2 ref={headingRef} tabIndex={-1}>
          {copy.resultHeading}
        </h2>
        <span className="eyebrow-rule" aria-hidden="true" />
      </div>

      <div className="card-frame">
        <ShareCard ref={cardRef} userTask={userTask} escape={escape} locale={locale} />
      </div>

      <div className="result-actions">
        <button className="button button--primary" type="button" onClick={onSave} disabled={isSaving}>
          <DownloadIcon /> {isSaving ? copy.saving : copy.save}
        </button>
        <button className="button button--secondary" type="button" onClick={onCopy}>
          <CopyIcon /> {copy.copy}
        </button>
      </div>

      <button className="text-button" type="button" onClick={onEscapeAgain}>
        {copy.escapeAgain} <ShuffleIcon />
      </button>

      <p className="share-status" role="status" aria-live="polite">
        {shareStatus === 'copied' && copy.copied}
        {shareStatus === 'copy-error' && copy.copyError}
        {shareStatus === 'save-error' && copy.saveError}
      </p>
    </div>
  )
}
