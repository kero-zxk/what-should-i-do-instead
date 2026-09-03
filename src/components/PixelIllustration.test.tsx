import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PixelIllustration } from './PixelIllustration'

describe('PixelIllustration', () => {
  it('embeds its palette inside the SVG so exported cards keep their colors', () => {
    const { container } = render(
      <PixelIllustration visualKey="sculpture" accent="yellow" />,
    )
    const embeddedStyles = container.querySelector('svg style')?.textContent

    expect(embeddedStyles).toContain('.scene-white{fill:#ffffff}')
    expect(embeddedStyles).toContain('.scene-accent{fill:#ffd966}')
  })
})
