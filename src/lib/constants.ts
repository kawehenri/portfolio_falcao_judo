export const BASE_URL = import.meta.env.BASE_URL
export const SITE_URL = 'https://rodrigofalcaojudo.site'

export function publicUrl(path: string): string {
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

export const GALLERY_CATEGORIES = {
  treinos: 'Treinos',
  competicoes: 'Competições',
  podios: 'Pódios',
  bastidores: 'Bastidores',
} as const
