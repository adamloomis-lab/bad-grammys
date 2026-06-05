import { Phone, Facebook } from 'lucide-react'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

// Sticky bottom bar on mobile — the two ways to actually place an order
// (call or message on Facebook), revealed once the user scrolls past the hero.
export default function MobileCallBar() {
  const show = useScrolled(560)

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-rust-100 bg-cream/95 px-3 py-2.5 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2.5">
        <a
          href={company.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rust-500 px-4 py-3 text-sm font-bold text-cream shadow-soft"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={company.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pine-600 px-4 py-3 text-sm font-bold text-cream shadow-soft"
        >
          <Facebook className="h-4 w-4" /> Message
        </a>
      </div>
    </div>
  )
}
