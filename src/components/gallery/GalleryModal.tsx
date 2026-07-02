import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiPhotograph } from 'react-icons/hi'
import type { GalleryItem } from '@/types'
import { publicUrl } from '@/lib/constants'

interface GalleryModalProps {
  item: GalleryItem | null
  onClose: () => void
}

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-judo-graphite"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-judo-white transition-colors hover:bg-judo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
              aria-label="Fechar modal"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full">
              {item.src ? (
                <img
                  src={publicUrl(item.src)}
                  alt={item.alt}
                  className="h-full w-full object-contain bg-judo-black"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-judo-graphite to-judo-black">
                  <HiPhotograph className="h-16 w-16 text-judo-muted/40" />
                  <p className="mt-4 text-judo-muted">Imagem em breve</p>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 p-6">
              <p className="text-lg font-semibold text-judo-white">{item.caption}</p>
              <p className="mt-1 text-sm text-judo-muted">{item.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
