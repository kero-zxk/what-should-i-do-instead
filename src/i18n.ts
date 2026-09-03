import type { Locale, LocalizedCopy } from './types'

export const DEFAULT_LOCALE: Locale = 'zh-CN'

export const appCopy: Record<Locale, {
  brandLine: string
  brandLead: string
  brandAccent: string
  intro: string
  taskLabel: string
  taskPlaceholder: string
  taskError: string
  submit: string
  backToTask: string
  backToEscape: string
  escapeEyebrow: string
  minutes: string
  another: string
  done: string
  resultHeading: string
  save: string
  saving: string
  copy: string
  escapeAgain: string
  copied: string
  copyError: string
  saveError: string
  cardLabel: string
  languageGroup: string
  switchToChinese: string
  switchToEnglish: string
  pageTitle: string
  pageDescription: string
}> = {
  'zh-CN': {
    brandLine: '那我现在',
    brandLead: '该干点',
    brandAccent: '什么？',
    intro: '反正都准备摸鱼了，不如摸得有点意思。',
    taskLabel: '我本来应该……',
    taskPlaceholder: '写 PRD',
    taskError: '先告诉我你在逃避什么。',
    submit: '给我一个摸鱼任务',
    backToTask: '返回修改任务',
    backToEscape: '返回当前摸鱼任务',
    escapeEyebrow: '你的 5 分钟摸鱼任务',
    minutes: '5 分钟',
    another: '换一个',
    done: '我做完了',
    resultHeading: '真是公司的好员工',
    save: '保存卡片',
    saving: '保存中…',
    copy: '复制文案',
    escapeAgain: '再来一次',
    copied: '已复制。发给同样很忙的人吧。',
    copyError: '复制失败了。你的浏览器今天很努力。',
    saveError: '卡片保存失败，请再试一次。',
    cardLabel: '可分享的结果卡片',
    languageGroup: '语言',
    switchToChinese: '切换到中文',
    switchToEnglish: 'Switch to English',
    pageTitle: '那我现在该干点什么？',
    pageDescription: '给你正在逃避的事情安排一个五分钟摸鱼任务。',
  },
  en: {
    brandLine: 'what should i',
    brandLead: 'do',
    brandAccent: 'instead?',
    intro: 'You were going to procrastinate anyway. Let’s make it interesting.',
    taskLabel: 'I should be...',
    taskPlaceholder: 'write my PRD',
    taskError: 'Tell me what you are avoiding first.',
    submit: 'Give me an escape',
    backToTask: 'Back to edit task',
    backToEscape: 'Back to current escape',
    escapeEyebrow: 'Your 5-minute escape',
    minutes: '5 minutes',
    another: 'Give me another',
    done: 'I did it',
    resultHeading: 'Excellent use of company time.',
    save: 'Save card',
    saving: 'Saving…',
    copy: 'Copy text',
    escapeAgain: 'Escape again',
    copied: 'Copied. Send it to someone equally busy.',
    copyError: 'Could not copy. Your browser is being productive.',
    saveError: 'Could not save the card. Please try again.',
    cardLabel: 'Shareable result card',
    languageGroup: 'Language',
    switchToChinese: '切换到中文',
    switchToEnglish: 'Switch to English',
    pageTitle: 'What Should I Do Instead?',
    pageDescription: 'A five-minute escape for whatever you should be doing instead.',
  },
}

export function localized(copy: LocalizedCopy, locale: Locale): string {
  return copy[locale]
}
