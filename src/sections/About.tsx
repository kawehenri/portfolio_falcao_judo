import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeUp, staggerContainer } from '@/lib/animations'
import athleteData from '@/data/athlete.json'
import type { Athlete } from '@/types'

const athlete = athleteData as Athlete

export function About() {
  return (
    <section id="sobre" className="section-padding bg-judo-graphite/30">
      <div className="section-container">
        <SectionTitle
          subtitle="Sobre o Atleta"
          title="Uma trajetória de disciplina e resultados"
          description="Conheça a história, os valores e os objetivos de Rodrigo Falcão no Judô de alto rendimento."
        />

        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="card-surface p-8">
            <h3 className="mb-4 text-xl font-semibold text-judo-white">Biografia</h3>
            <p className="leading-relaxed text-judo-muted">{athlete.bio}</p>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-judo-white">História no Judô</h3>
            <p className="leading-relaxed text-judo-muted">{athlete.history}</p>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeUp}>
            <div className="card-surface p-8">
              <h3 className="mb-4 text-xl font-semibold text-judo-white">Valores Pessoais</h3>
              <ul className="space-y-3">
                {athlete.values.map((value) => (
                  <li key={value} className="flex items-start gap-3 text-judo-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-judo-purple" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-8">
              <h3 className="mb-4 text-xl font-semibold text-judo-white">Objetivos Futuros</h3>
              <ul className="space-y-3">
                {athlete.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-judo-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-judo-brown" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
