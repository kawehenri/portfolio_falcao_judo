import { motion } from 'framer-motion'
import { HiPhotograph } from 'react-icons/hi'
import type { GalleryItem } from '@/types'
import { publicUrl } from '@/lib/constants'

interface GalleryThumbnailProps {
  item: GalleryItem
  onClick: () => void
}

export function GalleryThumbnail({ item, onClick }: GalleryThumbnailProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group relative aspect-[3/4] w-[220px] shrink-0 overflow-hidden rounded-lg bg-judo-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-purple sm:w-[260px] md:w-[280px]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Ver imagem: ${item.caption}`}
    >
      {item.src ? (
        <img
          src={publicUrl(item.src)}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-judo-graphite to-judo-black">
          <HiPhotograph className="h-10 w-10 text-judo-muted/40" aria-hidden />
          <span className="mt-2 text-xs text-judo-muted/60">Em breve</span>
        </div>
      )}

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="p-3 text-left text-sm font-medium leading-snug text-judo-white">
          {item.caption}
        </p>
      </div>
    </motion.button>
  )
}
