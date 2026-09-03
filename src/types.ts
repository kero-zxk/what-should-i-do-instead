export type Accent = 'blue' | 'yellow' | 'mint'

export type Locale = 'zh-CN' | 'en'

export type LocalizedCopy = Record<Locale, string>

export type VisualKey =
  | 'camera'
  | 'compass'
  | 'cinema'
  | 'phone'
  | 'pencil'
  | 'sculpture'
  | 'star'
  | 'idea'
  | 'folder'
  | 'flag'

export interface Escape {
  id: string
  title: LocalizedCopy
  description: LocalizedCopy
  resultTemplate: LocalizedCopy
  visualKey: VisualKey
  accent: Accent
}

export type AppStage = 'input' | 'escape' | 'result'
