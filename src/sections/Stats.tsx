import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { staggerContainer } from '@/lib/animations'
import statsData from '@/data/stats.json'
import type { Stat } from '@/types'

const stats = statsData as Stat[]

export function Stats() {
  return (
    <section id="estatisticas" className="section-padding">
      <div className="section-container">
        <SectionTitle
          subtitle="Estatísticas"
          title="Números que comprovam o rendimento"
          description="Resultados acumulados em competições estaduais, nacionais e internacionais."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
