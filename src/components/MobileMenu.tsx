import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'wouter'
import { X, Phone, MapPin, Heart, ArrowRight, Facebook } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'

export interface MobileMenuProps {
  readonly open: boolean
  readonly onClose: () => void
  readonly links: ReadonlyArray<{ readonly href: string; readonly label: string }>
}

// Full-screen, high-warmth mobile navigation (ALM "D&D" pattern, rust brand).
// Blurred backdrop fades in while a dark-bark panel slides in from the right,
// nav links stagger in with an arrow nudge, and the contact footer keeps the
// handmade "order by call or message" feel of Bad Grammy's Creations.
export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const [shown, setShown] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const id = requestAnimationFrame(() => setShown(true))
      return () => {
        cancelAnimationFrame(id)
        document.body.style.overflow = ''
      }
    }
    setShown(false)
    document.body.style.overflow = ''
  }, [open])

  if (!open) return null
  // SSR guard — document only exists in the browser.
  if (typeof document === 'undefined') return null

  // IMPORTANT: render at document.body via portal so the panel's `position:
  // fixed` escapes the header's containing block. The header uses
  // `backdrop-blur` once scrolled, which makes it a containing block for
  // fixed descendants — that's why the menu was clipping to the header
  // strip after scrolling before this portal was added.
  return createPortal(
    <div className="lg:hidden fixed inset-0 z-[60]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-bark-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-bark-900 text-cream shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Soft rust glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 8%, rgba(194,105,62,0.22) 0, transparent 45%), radial-gradient(circle at 10% 92%, rgba(74,107,82,0.16) 0, transparent 48%)',
          }}
        />

        <div className="relative flex min-h-full flex-col px-7 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <Logo light className="[&_img]:h-12 [&_img]:w-12 [&_img]:sm:h-12 [&_img]:sm:w-12 [&>span>span:first-child]:text-3xl" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <X size={24} />
            </button>
          </div>

          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-rust-500 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-cream animate-pulse" /> Handmade with love
          </span>

          <nav className="mt-6 flex flex-col">
            {links.map((l, i) => {
              const active = location === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex items-center justify-between border-b border-cream/10 py-4 font-display text-3xl uppercase tracking-tight transition-all duration-500 hover:text-rust-300 ${
                    active ? 'text-rust-300' : 'text-cream/90'
                  } ${shown ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                  style={{ transitionDelay: `${120 + i * 70}ms` }}
                >
                  {l.label}
                  <ArrowRight
                    size={20}
                    className="text-cream/30 transition-all group-hover:translate-x-1 group-hover:text-rust-300"
                  />
                </Link>
              )
            })}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${120 + links.length * 70 + 60}ms` }}
          >
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-rust-500 px-6 py-4 text-base font-bold uppercase tracking-widest text-cream shadow-soft transition hover:bg-rust-600"
            >
              <Phone size={18} /> Call {company.phone}
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-cream/70 px-6 py-4 text-base font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-bark-900"
            >
              Start Your Order
            </Link>
          </div>

          <div className="mt-auto space-y-3 pt-10 text-sm text-cream/70">
            <p className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-rust-300" /> {company.region}
            </p>
            <p className="flex items-center gap-3">
              <Heart size={18} className="shrink-0 text-rust-300" /> Order by call or Facebook message
            </p>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-cream"
            >
              <Facebook size={18} className="shrink-0 text-rust-300" /> Bad Grammy&apos;s on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
