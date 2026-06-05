import { Link } from 'wouter'
import { company } from '../data/site'

export default function Logo({ className = '', light = false }: { readonly className?: string; readonly light?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={`${company.name}, home`}
    >
      <img
        src="/images/logo.png"
        alt=""
        width={56}
        height={56}
        className="h-12 w-12 rounded-full ring-2 ring-rust-300/60 transition group-hover:ring-rust-500 sm:h-14 sm:w-14"
      />
      <span className="leading-tight">
        <span
          className={`block font-script text-2xl sm:text-[1.7rem] ${light ? 'text-cream' : 'text-rust-600'}`}
        >
          Bad Grammy's
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${light ? 'text-cream/80' : 'text-bark-700/80'}`}
        >
          Creations
        </span>
      </span>
    </Link>
  )
}
