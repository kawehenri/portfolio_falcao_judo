import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { useParallax } from '@/hooks/useParallax'
import { BASE_URL } from '@/lib/constants'
import athleteData from '@/data/athlete.json'
import type { Athlete } from '@/types'
import perfilImg from '@/assets/imgs/perfil.jpeg'

const athlete = athleteData as Athlete

const fundoImages = import.meta.glob('@/assets/imgs/fundo.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const fundoSrc = Object.values(fundoImages)[0] ?? null

export function Hero() {
  const parallax = useParallax(0.15)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {fundoSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <img src={fundoSrc} alt="" className="hero-bg-image h-full w-full object-cover" />
        </div>
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-judo-black/82 via-judo-black/72 to-judo-graphite/40" />

      <div
        className="absolute -right-1/4 top-0 z-[2] h-[600px] w-[600px] rounded-full bg-judo-purple/10 blur-3xl"
        style={{ transform: `translateY(${parallax}px)` }}
      />
      <div
        className="absolute -left-1/4 bottom-0 z-[2] h-[400px] w-[400px] rounded-full bg-judo-brown/8 blur-3xl"
        style={{ transform: `translateY(${-parallax * 0.5}px)` }}
      />

      <div className="section-container relative z-10 grid items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-4 inline-block rounded-full border border-judo-purple/30 bg-judo-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-judo-purple-light">
            Alto Rendimento
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-judo-white sm:text-5xl lg:text-6xl">
            {athlete.shortName}
          </h1>

          <p className="mt-3 text-lg text-judo-muted">{athlete.tagline}</p>

          <p className="mt-6 max-w-lg text-xl font-medium italic text-judo-brown-light/90">
            &ldquo;{athlete.heroQuote}&rdquo;
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-judo-muted">
            <span className="rounded-full border border-judo-brown/20 bg-judo-graphite px-3 py-1">{athlete.category}</span>
            <span className="rounded-full border border-judo-brown/20 bg-judo-graphite px-3 py-1">{athlete.weightClass}</span>
            <span className="rounded-full border border-judo-purple/20 bg-judo-graphite px-3 py-1">Faixa {athlete.belt}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contato">
              <FaEnvelope className="h-4 w-4" />
              Entrar em Contato
            </Button>
            <Button variant="outline" href={`${BASE_URL}/curriculo.pdf`} external>
              <FaDownload className="h-4 w-4" />
              Currículo Esportivo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ transform: `translateY(${-parallax * 0.5}px)` }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-judo-brown/20 shadow-2xl shadow-judo-purple/10">
            <img
              src={perfilImg}
              alt={`${athlete.shortName} — Atleta de Judô`}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-judo-black/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-xl border border-judo-brown/20 bg-judo-graphite/90 px-5 py-3 backdrop-blur-sm sm:-bottom-6 sm:-left-6">
            <p className="text-xs uppercase tracking-wider text-judo-muted">Ranking DF</p>
            <p className="text-lg font-bold text-judo-brown-light">Líder</p>
          </div>

          <div className="absolute -right-4 -top-4 rounded-xl border border-judo-purple/30 bg-judo-purple/15 px-5 py-3 backdrop-blur-sm sm:-right-6 sm:-top-6">
            <p className="text-xs uppercase tracking-wider text-judo-purple-light">2026</p>
            <p className="text-lg font-bold text-judo-white">Campeão Brasileiro</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
