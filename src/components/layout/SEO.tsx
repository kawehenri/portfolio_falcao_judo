import { useEffect } from 'react'
import { SITE_URL } from '@/lib/constants'
import athleteData from '@/data/athlete.json'
import type { Athlete } from '@/types'

const athlete = athleteData as Athlete

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function SEO() {
  useEffect(() => {
    const title = `${athlete.shortName} — Atleta de Judô | Alto Rendimento`
    const description = `${athlete.shortName}, ${athlete.age} anos. Campeão Brasileiro SUB-15 (2026), Vice Pan-Americano e Sul-Americano. Líder do ranking de Judô do Distrito Federal.`
    const image = `${SITE_URL}/imgs/perfil.jpeg`

    document.title = title
    setMeta('description', description)
    setMeta(
      'keywords',
      'judô, atleta, Rodrigo Falcão, alto rendimento, campeão brasileiro, SUB-15, Distrito Federal, patrocínio esportivo',
    )
    setMeta('og:type', 'website', true)
    setMeta('og:url', SITE_URL, true)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:image', image, true)
    setMeta('og:locale', 'pt_BR', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [])

  return null
}
