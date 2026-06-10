import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { fadeUp, staggerContainer } from '@/lib/animations'
import athleteData from '@/data/athlete.json'
import type { Athlete } from '@/types'

const athlete = athleteData as Athlete

const contacts = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: athlete.phone,
    href: `https://wa.me/${athlete.whatsapp}`,
    external: true,
    iconBg: 'bg-judo-brown/15',
    iconColor: 'text-judo-brown-light',
  },
  {
    icon: FaEnvelope,
    label: 'E-mail',
    value: athlete.email,
    href: `mailto:${athlete.email}`,
    external: false,
    iconBg: 'bg-judo-purple/15',
    iconColor: 'text-judo-purple-light',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: athlete.instagram,
    href: athlete.instagramUrl,
    external: true,
    iconBg: 'bg-judo-graphite-light',
    iconColor: 'text-judo-purple-light',
  },
]

export function Contact() {
  return (
    <section id="contato" className="section-padding bg-judo-graphite/30">
      <div className="section-container">
        <SectionTitle
          subtitle="Contato"
          title="Vamos conversar"
          description="Patrocinadores, clubes, federações e imprensa — entre em contato diretamente."
        />

        <motion.div
          className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              className="card-surface flex flex-col items-center gap-4 p-8 text-center transition-colors hover:border-judo-purple/30"
              whileHover={{ y: -4 }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${contact.iconBg}`}>
                <contact.icon className={`h-6 w-6 ${contact.iconColor}`} />
              </div>
              <div>
                <p className="text-sm text-judo-muted">{contact.label}</p>
                <p className="mt-1 font-semibold text-judo-white">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
