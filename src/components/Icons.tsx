import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M19 12H5m6-7-7 7 7 7" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M5 12h14m-6-7 7 7-7 7" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="8" y="8" width="11" height="12" rx="1" />
      <path d="M16 8V4H5v12h3" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3v12m-5-5 5 5 5-5M5 20h14" />
    </svg>
  )
}

export function ShuffleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M16 3h5v5M4 7h3c5 0 5 10 10 10h4M16 21h5v-5M4 17h3c1.8 0 3-1.3 4-3" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2M9 2h6" />
    </svg>
  )
}
