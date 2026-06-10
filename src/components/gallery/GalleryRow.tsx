import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { GalleryThumbnail } from './GalleryThumbnail'
import type { GalleryItem } from '@/types'

interface GalleryRowProps {
  title: string
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
}

export function GalleryRow({ title, items, onItemClick }: GalleryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -320 : 320
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  if (items.length === 0) return null

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between px-4 sm:px-0">
        <h3 className="text-xl font-semibold text-judo-white">{title}</h3>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => scroll('left')}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-judo-graphite text-judo-white transition-colors hover:bg-judo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
            aria-label={`Rolar ${title} para esquerda`}
          >
            <HiChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-judo-graphite text-judo-white transition-colors hover:bg-judo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
            aria-label={`Rolar ${title} para direita`}
          >
            <HiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="gallery-scroll flex gap-3 overflow-x-auto px-4 pb-2 sm:px-0"
        role="list"
        aria-label={`Galeria: ${title}`}
      >
        {items.map((item) => (
          <div key={item.id} role="listitem">
            <GalleryThumbnail item={item} onClick={() => onItemClick(item)} />
          </div>
        ))}
      </div>
    </div>
  )
}
