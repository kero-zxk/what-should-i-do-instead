import { describe, expect, it } from 'vitest'
import { escapes } from './escapes'

describe('escape library', () => {
  it('contains at least 20 complete escapes', () => {
    expect(escapes.length).toBeGreaterThanOrEqual(20)

    for (const escape of escapes) {
      expect(escape.id).toBeTruthy()
      expect(escape.title.en).toBeTruthy()
      expect(escape.title['zh-CN']).toBeTruthy()
      expect(escape.description.en).toBeTruthy()
      expect(escape.description['zh-CN']).toBeTruthy()
      expect(escape.resultTemplate.en).toBeTruthy()
      expect(escape.resultTemplate['zh-CN']).toBeTruthy()
      expect(escape.visualKey).toBeTruthy()
      expect(escape.accent).toBeTruthy()
    }
  })

  it('uses unique IDs', () => {
    const ids = escapes.map((escape) => escape.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
