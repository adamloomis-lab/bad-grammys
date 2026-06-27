import { Link, useLocation } from 'wouter'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'

// Desktop-only floating "Start Your Order" pill (D&D pattern, rust-brand),
// revealed once the visitor scrolls past the hero. A glowing, sheened rust
// capsule that reads as premium. Hidden on the contact page where the form
// already lives.
export default function StickyOrder() {
  const show = useScrolled(560)
  const [location] = useLocation()

  if (location === '/contact') return null

  return (
    <Link
      href="/contact"
      className={`group fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-rust-500 to-rust-700 px-7 py-4 text-sm font-bold uppercase tracking-widest text-cream shadow-[0_16px_44px_-8px_rgba(194,105,62,0.6)] ring-1 ring-cream/15 transition-all duration-300 hover:scale-[1.04] lg:flex ${
        show
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_1s_ease]"
        aria-hidden="true"
      />
      <Sparkles className="h-4 w-4" /> Start Your Order
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
