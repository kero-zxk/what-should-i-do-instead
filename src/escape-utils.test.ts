import { describe, expect, it, vi } from 'vitest'
import { buildResultText, cleanUserTask, pickNextEscape } from './escape-utils'
import type { Escape } from './types'

const escapes: Escape[] = [
  {
    id: 'one',
    title: { en: 'Do one thing', 'zh-CN': '做一件小事' },
    description: { en: 'A small distraction.', 'zh-CN': '一个小小的岔开。' },
    resultTemplate: { en: 'doing one unnecessary thing', 'zh-CN': '做了一件不必要的小事' },
    visualKey: 'camera',
    accent: 'blue',
  },
  {
    id: 'two',
    title: { en: 'Do another thing', 'zh-CN': '再做一件小事' },
    description: { en: 'A different distraction.', 'zh-CN': '另一种小小的岔开。' },
    resultTemplate: { en: 'doing another unnecessary thing', 'zh-CN': '做了另一件不必要的小事' },
    visualKey: 'flag',
    accent: 'yellow',
  },
]

describe('cleanUserTask', () => {
  it('trims whitespace and removes repeated ending punctuation', () => {
    expect(cleanUserTask('  write my PRD...  ')).toBe('write my PRD')
  })

  it('preserves wording and capitalization', () => {
    expect(cleanUserTask('Finish Q3 Review')).toBe('Finish Q3 Review')
  })
})

describe('pickNextEscape', () => {
  it('does not immediately repeat the current escape', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)

    expect(pickNextEscape(escapes, 'one').id).toBe('two')

    vi.restoreAllMocks()
  })
})

describe('buildResultText', () => {
  it('creates one clean deterministic English result sentence', () => {
    expect(buildResultText('write my PRD...', escapes[0], 'en')).toBe(
      'I was supposed to write my PRD. Instead, I spent 5 minutes doing one unnecessary thing.',
    )
  })

  it('creates one clean deterministic Chinese result sentence', () => {
    expect(buildResultText('写 PRD。。', escapes[0], 'zh-CN')).toBe(
      '你本来要写 PRD，却花了 5 分钟做了一件不必要的小事。',
    )
  })
})
