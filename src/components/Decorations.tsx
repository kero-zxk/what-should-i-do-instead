export function Sparkles({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`sparkles ${className}`}
      viewBox="0 0 120 52"
      aria-hidden="true"
    >
      <path className="spark spark--yellow" d="M16 5v16M8 13h16" />
      <path className="spark spark--blue" d="M98 10v12M92 16h12" />
      <path className="spark spark--pink" d="M58 30v14M51 37h14" />
      <rect className="spark-dot" x="34" y="33" width="4" height="4" />
      <rect className="spark-dot spark-dot--mint" x="80" y="4" width="4" height="4" />
    </svg>
  )
}

export function Mascot({
  className = '',
  decorative = false,
}: {
  className?: string
  decorative?: boolean
}) {
  return (
    <svg
      className={`mascot ${className}`}
      viewBox="0 0 96 76"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'A tiny pixel mascot waving'}
      aria-hidden={decorative || undefined}
    >
      <path className="pixel-white" d="M30 18h36v8h8v30h-8v8H30v-8h-8V26h8z" />
      <path className="pixel-ink" d="M30 14h36v4H30zM22 22h8v4h-8zM18 26h4v30h-4zM22 56h8v8h-4v8h-4V60h-4v-4zM30 64h36v4H30zM66 60h8V26h-8v-4h8v4h4v30h-4v8h-8z" />
      <rect className="pixel-ink" x="34" y="34" width="6" height="6" />
      <rect className="pixel-ink" x="56" y="34" width="6" height="6" />
      <path className="pixel-ink" d="M40 48h4v4h12v-4h4v8H40z" />
      <path className="pixel-white" d="M74 34h10v-6h6v20h-6v-6H74z" />
      <path className="pixel-ink" d="M74 30h6v-6h4v4h2v-8h4v8h4v24h-4v-8h-4v4h-4v-4h-8v-4h12v-6H74z" />
      <rect className="pixel-blue" x="86" y="34" width="4" height="8" />
    </svg>
  )
}

export function TinyLandscape() {
  return (
    <svg className="tiny-landscape" viewBox="0 0 420 104" aria-hidden="true">
      <path className="cloud-fill" d="M272 34h18V22h12V12h26v7h10v10h9v17h-75z" />
      <path className="ground-line" d="M0 82h82l12-8h54l14 8h89l10-5h94l10 5h55" />
      <path className="soil" d="M22 82h125l-9-12-16-4-9 5-14-14-19 2-9 14-19-4z" />
      <path className="plant" d="M70 70V34m0 13-12-10m12 21 13-11m-13-2 10-13" />
      <path className="plant-leaf" d="M58 31h-8v9h8zM80 25h9v10h-9zM82 41h10v10H82z" />
      <path className="small-plant" d="M339 82V58m0 11-8-7m8 2 8-8M380 82V70m0 5-6-5" />
      <rect className="flower" x="333" y="54" width="11" height="8" />
    </svg>
  )
}
