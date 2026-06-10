import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeUp, staggerContainer } from '@/lib/animations'
import sponsorsData from '@/data/sponsors.json'
import type { Sponsor } from '@/types'

const sponsors = sponsorsData as Sponsor[]

const tierLabels = {
  ouro: 'Patrocinador Ouro',
  prata: 'Patrocinador Prata',
  bronze: 'Patrocinador Bronze',
  parceiro: 'Parceiro',
}

export function Sponsors() {
  return (
    <section id="patrocinadores" className="section-padding">
      <div className="section-container">
        <SectionTitle
          subtitle="Patrocinadores"
          title="Parceiros e apoiadores"
          description="Empresas e instituições que acreditam neste projeto de alto rendimento."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.url}
              variants={fadeUp}
              className="card-surface group flex flex-col items-center justify-center p-8 text-center transition-colors hover:border-judo-purple/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-purple"
              whileHover={{ y: -4 }}
            >
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 w-auto max-w-full object-contain"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-white/20 bg-judo-black/30">
                  <span className="text-2xl font-bold text-judo-muted/50">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
              )}

              <h3 className="mt-4 text-sm font-semibold text-judo-white group-hover:text-judo-purple transition-colors">
                {sponsor.name}
              </h3>

              <span className="mt-2 text-xs text-judo-muted">
                {tierLabels[sponsor.tier]}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-center text-judo-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Interessado em patrocinar?{' '}
          <a href="#contato" className="font-semibold text-judo-purple hover:underline">
            Entre em contato
          </a>
        </motion.p>
      </div>
    </section>
  )
}
