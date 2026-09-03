import { forwardRef } from 'react'
import { appCopy, localized } from '../i18n'
import { cleanUserTask } from '../escape-utils'
import type { Escape, Locale } from '../types'
import { PixelIllustration } from './PixelIllustration'

interface ShareCardProps {
  userTask: string
  escape: Escape
  locale: Locale
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  function ShareCard({ userTask, escape, locale }, ref) {
    const copy = appCopy[locale]
    const task = cleanUserTask(userTask)
    const result = localized(escape.resultTemplate, locale).replace(/[.!?…。]+$/u, '')

    return (
      <div
        className={`share-card share-card--${escape.accent}`}
        ref={ref}
        role="group"
        aria-label={copy.cardLabel}
      >
        <span className="tape" aria-hidden="true" />
        <div className="share-card__copy">
          <p>{locale === 'zh-CN' ? '你本来要' : 'I was supposed to'}</p>
          <h3>{task}{locale === 'zh-CN' ? '。' : '.'}</h3>
          <span className="dotted-rule" aria-hidden="true" />
          <p>{locale === 'zh-CN' ? '却花了 5 分钟' : 'Instead, I spent 5 minutes'}</p>
          <h3 className="share-card__result">{result}{locale === 'zh-CN' ? '。' : '.'}</h3>
        </div>
        <div className="share-card__art">
          <PixelIllustration
            visualKey={escape.visualKey}
            accent={escape.accent}
            compact
            locale={locale}
          />
        </div>
        <p className="share-card__brand">
          {copy.brandLine} {copy.brandLead} <span>{copy.brandAccent}</span>
        </p>
      </div>
    )
  },
)
