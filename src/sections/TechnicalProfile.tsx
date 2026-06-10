import { motion } from 'framer-motion'
import {
  FaWeight,
  FaRulerVertical,
  FaIdBadge,
  FaMapMarkerAlt,
  FaBuilding,
  FaFlag,
} from 'react-icons/fa'
import { GiKimono } from 'react-icons/gi'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeUp, staggerContainer } from '@/lib/animations'
import athleteData from '@/data/athlete.json'
import type { Athlete } from '@/types'

const athlete = athleteData as Athlete

const fields = [
  { icon: FaIdBadge, label: 'Categoria', value: athlete.category },
  { icon: GiKimono, label: 'Faixa', value: athlete.belt },
  { icon: FaWeight, label: 'Peso', value: athlete.weight },
  { icon: FaRulerVertical, label: 'Altura', value: athlete.height },
  { icon: FaBuilding, label: 'Clube', value: athlete.club },
  { icon: FaMapMarkerAlt, label: 'Cidade', value: athlete.city },
  { icon: FaFlag, label: 'Federação', value: athlete.federation },
]

export function TechnicalProfile() {
  return (
    <section id="perfil" className="section-padding bg-judo-graphite/20">
      <div className="section-container">
        <SectionTitle
          subtitle="Perfil Técnico"
          title="Ficha do atleta"
          description="Informações técnicas e institucionais."
        />

        <motion.div
          className="mx-auto max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            variants={fadeUp}
            className="card-surface overflow-hidden"
          >
            <div className="border-b border-white/5 bg-judo-brown/10 px-8 py-6">
              <h3 className="text-2xl font-bold text-judo-white">{athlete.name}</h3>
              <p className="mt-1 text-judo-muted">
                {athlete.category} · {athlete.weightClass}
              </p>
            </div>

            <div className="grid gap-px bg-white/5 sm:grid-cols-2">
              {fields.map((field) => (
                <motion.div
                  key={field.label}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-judo-graphite/60 px-8 py-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-judo-black/50">
                    <field.icon className="h-5 w-5 text-judo-brown" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-judo-muted">
                      {field.label}
                    </p>
                    <p className="mt-0.5 text-lg font-medium text-judo-white">{field.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-px border-t border-white/5 bg-white/5 sm:grid-cols-2">
              <div className="bg-judo-graphite/60 px-8 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Nascimento
                </p>
                <p className="mt-0.5 text-judo-white">
                  {athlete.birthDate} ({athlete.age} anos)
                </p>
              </div>
              <div className="bg-judo-graphite/60 px-8 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Classe de Peso
                </p>
                <p className="mt-0.5 text-judo-white">{athlete.weightClass}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
