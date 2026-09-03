import { toPng } from 'html-to-image'

type PngRenderer = typeof toPng

export async function downloadCard(
  node: HTMLElement,
  renderer: PngRenderer = toPng,
): Promise<void> {
  await document.fonts?.ready

  const dataUrl = await renderer(node, {
    cacheBust: true,
    width: 360,
    height: 450,
    pixelRatio: 3,
    style: {
      width: '360px',
      height: '450px',
      transform: 'none',
    },
  })
  const link = document.createElement('a')
  link.download = 'what-should-i-do-instead.png'
  link.href = dataUrl
  link.click()
}

export async function copyResultText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  const copied = document.execCommand('copy')
  textarea.remove()

  if (!copied) {
    throw new Error('Copy is not supported in this browser.')
  }
}
