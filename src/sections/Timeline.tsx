import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useTimelineProgress } from '@/hooks/useTimelineProgress'
import timelineData from '@/data/timeline.json'
import type { TimelineEvent } from '@/types'

const events = timelineData as TimelineEvent[]

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-20% 0px -20% 0px' })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="timeline-row relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[1fr_48px_1fr] sm:gap-0"
    >
      <div
        className={`hidden items-center sm:flex ${
          isEven ? 'justify-end pr-8' : 'order-3 justify-start pl-8'
        }`}
      >
        <motion.span
          className={`timeline-year-animate text-lg font-bold text-judo-silver ${isInView ? 'is-visible' : ''}`}
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.4, x: isEven ? -10 : 10 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          {event.year}
        </motion.span>
      </div>

      <div className="relative flex flex-col items-center sm:order-2">
        <div
          className={`timeline-marker relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-judo-black transition-all duration-500 ${
            event.highlight
              ? 'border-judo-purple timeline-marker-highlight'
              : 'border-judo-brown'
          } ${isInView ? 'timeline-marker-active' : ''}`}
        >
          <div
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              event.highlight ? 'bg-judo-purple-light' : 'bg-judo-brown'
            }`}
          />
        </div>
      </div>

      <div className={`pb-10 sm:pb-14 ${isEven ? 'sm:order-3 sm:pl-8' : 'sm:order-1 sm:pr-8 sm:text-right'}`}>
        <motion.div
          className={`card-surface timeline-card-highlight p-6 transition-all duration-300 ${
            event.highlight ? 'border-judo-purple/25' : ''
          }`}
          initial={{ opacity: 0, x: isEven ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: isEven ? 20 : -20 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 18 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <span className="text-sm font-bold text-judo-brown-light sm:hidden">{event.year}</span>
          <h3 className="mt-1 text-lg font-semibold text-judo-white">{event.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-judo-muted">{event.description}</p>
        </motion.div>
      </div>
    </div>
  )
}

export function Timeline() {
  const { containerRef, progress } = useTimelineProgress()

  return (
    <section id="trajetoria" className="section-padding bg-judo-graphite/30">
      <div className="section-container">
        <SectionTitle
          subtitle="Linha do Tempo"
          title="Momentos marcantes da carreira"
          description="Competições, conquistas e marcos que definem a trajetória esportiva."
        />

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-judo-brown/20 sm:left-1/2 sm:-translate-x-px" />

          <div
            className="absolute left-5 top-0 w-0.5 origin-top bg-gradient-to-b from-judo-brown via-judo-purple to-judo-purple/30 sm:left-1/2 sm:-translate-x-px"
            style={{
              height: '100%',
              transform: `scaleY(${progress})`,
            }}
          />

          <div className="relative">
            {events.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
