import { Phone, Facebook } from 'lucide-react'
import { company } from '../data/site'
import { useDuckOnScroll } from '../hooks/useDuckOnScroll'

// Elevated floating action capsule on mobile (D&D pattern, rust-brand): a
// blurred bark-dark bar that stands off the edge, with a glassy Facebook
// button and a glowing rust Call button. The two ways to actually place an
// order, revealed once the user scrolls past the hero.
export default function MobileCallBar() {
  // Duck on scroll: hides while scrolling, glides back 550ms after it stops.
  const show = useDuckOnScroll({ revealAfter: 560, settleMs: 550 })

  return (
    <nav
      aria-label="Quick actions"
      className={`fixed inset-x-0 bottom-0 z-40 px-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-2.5 rounded-2xl border border-cream/10 bg-bark-900/85 p-2 shadow-[0_14px_40px_rgba(51,39,31,0.5)] backdrop-blur-xl">
        <a
          href={company.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cream/10 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition-all active:scale-95"
        >
          <Facebook className="h-4 w-4 text-rust-300" /> Message
        </a>
        <a
          href={company.phoneHref}
          className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-rust-500 py-3.5 text-sm font-bold uppercase tracking-widest text-cream shadow-soft animate-glow-pulse transition-all active:scale-95"
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]"
            aria-hidden="true"
          />
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>
    </nav>
  )
}
