import { Phone, Facebook } from 'lucide-react'
import { company } from '../data/site'

export default function CtaBand({
  heading = "Let's make a gift they'll never forget",
  sub = company.motto,
}: {
  readonly heading?: string
  readonly sub?: string
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="reveal mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-pine-600 px-6 py-12 text-center text-cream shadow-lift sm:px-12 sm:py-16">
        <p className="font-script text-3xl text-rust-200 sm:text-4xl">Ready to create something amazing?</p>
        <h2 className="mt-3 text-3xl font-semibold text-cream sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/85">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
          >
            <Phone className="h-5 w-5" /> Call {company.phone}
          </a>
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 text-base font-bold text-cream transition hover:bg-cream/10"
          >
            <Facebook className="h-5 w-5" /> Message on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
