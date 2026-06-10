import { useInViewCounter } from '@/hooks/useInViewCounter'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { FaMedal, FaTrophy, FaCalendarAlt, FaFlagCheckered } from 'react-icons/fa'
import { GiMedal } from 'react-icons/gi'
import type { Stat } from '@/types'

const iconMap = {
  gold: FaMedal,
  silver: GiMedal,
  bronze: GiMedal,
  competitions: FaFlagCheckered,
  years: FaCalendarAlt,
  default: FaTrophy,
}

interface AnimatedCounterProps {
  stat: Stat
}

export function AnimatedCounter({ stat }: AnimatedCounterProps) {
  const { ref, display } = useInViewCounter({
    end: stat.value,
    suffix: stat.suffix ?? '',
  })

  const Icon = iconMap[stat.icon as keyof typeof iconMap] ?? iconMap.default

  const iconColor =
    stat.icon === 'gold'
      ? 'text-judo-gold'
      : stat.icon === 'silver'
        ? 'text-judo-silver'
        : stat.icon === 'bronze'
          ? 'text-judo-bronze'
          : 'text-judo-purple-light'

  return (
    <motion.div
      ref={ref}
      className="card-surface group p-6 text-center transition-colors hover:border-judo-purple/30 sm:p-8"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-judo-black/50">
        <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden />
      </div>
      <p className="text-4xl font-bold text-judo-white sm:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-judo-muted">{stat.label}</p>
    </motion.div>
  )
}
