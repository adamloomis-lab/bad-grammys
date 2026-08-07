import { Link } from 'wouter'
import { Phone, Facebook, Heart, Shirt, Scissors, Sparkles, ArrowRight } from 'lucide-react'
import { company, offerings, steps, promises } from '../data/site'
import { galleryItems } from '../data/gallery'
import { socks } from '../data/socks'
import CtaBand from '../components/CtaBand'

const peek = galleryItems.slice(0, 6)

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="linen relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-rust-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rust-600">
              <Scissors className="h-3.5 w-3.5" /> Handmade in {company.region}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-bark-900 sm:text-5xl lg:text-6xl">
              One-of-a-Kind Gifts
              <span className="mt-2 block font-script text-5xl text-rust-500 sm:text-6xl lg:text-7xl">
                Made with Love
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-bark-700">
              Custom embroidery &amp; personalized creations for every occasion. From memory
              keepsake bears to monogrammed stockings, every piece is stitched by hand, just for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
              >
                <Phone className="h-5 w-5" /> {company.phone}
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-rust-300 px-7 py-3.5 text-base font-bold text-rust-600 transition hover:bg-rust-50"
              >
                See the Gallery <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-bark-700/80">
              If you can picture it, we can create it.
            </p>
          </div>

          <div className="reveal-scale relative">
            <div className="stitch absolute -inset-3 -rotate-2 rounded-[2.2rem] bg-paper/40" aria-hidden />
            <img
              src={offerings[0].image}
              alt={offerings[0].alt}
              width={720}
              height={760}
              className="relative aspect-[4/4.2] w-full rotate-1 rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-lift sm:-left-6">
              <img src="/images/logo.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full ring-2 ring-rust-300/60" />
              <span className="pr-2 text-sm font-semibold leading-tight text-bark-800">
                Stitched with a<br />grandma's heart
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust strip ---------------- */}
      <section className="border-y border-rust-100 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { icon: Heart, title: 'Made to order', body: 'One person, one family, one story at a time.' },
            { icon: Scissors, title: 'Hand-stitched', body: 'Real embroidery, real care, never mass-produced.' },
            { icon: Shirt, title: 'Fully custom', body: 'Have an idea? We love bringing new ones to life.' },
          ].map((f) => (
            <div key={f.title} className="reveal flex items-start gap-3">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust-50 text-rust-600">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-bark-900">{f.title}</h3>
                <p className="text-sm text-bark-700">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Offerings ---------------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-rust-500">Personalized creations</p>
            <h2 className="mt-1 text-3xl font-semibold text-bark-900 sm:text-4xl">Just for you</h2>
            <p className="mt-4 text-bark-700">
              Thoughtful, personalized creations, made to order and made with care.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {offerings
              .filter((o) => !['baby-lovies', 'personalized-bags', 'kitchen-home'].includes(o.slug))
              .map((o) => (
              <article
                key={o.slug}
                className="reveal group w-full overflow-hidden rounded-2xl bg-paper shadow-soft transition hover:-translate-y-1 hover:shadow-lift md:w-[calc(33.333%-1rem)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.alt}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-bark-900">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark-700">{o.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <Link
              href="/what-we-offer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-rust-300 px-6 py-3 text-sm font-bold text-rust-600 transition hover:bg-rust-50"
            >
              See everything we offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Spirit Wear ---------------- */}
      <section className="bg-cream-deep/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-rust-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rust-600">
              <Sparkles className="h-3.5 w-3.5" /> New for the school year
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-bark-900 sm:text-4xl">Spirit Wear</h2>
            <p className="mt-4 text-bark-700">
              Custom socks, sweatshirts, and apparel for any school, in most colors and ready before
              the first bell. Add a name and class year on the sleeve.
            </p>
          </div>
        </div>

        {/* Auto-scrolling sock rotation */}
        <div className="reveal marquee-mask mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 pr-4 sm:gap-5 sm:pr-5">
            {[...socks, ...socks].map((s, i) => (
              <div
                key={i}
                className="w-36 shrink-0 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-rust-100 sm:w-44"
              >
                <img
                  src={s.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-xl object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 px-4 text-center">
          <Link
            href="/spirit-wear"
            className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
          >
            Explore Spirit Wear <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ---------------- Memory keepsake spotlight ---------------- */}
      <section className="bg-pine-700 px-4 py-16 text-cream sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal-scale order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img src="/images/gallery/creation-26.jpg" alt="Two memory keepsake bears sewn from plaid shirts" width={400} height={500} loading="lazy" className="mt-8 aspect-[4/5] w-full rounded-2xl object-cover shadow-lift" />
            <img src="/images/gallery/creation-03.jpg" alt="Memory keepsake bear sewn from a loved one's hunting shirt with an embroidered monogram" width={400} height={500} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lift" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rust-200">
              <Heart className="h-3.5 w-3.5" /> Our signature creation
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-cream sm:text-4xl">Memory Keepsake Bears</h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/85">
              When you've lost someone, their clothes still carry them. The flannel they always wore,
              a favorite jersey, a soft old shirt. Send them to us and we'll hand-sew them into a
              huggable keepsake bear or animal you can hold onto forever.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-cream/85">
              We can embroider a name, a date, or a few special words right onto the foot. It's one of
              the most meaningful gifts we make, and one of our most requested.
            </p>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rust-500 px-6 py-3 text-sm font-bold text-cream transition hover:bg-rust-600"
            >
              <Facebook className="h-4 w-4" /> Ask us about a keepsake
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal text-center">
            <h2 className="text-3xl font-semibold text-bark-900 sm:text-4xl">How it works</h2>
            <p className="mt-3 text-bark-700">No online cart, just a friendly conversation about your idea.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal relative rounded-2xl bg-paper p-6 shadow-soft">
                <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-rust-500 font-display text-lg font-bold text-cream shadow-soft">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-bark-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Gallery peek ---------------- */}
      <section className="bg-cream-deep/50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-script text-3xl text-rust-500">A peek at our work</p>
              <h2 className="mt-1 text-3xl font-semibold text-bark-900 sm:text-4xl">Recent creations</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-rust-600 hover:text-rust-700">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {peek.map((g) => (
              <Link key={g.src} href="/gallery" className="reveal group overflow-hidden rounded-xl shadow-soft">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Promises ---------------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((p) => (
              <div key={p.title} className="reveal rounded-2xl border border-rust-100 bg-paper p-6 shadow-soft">
                <h3 className="font-display text-xl font-bold text-rust-600">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark-700">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
