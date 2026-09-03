import type { ReactNode } from 'react'
import type { Accent, Locale, LocalizedCopy, VisualKey } from '../types'

const accentColors: Record<Accent, string> = {
  blue: '#8fbaf3',
  yellow: '#ffd966',
  mint: '#9fd59f',
}

const visualLabels: Record<VisualKey, LocalizedCopy> = {
  camera: { en: 'Camera pixel illustration', 'zh-CN': '相机像素插画' },
  compass: { en: 'Map pin pixel illustration', 'zh-CN': '地图图钉像素插画' },
  cinema: { en: 'Cinema pixel illustration', 'zh-CN': '电影像素插画' },
  phone: { en: 'Phone pixel illustration', 'zh-CN': '手机像素插画' },
  pencil: { en: 'Pencil pixel illustration', 'zh-CN': '铅笔像素插画' },
  sculpture: { en: 'Trophy pixel illustration', 'zh-CN': '奖杯像素插画' },
  star: { en: 'Star pixel illustration', 'zh-CN': '星星像素插画' },
  idea: { en: 'Lightbulb pixel illustration', 'zh-CN': '灯泡像素插画' },
  folder: { en: 'Folder pixel illustration', 'zh-CN': '文件夹像素插画' },
  flag: { en: 'Flag pixel illustration', 'zh-CN': '旗帜像素插画' },
}

const sceneMap: Record<VisualKey, ReactNode> = {
  camera: (
    <g>
      <path className="scene-shadow" d="M34 101h112v10H34z" />
      <path className="scene-white" d="M39 46h102v58H39z" />
      <path className="scene-ink" d="M43 42h24l7-12h34l7 12h22v8H43zM35 50h8v54h94V50h8v62H35z" />
      <path className="scene-gray" d="M43 54h94v45H43z" />
      <circle className="scene-ink" cx="90" cy="76" r="28" />
      <circle className="scene-white" cx="90" cy="76" r="20" />
      <circle className="scene-dark" cx="90" cy="76" r="13" />
      <rect className="scene-accent" x="119" y="58" width="10" height="8" />
      <path className="scene-ink" d="M49 34h17v8H49z" />
    </g>
  ),
  compass: (
    <g>
      <path className="scene-shadow" d="M28 105h124v8H28z" />
      <path className="scene-white" d="m35 45 37-12 36 12 37-12v65l-37 12-36-12-37 12z" />
      <path className="scene-ink" d="m31 42 41-14 36 12 41-14v75l-41 14-36-12-41 14zm8 6v58l29-10V38zm37-10v58l28 9V47zm36 8v58l29-10V37z" />
      <path className="scene-accent" d="M91 51c-13 0-23 10-23 23 0 19 23 33 23 33s23-14 23-33c0-13-10-23-23-23z" />
      <circle className="scene-white" cx="91" cy="74" r="8" />
    </g>
  ),
  cinema: (
    <g>
      <path className="scene-shadow" d="M34 104h112v9H34z" />
      <path className="scene-white" d="M42 46h98v62H42z" />
      <path className="scene-ink" d="M38 42h106v70H38zm8 31v31h90V73z" />
      <path className="scene-accent" d="M40 31h103v30H40z" />
      <path className="scene-ink" d="M36 27h109v38H36zm10 8v16h89V35zM55 31l12 24M84 31l12 24M113 31l12 24" />
      <path className="scene-ink" d="m82 78 25 13-25 13z" />
      <path className="scene-white" d="M87 86v10l10-5z" />
    </g>
  ),
  phone: (
    <g>
      <path className="scene-shadow" d="M51 109h78v8H51z" />
      <rect className="scene-ink" x="55" y="12" width="70" height="101" rx="8" />
      <rect className="scene-white" x="63" y="23" width="54" height="75" />
      <path className="scene-accent" d="M68 69l13-16 12 13 8-9 12 12v20H68z" />
      <circle className="scene-yellow" cx="98" cy="43" r="8" />
      <rect className="scene-gray" x="83" y="104" width="15" height="4" />
      <rect className="scene-gray" x="79" y="17" width="23" height="3" />
    </g>
  ),
  pencil: (
    <g>
      <path className="scene-shadow" d="M27 106h128v8H27z" />
      <path className="scene-white" d="M35 20h87v87H35z" />
      <path className="scene-ink" d="M31 16h95v95H31zm8 8v79h79V24z" />
      <path className="scene-gray" d="M48 41h57v5H48zM48 56h45v5H48zM48 71h52v5H48z" />
      <path className="scene-accent" d="m91 91 40-40 14 14-40 40-20 6z" />
      <path className="scene-ink" d="m127 45 24 24-42 42-29 8 8-29zm0 11-32 32 10 10 32-32zm-37 43-3 12 12-3z" />
    </g>
  ),
  sculpture: (
    <g>
      <path className="scene-shadow" d="M25 106h130v9H25z" />
      <path className="scene-ink" d="M35 91h109v19H35z" />
      <path className="scene-white" d="M43 96h93v8H43z" />
      <path className="scene-accent" d="M57 53h62v39H57z" />
      <path className="scene-ink" d="M53 49h70v47H53zm8 8v31h54V57z" />
      <circle className="scene-yellow" cx="91" cy="35" r="21" />
      <path className="scene-ink" d="M91 10a25 25 0 1 1 0 50 25 25 0 0 1 0-50zm0 8a17 17 0 1 0 0 34 17 17 0 0 0 0-34z" />
      <path className="scene-ink" d="M74 70h34v8H74z" />
    </g>
  ),
  star: (
    <g>
      <path className="scene-shadow" d="M39 106h103v9H39z" />
      <path className="scene-white" d="M55 77h71v31H55z" />
      <path className="scene-ink" d="M51 73h79v39H51zm8 8v23h63V81z" />
      <path className="scene-accent" d="m91 13 10 22 24 3-18 17 5 25-21-12-22 12 5-25-18-17 25-3z" />
      <path className="scene-ink" d="m91 5 13 26 29 4-21 21 5 29-26-14-27 14 6-29-22-21 30-4zm0 18-8 16-18 2 13 13-3 18 16-9 15 9-3-18 13-13-18-2z" />
    </g>
  ),
  idea: (
    <g>
      <path className="scene-shadow" d="M53 108h75v8H53z" />
      <path className="scene-accent" d="M55 51a36 36 0 1 1 62 25c-8 8-10 14-10 22H74c0-8-3-14-11-22a35 35 0 0 1-8-25z" />
      <path className="scene-ink" d="M91 8a43 43 0 0 1 31 72c-7 7-10 12-10 22v4H69v-4c0-10-3-15-10-22A43 43 0 0 1 91 8zm0 8a35 35 0 0 0-26 58c8 9 11 16 12 24h28c1-8 4-15 12-24a35 35 0 0 0-26-58zM72 110h38v8H72z" />
      <path className="scene-white" d="M84 31h14v8H84zM76 47h30v8H76z" />
    </g>
  ),
  folder: (
    <g>
      <path className="scene-shadow" d="M25 106h130v9H25z" />
      <path className="scene-gray" d="M44 23h48l11 13h42v68H44z" />
      <path className="scene-ink" d="M40 19h54l11 13h44v76H40zm8 8v73h93V40h-40L90 27z" />
      <path className="scene-accent" d="M31 48h101l13 56H44z" />
      <path className="scene-ink" d="M26 44h109l15 64H40zm10 8 11 48h93l-11-48z" />
      <path className="scene-white" d="M66 64h54v8H66zM71 79h43v7H71z" />
    </g>
  ),
  flag: (
    <g>
      <path className="scene-shadow" d="M42 108h100v8H42z" />
      <path className="scene-ink" d="M48 14h8v95h-8zM40 105h50v8H40z" />
      <path className="scene-accent" d="M56 20h76l-14 24 14 25H56z" />
      <path className="scene-ink" d="M52 16h87l-16 28 16 29H52zm8 8v41h65l-11-21 11-20z" />
      <path className="scene-white" d="m90 29 5 10 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2z" />
    </g>
  ),
}

export function PixelIllustration({
  visualKey,
  accent,
  compact = false,
  locale = 'en',
}: {
  visualKey: VisualKey
  accent: Accent
  compact?: boolean
  locale?: Locale
}) {
  return (
    <svg
      className={`pixel-illustration pixel-illustration--${accent}${compact ? ' pixel-illustration--compact' : ''}`}
      viewBox="0 0 180 128"
      role="img"
      aria-label={visualLabels[visualKey][locale]}
      shapeRendering="crispEdges"
    >
      <style>{`.scene-ink{fill:#222222}.scene-white{fill:#ffffff}.scene-dark{fill:#32383f}.scene-gray{fill:#9ba1a6}.scene-shadow{fill:#dededb}.scene-yellow{fill:#ffd966}.scene-blue{fill:#6fa5e9}.scene-pink{fill:#f56788}.scene-mint{fill:#75aa72}.scene-accent{fill:${accentColors[accent]}}`}</style>
      <g className="scene-sparkles">
        <path className="scene-yellow" d="M18 29h5v-8h5v8h8v5h-8v8h-5v-8h-5z" />
        <path className="scene-blue" d="M145 17h4v-6h4v6h6v4h-6v6h-4v-6h-4z" />
        <rect className="scene-pink" x="151" y="77" width="7" height="7" />
        <rect className="scene-mint" x="20" y="76" width="6" height="6" />
      </g>
      {sceneMap[visualKey]}
    </svg>
  )
}
