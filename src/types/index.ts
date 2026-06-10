export type GalleryCategory = 'treinos' | 'competicoes' | 'podios' | 'bastidores'

export type MedalType = 'ouro' | 'prata' | 'bronze' | 'titulo'

export interface Athlete {
  name: string
  shortName: string
  birthDate: string
  age: number
  category: string
  weightClass: string
  club: string
  city: string
  federation: string
  belt: string
  height: string
  weight: string
  instagram: string
  instagramUrl: string
  email: string
  phone: string
  whatsapp: string
  tagline: string
  heroQuote: string
  bio: string
  history: string
  values: string[]
  goals: string[]
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  icon: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  highlight?: boolean
}

export interface Achievement {
  id: string
  title: string
  year: string
  type: MedalType
  location?: string
  description: string
  details: string
}

export interface Competition {
  id: string
  year: number
  name: string
  location: string
  result: string
  medal?: MedalType
}

export interface GalleryItem {
  id: string
  category: GalleryCategory
  src: string | null
  alt: string
  caption: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string | null
  url: string
  tier: 'bronze' | 'prata' | 'ouro' | 'parceiro'
}

export interface NavLink {
  id: string
  label: string
  href: string
}
