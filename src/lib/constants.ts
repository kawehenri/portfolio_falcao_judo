export const BASE_URL = import.meta.env.BASE_URL
export const SITE_URL = 'https://rodrigofalcaojudo.site'
/** Incremente ao trocar arquivos em public/ para invalidar cache do navegador */
export const ASSET_VERSION = '2'

export function publicUrl(path: string): string {
  const normalized = path.replace(/^\//, '')
  const url = `${import.meta.env.BASE_URL}${normalized}`
  if (/\.(jpe?g|png|webp|gif|svg)$/i.test(normalized)) {
    return `${url}?v=${ASSET_VERSION}`
  }
  return url
}

export const GALLERY_CATEGORIES = {
  treinos: 'Treinos',
  competicoes: 'Competições',
  podios: 'Pódios',
  bastidores: 'Bastidores',
} as const
