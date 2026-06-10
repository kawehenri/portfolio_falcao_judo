import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      className={`mb-12 max-w-3xl ${alignClass}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-judo-purple-light">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-judo-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-judo-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
