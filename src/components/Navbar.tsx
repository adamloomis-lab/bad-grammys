import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-offer', label: 'What We Offer' },
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
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
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-bark-800 transition hover:bg-rust-50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-rust-100 bg-cream lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3.5 text-xl font-semibold transition ${
                  location === l.href
                    ? 'bg-rust-50 text-rust-600'
                    : 'text-bark-800 hover:bg-rust-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-5 py-3.5 text-lg font-bold text-cream shadow-soft"
            >
              <Phone className="h-5 w-5" />
              Call {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
