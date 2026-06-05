import { Link } from 'wouter'
import { Phone, Facebook, Heart } from 'lucide-react'
import { company } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-bark-900 text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt=""
              width={52}
              height={52}
              className="h-12 w-12 rounded-full ring-2 ring-rust-300/50"
            />
            <span>
              <span className="block font-script text-2xl text-rust-300">Bad Grammy's</span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-cream/60">
                Creations
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {company.motto}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-4 py-2.5 text-sm font-bold text-cream transition hover:bg-rust-600"
            >
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-cream">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="text-cream/70 transition hover:text-rust-300">Home</Link></li>
            <li><Link href="/what-we-offer" className="text-cream/70 transition hover:text-rust-300">What We Offer</Link></li>
            <li><Link href="/gallery" className="text-cream/70 transition hover:text-rust-300">Gallery</Link></li>
            <li><Link href="/contact" className="text-cream/70 transition hover:text-rust-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-cream">Order &amp; Info</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="text-cream/70">Made to order in {company.region}</li>
            <li><a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition hover:text-rust-300">Message us on Facebook</a></li>
            <li><Link href="/privacy" className="text-cream/70 transition hover:text-rust-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-cream/70 transition hover:text-rust-300">Terms of Service</Link></li>
            <li><Link href="/accessibility" className="text-cream/70 transition hover:text-rust-300">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-cream/55 sm:flex-row sm:px-6">
          <p className="flex items-center gap-1.5">
            © {year} {company.name}. Made with <Heart className="h-3.5 w-3.5 fill-rust-400 text-rust-400" /> in {company.region}.
          </p>
          <a
            href="https://adamloomis.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 opacity-80 transition hover:opacity-100"
          >
            <img src="/images/adam-loomis-logo.png" alt="Adam Loomis Marketing" width={20} height={20} className="h-5 w-5 rounded" />
            <span>Site by Adam Loomis Marketing</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
