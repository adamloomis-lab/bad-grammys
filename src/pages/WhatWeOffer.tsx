import { Phone, Shirt, Facebook } from 'lucide-react'
import { company, offerings, faqs, spiritWear } from '../data/site'
import CtaBand from '../components/CtaBand'

export default function WhatWeOffer() {
  return (
    <>
      {/* Header */}
      <section className="linen px-4 py-14 sm:px-6 sm:py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rust-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rust-600">
            <Shirt className="h-3.5 w-3.5" /> What we offer
          </span>
          <h1 className="mt-5 text-4xl font-semibold text-bark-900 sm:text-5xl">
            Thoughtful, personalized creations
          </h1>
          <p className="mt-4 text-lg text-bark-700">
            Made to order, made with care. Here's a little of what we make, but if you can picture
            it, we can almost always create it.
          </p>
        </div>
      </section>

      {/* Spirit Wear spotlight — timely school-season push */}
      <section className="px-4 pb-12 sm:px-6">
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
              <h2 className="text-3xl font-semibold text-cream sm:text-4xl">{spiritWear.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-cream/90">{spiritWear.lead}</p>
              <p className="mt-3 leading-relaxed text-cream/80">{spiritWear.detail}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="border-l-4 border-cream/70 bg-cream/10 px-4 py-2.5">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-widest text-cream/70">
                    Base price
                  </div>
                  <div className="text-xl font-bold text-cream">From ${spiritWear.basePrice}</div>
                </div>
                <div className="border-l-4 border-cream/70 bg-cream/10 px-4 py-2.5">
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

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-base font-bold text-rust-700 shadow-soft transition hover:bg-paper"
                >
                  <Phone className="h-5 w-5" /> Call to order
                </a>
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/50 px-6 py-3 text-base font-bold text-cream transition hover:bg-cream/10"
                >
                  <Facebook className="h-5 w-5" /> Message on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {offerings.map((o, i) => (
            <article
              key={o.slug}
              className="reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="stitch absolute -inset-3 -rotate-1 rounded-[2rem]" aria-hidden />
                <img
                  src={o.image}
                  alt={o.alt}
                  width={680}
                  height={520}
                  loading="lazy"
                  className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-lift"
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl font-semibold text-bark-900">{o.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-bark-700">{o.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Custom callout */}
      <section className="px-4 py-16 sm:px-6">
        <div className="reveal mx-auto max-w-4xl rounded-[2rem] border-2 border-dashed border-rust-300 bg-paper px-6 py-12 text-center sm:px-12">
          <p className="font-script text-4xl text-rust-500">Don't see it here?</p>
          <h2 className="mt-2 text-3xl font-semibold text-bark-900">Custom means your vision</h2>
          <p className="mx-auto mt-4 max-w-xl text-bark-700">
            Some of our favorite projects started as a customer's "could you maybe make…?" If you have
            an idea, a special occasion, or a piece of clothing with a story, let's talk it through.
          </p>
          <a
            href={company.phoneHref}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
          >
            <Phone className="h-5 w-5" /> Call {company.phone}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-center text-3xl font-semibold text-bark-900 sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="reveal group rounded-2xl border border-rust-100 bg-paper p-5 shadow-soft [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold text-bark-900">
                  {f.q}
                  <span className="text-rust-500 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-bark-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
