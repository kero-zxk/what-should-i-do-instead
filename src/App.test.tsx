import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

describe('main escape flow', () => {
  it('starts in Chinese and validates an empty task', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement.lang).toBe('zh-CN')
    expect(screen.getByRole('button', { name: '给我一个摸鱼任务' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '给我一个摸鱼任务' }))

    expect(screen.getByRole('alert')).toHaveTextContent('先告诉我你在逃避什么。')
  })

  it('switches the complete flow to English without changing the entered task', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('我本来应该……'), 'write my PRD')
    await user.click(screen.getByRole('button', { name: 'Switch to English' }))

    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByLabelText('I should be...')).toHaveValue('write my PRD')

    await user.click(screen.getByRole('button', { name: /give me an escape/i }))

    expect(screen.getByText('Your 5-minute escape')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /give me another/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /i did it/i }))

    expect(screen.getByText('Excellent use of company time.')).toBeInTheDocument()
    expect(
      screen.getByRole('group', { name: 'Shareable result card' }),
    ).toHaveTextContent(/I was supposed to\s*write my PRD\./)
    expect(screen.getByRole('button', { name: /save card/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /copy text/i })).toBeInTheDocument()
  })

  it('relocalizes the selected escape and share card in place', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('我本来应该……'), '整理会议记录')
    await user.click(screen.getByRole('button', { name: '给我一个摸鱼任务' }))

    const illustrationClass = screen.getByRole('img', { name: /像素插画/ }).className
    await user.click(screen.getByRole('button', { name: 'Switch to English' }))

    expect(screen.getByText('Your 5-minute escape')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /pixel illustration/i }).className).toBe(
      illustrationClass,
    )

    await user.click(screen.getByRole('button', { name: 'I did it' }))
    expect(screen.getByRole('group', { name: 'Shareable result card' })).toHaveTextContent(
      'I was supposed to整理会议记录.',
    )

    await user.click(screen.getByRole('button', { name: '切换到中文' }))
    expect(screen.getByText('真是公司的好员工')).toBeInTheDocument()
    expect(screen.getByRole('group', { name: '可分享的结果卡片' })).toHaveTextContent(
      '你本来要整理会议记录。',
    )
  })

  it('keeps the original task when escaping again', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Switch to English' }))
    await user.type(screen.getByLabelText('I should be...'), 'write my PRD')
    await user.keyboard('{Enter}')
    await user.click(screen.getByRole('button', { name: /i did it/i }))
    await user.click(screen.getByRole('button', { name: /escape again/i }))

    expect(screen.getByText('Your 5-minute escape')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /back to edit task/i }))
    expect(screen.getByLabelText('I should be...')).toHaveValue('write my PRD')
  })

  it('copies the deterministic result and announces success', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Switch to English' }))
    await user.type(screen.getByLabelText('I should be...'), 'write my PRD')
    await user.keyboard('{Enter}')
    await user.click(screen.getByRole('button', { name: /i did it/i }))
    await user.click(screen.getByRole('button', { name: /copy text/i }))

    expect(writeText).toHaveBeenCalledWith(
      expect.stringMatching(/^I was supposed to write my PRD\. Instead, I spent 5 minutes .+\.$/),
    )
    expect(screen.getByRole('status')).toHaveTextContent(
      'Copied. Send it to someone equally busy.',
    )
  })
})
