import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaCopy, FaCheck, FaTimes } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { publicUrl } from '@/lib/constants'
import campaignData from '@/data/campaign.json'

interface Campaign {
  active: boolean
  dismissKey: string
  badge: string
  title: string
  subtitle: string
  chips: string[]
  image: string
  imageAlt: string
  pixKey: string
  pixLabel: string
  instagramUrl: string
  instagramLabel: string
}

const campaign = campaignData as Campaign

export function MexicoCampaignBanner() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!campaign.active) return
    const dismissed = localStorage.getItem(campaign.dismissKey)
    setVisible(dismissed !== 'true')
  }, [])

  const handleDismiss = () => {
    localStorage.setItem(campaign.dismissKey, 'true')
    setVisible(false)
  }

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(campaign.pixKey)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  if (!campaign.active) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative overflow-hidden border-b border-judo-purple/20 bg-gradient-to-br from-judo-black via-judo-graphite to-judo-black"
          aria-label="Campanha Pan-Americano México 2026"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-judo-purple/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-judo-brown/10 blur-3xl" />

          <div className="section-container relative px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute right-4 top-4 rounded-full p-2 text-judo-muted transition-colors hover:bg-judo-graphite hover:text-judo-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple sm:right-6 lg:right-8"
              aria-label="Fechar aviso"
            >
              <FaTimes className="h-4 w-4" />
            </button>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border border-judo-purple/25 shadow-2xl shadow-judo-purple/10">
                  <img
                    src={publicUrl(campaign.image)}
                    alt={campaign.imageAlt}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="max-w-xl">
                <span className="mb-3 inline-block rounded-full border border-judo-purple/30 bg-judo-purple/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-judo-purple-light">
                  {campaign.badge}
                </span>

                <h2 className="text-2xl font-bold leading-tight text-judo-white sm:text-3xl">
                  {campaign.title}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-judo-muted sm:text-lg">
                  {campaign.subtitle}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {campaign.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-judo-brown/20 bg-judo-graphite px-3 py-1 text-xs font-medium text-judo-muted"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={campaign.instagramUrl} external>
                    <FaInstagram className="h-4 w-4" />
                    {campaign.instagramLabel}
                  </Button>
                  <Button variant="outline" onClick={handleCopyPix}>
                    {copied ? (
                      <FaCheck className="h-4 w-4 text-green-400" />
                    ) : (
                      <FaCopy className="h-4 w-4" />
                    )}
                    {copied ? 'PIX copiado!' : campaign.pixLabel}
                  </Button>
                </div>

                <p className="mt-4 text-xs text-judo-muted">
                  Chave PIX: {campaign.pixKey}
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
