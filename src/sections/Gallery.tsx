import { useState, useMemo } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GalleryRow } from '@/components/gallery/GalleryRow'
import { GalleryModal } from '@/components/gallery/GalleryModal'
import { GALLERY_CATEGORIES } from '@/lib/constants'
import galleryData from '@/data/gallery.json'
import type { GalleryItem, GalleryCategory } from '@/types'

const items = galleryData as GalleryItem[]

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const grouped = useMemo(() => {
    return (Object.keys(GALLERY_CATEGORIES) as GalleryCategory[]).map((category) => ({
      category,
      title: GALLERY_CATEGORIES[category],
      items: items.filter((item) => item.category === category),
    }))
  }, [])

  return (
    <section id="galeria" className="section-padding overflow-hidden">
      <div className="section-container">
        <SectionTitle
          subtitle="Galeria"
          title="Momentos da carreira"
          description="Treinos, competições, pódios e bastidores. Passe o mouse para ver a legenda."
        />
      </div>

      <div className="section-container">
        {grouped.map((group) => (
          <GalleryRow
            key={group.category}
            title={group.title}
            items={group.items}
            onItemClick={setSelected}
          />
        ))}
      </div>

      <GalleryModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
