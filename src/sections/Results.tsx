import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FilterTabs } from '@/components/ui/FilterTabs'
import { fadeUp } from '@/lib/animations'
import competitionsData from '@/data/competitions.json'
import type { Competition, MedalType } from '@/types'

const competitions = competitionsData as Competition[]

const medalBadge: Record<MedalType, string> = {
  ouro: 'bg-judo-gold/20 text-judo-gold',
  prata: 'bg-judo-silver/20 text-judo-silver',
  bronze: 'bg-judo-bronze/20 text-judo-bronze',
  titulo: 'bg-judo-purple/20 text-judo-purple-light',
}

const years = ['todos', ...Array.from(new Set(competitions.map((c) => c.year.toString()))).sort()]

export function Results() {
  const [filter, setFilter] = useState('todos')

  const filtered = useMemo(() => {
    if (filter === 'todos') return competitions
    return competitions.filter((c) => c.year.toString() === filter)
  }, [filter])

  const filterOptions = years.map((y) => ({
    label: y === 'todos' ? 'Todos' : y,
    value: y,
  }))

  return (
    <section id="resultados" className="section-padding bg-judo-graphite/20">
      <div className="section-container">
        <SectionTitle
          subtitle="Resultados"
          title="Histórico competitivo"
          description="Todas as competições disputadas com resultados detalhados."
        />

        <div className="mb-8">
          <FilterTabs options={filterOptions} active={filter} onChange={setFilter} />
        </div>

        <motion.div
          className="hidden overflow-hidden rounded-2xl border border-white/5 md:block"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-judo-graphite/80">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Ano
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Competição
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Local
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-judo-muted">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((comp, index) => (
                <motion.tr
                  key={comp.id}
                  className="border-b border-white/5 transition-colors hover:bg-judo-graphite/40"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <td className="px-6 py-4 font-semibold text-judo-brown-light">{comp.year}</td>
                  <td className="px-6 py-4 font-medium text-judo-white">{comp.name}</td>
                  <td className="px-6 py-4 text-judo-muted">{comp.location}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                        comp.medal ? medalBadge[comp.medal] : 'bg-judo-graphite text-judo-muted'
                      }`}
                    >
                      {comp.result}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="space-y-4 md:hidden">
          {filtered.map((comp) => (
            <motion.div
              key={comp.id}
              className="card-surface p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-judo-brown-light">{comp.year}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    comp.medal ? medalBadge[comp.medal] : 'bg-judo-graphite text-judo-muted'
                  }`}
                >
                  {comp.result}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-judo-white">{comp.name}</h3>
              <p className="mt-1 text-sm text-judo-muted">{comp.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
