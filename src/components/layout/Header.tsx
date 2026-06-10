import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import navLinks from '@/data/navigation.json'
import athleteData from '@/data/athlete.json'
import type { Athlete, NavLink } from '@/types'

const athlete = athleteData as Athlete
const links = navLinks as NavLink[]
const sectionIds = links.map((l) => l.id)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-judo-brown/10 bg-judo-black/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-judo-purple focus:px-4 focus:py-2"
      >
        Ir para conteúdo
      </a>

      <div className="section-container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          className="text-lg font-bold tracking-tight text-judo-white"
        >
          {athlete.shortName}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-purple ${
                activeId === link.id
                  ? 'bg-judo-purple/20 text-judo-purple-light'
                  : 'text-judo-muted hover:text-judo-brown-light'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 text-judo-white lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-judo-purple"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-judo-brown/10 bg-judo-black lg:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    activeId === link.id
                      ? 'bg-judo-purple/20 text-judo-purple-light'
                      : 'text-judo-muted'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
