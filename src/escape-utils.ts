import { localized } from './i18n'
import type { Escape, Locale } from './types'

const ENDING_PUNCTUATION = /[.!?…。！？]+$/u

export function cleanUserTask(task: string): string {
  return task.trim().replace(ENDING_PUNCTUATION, '').trim()
}

export function pickNextEscape(
  escapes: Escape[],
  currentId?: string,
): Escape {
  if (escapes.length === 0) {
    throw new Error('At least one escape is required.')
  }

  const candidates =
    escapes.length > 1
      ? escapes.filter((escape) => escape.id !== currentId)
      : escapes
  const index = Math.floor(Math.random() * candidates.length)

  return candidates[index]
}

export function buildResultText(userTask: string, escape: Escape, locale: Locale): string {
  const task = cleanUserTask(userTask)
  const result = localized(escape.resultTemplate, locale)
    .trim()
    .replace(ENDING_PUNCTUATION, '')

  return locale === 'zh-CN'
    ? `你本来要${task}，却花了 5 分钟${result}。`
    : `I was supposed to ${task}. Instead, I spent 5 minutes ${result}.`
}
