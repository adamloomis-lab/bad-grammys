import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, Phone } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-offer', label: 'What We Offer' },
  { href: '/spirit-wear', label: 'Spirit Wear' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()
  const scrolled = useScrolled(40)

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/95 shadow-soft backdrop-blur' : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {links.map((l) => {
            const active = location === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-lg font-semibold tracking-wide transition-colors ${
                  active ? 'text-rust-600' : 'text-bark-800 hover:text-rust-600'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-rust-500 transition-all ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            )
          })}
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-6 py-3 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
          >
            <Phone className="h-5 w-5" />
            {company.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-full p-2 text-bark-800 transition hover:bg-rust-50 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  )
}
