import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import navLinks from '@/data/navigation.json'
import athleteData from '@/data/athlete.json'
import type { Athlete, NavLink } from '@/types'

const athlete = athleteData as Athlete
const links = navLinks as NavLink[]
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-judo-brown/10 bg-judo-graphite/50">
      <div className="section-container section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-judo-white">{athlete.shortName}</h3>
            <p className="mt-2 text-sm text-judo-muted">{athlete.tagline}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={athlete.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-judo-graphite text-judo-muted transition-colors hover:bg-judo-purple hover:text-judo-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${athlete.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-judo-graphite text-judo-muted transition-colors hover:bg-judo-brown hover:text-judo-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${athlete.email}`}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-judo-graphite text-judo-muted transition-colors hover:bg-judo-brown-light hover:text-judo-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-judo-purple-light">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-judo-muted transition-colors hover:text-judo-brown-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-judo-purple-light">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-judo-muted">
              <li>{athlete.email}</li>
              <li>{athlete.phone}</li>
              <li>{athlete.instagram}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-judo-brown/10 pt-6 text-center text-sm text-judo-muted">
          <p>
            &copy; {year} {athlete.name}. Todos os direitos reservados.
          </p>
          <p className="mt-1 text-xs">
            Grandes marcas se conectam a grandes histórias.
          </p>
          <p className="mt-2 text-xs text-judo-muted/80">
            Desenvolvido por Kawê Henrique
          </p>
        </div>
      </div>
    </footer>
  )
}
