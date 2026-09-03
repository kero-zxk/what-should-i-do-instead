import { afterEach, describe, expect, it, vi } from 'vitest'
import { copyResultText, downloadCard } from './share-utils'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('downloadCard', () => {
  it('renders a 1080 by 1350 PNG and downloads it with a stable filename', async () => {
    const node = document.createElement('div')
    const renderer = vi.fn().mockResolvedValue('data:image/png;base64,pixel-card')
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => undefined)

    await downloadCard(node, renderer)

    expect(renderer).toHaveBeenCalledWith(
      node,
      expect.objectContaining({
        width: 360,
        height: 450,
        pixelRatio: 3,
      }),
    )
    expect(click).toHaveBeenCalledOnce()
  })
})

describe('copyResultText', () => {
  it('writes the result to the Clipboard API when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })

    await copyResultText('A useful waste of time.')

    expect(writeText).toHaveBeenCalledWith('A useful waste of time.')
  })

  it('falls back to a temporary textarea when Clipboard API is unavailable', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    })
    const execCommand = vi.fn().mockReturnValue(true)
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: execCommand,
    })

    await copyResultText('Still copied.')

    expect(execCommand).toHaveBeenCalledWith('copy')
    expect(document.querySelector('textarea')).not.toBeInTheDocument()
  })
})
