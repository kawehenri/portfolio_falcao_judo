import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeUp, staggerContainer } from '@/lib/animations'
import achievementsData from '@/data/achievements.json'
import type { Achievement, MedalType } from '@/types'

const achievements = achievementsData as Achievement[]

const medalStyles: Record<MedalType, string> = {
  ouro: 'border-judo-gold/30 bg-judo-gold/10 text-judo-gold',
  prata: 'border-judo-silver/30 bg-judo-silver/10 text-judo-silver',
  bronze: 'border-judo-bronze/30 bg-judo-bronze/10 text-judo-bronze',
  titulo: 'border-judo-purple/30 bg-judo-purple/10 text-judo-purple-light',
}

const medalLabels: Record<MedalType, string> = {
  ouro: 'Ouro',
  prata: 'Prata',
  bronze: 'Bronze',
  titulo: 'Título',
}

export function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null)

  return (
    <section id="conquistas" className="section-padding">
      <div className="section-container">
        <SectionTitle
          subtitle="Conquistas"
          title="Títulos e medalhas"
          description="Principais campeonatos, pódios e premiações da carreira."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {achievements.map((achievement) => (
            <motion.button
              key={achievement.id}
              variants={fadeUp}
              onClick={() => setSelected(achievement)}
              className="card-surface group cursor-pointer p-6 text-left transition-colors hover:border-judo-brown/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-brown"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${medalStyles[achievement.type]}`}
                >
                  {medalLabels[achievement.type]}
                </span>
                <span className="text-sm font-bold text-judo-brown">{achievement.year}</span>
              </div>

              <h3 className="text-lg font-semibold text-judo-white group-hover:text-judo-brown transition-colors">
                {achievement.title}
              </h3>

              {achievement.location && (
                <p className="mt-1 text-sm text-judo-muted">{achievement.location}</p>
              )}

              <p className="mt-3 text-sm leading-relaxed text-judo-muted line-clamp-2">
                {achievement.description}
              </p>

              <span className="mt-4 inline-block text-xs font-medium text-judo-brown">
                Ver detalhes →
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-judo-graphite p-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-judo-black text-judo-muted hover:text-judo-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-brown"
                aria-label="Fechar"
              >
                <HiX className="h-5 w-5" />
              </button>

              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${medalStyles[selected.type]}`}
              >
                {medalLabels[selected.type]} — {selected.year}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-judo-white">{selected.title}</h3>

              {selected.location && (
                <p className="mt-2 text-judo-muted">{selected.location}</p>
              )}

              <p className="mt-4 leading-relaxed text-judo-muted">{selected.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
