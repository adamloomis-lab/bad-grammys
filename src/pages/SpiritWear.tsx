import { useState } from 'react'
import { Phone, Facebook, X } from 'lucide-react'
import { company, spiritWear } from '../data/site'
import { socks } from '../data/socks'
import CtaBand from '../components/CtaBand'

type Shot = { src: string; alt: string }

// Spirit-wear apparel showcase (sweatshirts, hoodies, hats). Newest design leads.
const apparel: Shot[] = [
  { src: '/images/gallery/creation-36.jpg', alt: 'Model wearing a light gray crewneck with an appliqué teddy bear holding a maroon Norton pennant' },
  { src: '/images/gallery/creation-35.jpg', alt: 'Model wearing a navy crewneck embroidered with "Kindergarten Teacher" and a name down the sleeve' },
  { src: '/images/gallery/creation-34.jpg', alt: 'Model wearing a red hoodie embroidered with "Panthers" in script across the chest' },
  { src: '/images/gallery/creation-31.jpg', alt: 'Black snapback cap embroidered with a red Norton "N" and panther logo' },
  { src: '/images/gallery/creation-33.jpg', alt: 'Black snapback cap embroidered with the purple Barberton Magics mascot' },
  { src: '/images/gallery/creation-24.jpg', alt: 'Red and gray knit beanies embroidered with the Panthers team name' },
]

export default function SpiritWear() {
  const [active, setActive] = useState<Shot | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="linen px-4 py-14 sm:px-6 sm:py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-bark-900 sm:text-5xl">Spirit Wear</h1>
          <p className="mt-4 text-lg text-bark-700">
            Custom embroidered gear for any school, in most colors, and ready before the first bell.
            Socks, sweatshirts, and apparel stitched with the logo your team loves.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
            >
              <Phone className="h-5 w-5" /> {company.phone}
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-rust-300 px-7 py-3.5 text-base font-bold text-rust-600 transition hover:bg-rust-50"
            >
              <Facebook className="h-5 w-5" /> Message on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Sweatshirt spotlight + pricing */}
      <section className="px-4 pb-4 sm:px-6">
        <div className="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-rust-600 text-cream shadow-lift">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative">
              <img
                src={spiritWear.image}
                alt={spiritWear.alt}
                width={680}
                height={900}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-[1.4rem] object-cover object-top shadow-lift"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-cream sm:text-4xl">Custom Sweatshirts &amp; Apparel</h2>
              <p className="mt-4 text-lg leading-relaxed text-cream/90">{spiritWear.lead}</p>
              <p className="mt-3 leading-relaxed text-cream/80">{spiritWear.detail}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-lg bg-cream/15 px-4 py-2.5 ring-1 ring-cream/25">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-widest text-cream/70">
                    Base price
                  </div>
                  <div className="text-xl font-bold text-cream">From ${spiritWear.basePrice}</div>
                </div>
                <div className="rounded-lg bg-cream/15 px-4 py-2.5 ring-1 ring-cream/25">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-widest text-cream/70">
                    Name + class year on sleeve
                  </div>
                  <div className="text-xl font-bold text-cream">+${spiritWear.sleeveAddOn}</div>
                </div>
              </div>

              <p className="mt-5 text-sm text-cream/75">
                Available for any school, in most colors, and ready in time for the first day. New
                designs added regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel showcase */}
      <section className="px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-rust-500">Wear your school colors</p>
            <h2 className="mt-1 text-3xl font-semibold text-bark-900 sm:text-4xl">Sweatshirts, Hoodies &amp; Hats</h2>
            <p className="mt-4 text-bark-700">
              Team crewnecks, hoodies, and caps embroidered with your school's mascot and colors.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {apparel.map((a) => (
              <button
                key={a.src}
                type="button"
                onClick={() => setActive(a)}
                aria-label={`Enlarge: ${a.alt}`}
                className="reveal group overflow-hidden rounded-2xl shadow-soft ring-1 ring-rust-100 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={a.src}
                  alt={a.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sock collection */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-rust-500">Game day, from the ground up</p>
            <h2 className="mt-1 text-3xl font-semibold text-bark-900 sm:text-4xl">The Sock Collection</h2>
            <p className="mt-4 text-bark-700">
              Soft ankle socks embroidered with your school's logo and colors. Here's the lineup we
              stitch most. Don't see your team? We'll add it.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {socks.map((s) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(s)}
                aria-label={`Enlarge: ${s.alt}`}
                className="reveal group rounded-2xl bg-gradient-to-b from-paper to-cream-deep/70 p-3 shadow-soft ring-1 ring-rust-100 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="overflow-hidden rounded-xl bg-white">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Order prompt */}
          <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 rounded-[1.6rem] border-2 border-dashed border-rust-300 bg-paper px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-bark-900">Ready to order for your school?</h3>
              <p className="mt-1 text-bark-700">
                Tell us your school, colors, and sizes. We'll take it from there.
              </p>
            </div>
            <a
              href={company.phoneHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-rust-500 px-6 py-3 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
            >
              <Phone className="h-5 w-5" /> Call to order
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bark-900/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-cream/15 p-2.5 text-cream transition hover:bg-cream/25"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[88vh] max-w-lg" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-lift"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/80">{active.alt}</figcaption>
          </figure>
        </div>
      )}

      <CtaBand heading="Let's outfit your team" />
    </>
  )
}
