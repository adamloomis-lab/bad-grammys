import { Phone, Facebook, MapPin, Clock, MessageCircle } from 'lucide-react'
import { company, faqs } from '../data/site'

export default function Contact() {
  return (
    <>
      <section className="linen px-4 py-14 sm:px-6 sm:py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-rust-500">Let's chat</p>
          <h1 className="mt-2 text-4xl font-semibold text-bark-900 sm:text-5xl">
            Bad Grammy's got you
          </h1>
          <p className="mt-4 text-lg text-bark-700">
            Have a question, a custom idea, or want help picking the perfect gift? Give us a call or
            send a message on Facebook. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {/* Call */}
          <a
            href={company.phoneHref}
            className="reveal group flex flex-col items-center rounded-[1.6rem] border border-rust-100 bg-paper p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rust-50 text-rust-600 transition group-hover:bg-rust-500 group-hover:text-cream">
              <Phone className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-bark-900">Call or text</h2>
            <p className="mt-2 text-sm text-bark-700">The fastest way to start a custom order.</p>
            <span className="mt-4 text-lg font-bold text-rust-600">{company.phone}</span>
          </a>

          {/* Facebook */}
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex flex-col items-center rounded-[1.6rem] border border-pine-500/30 bg-paper p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pine-500/10 text-pine-600 transition group-hover:bg-pine-600 group-hover:text-cream">
              <Facebook className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-bark-900">Message us</h2>
            <p className="mt-2 text-sm text-bark-700">
              See new creations and behind-the-scenes peeks, and send us a note.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-lg font-bold text-pine-600">
              <MessageCircle className="h-5 w-5" /> on Facebook
            </span>
          </a>
        </div>

        {/* Details strip */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-6 rounded-[1.6rem] bg-cream-deep/50 p-7 sm:grid-cols-2">
          <div className="reveal flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
            <div>
              <h3 className="font-bold text-bark-900">Where we are</h3>
              <p className="text-sm text-bark-700">
                A home-based maker in {company.region}, and a regular at local craft fairs.
              </p>
            </div>
          </div>
          <div className="reveal flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
            <div>
              <h3 className="font-bold text-bark-900">Ordering &amp; timing</h3>
              <p className="text-sm text-bark-700">
                Orders are taken by phone or message. Reach out early for holidays and big occasions,
                since handmade takes a little time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-center text-3xl font-semibold text-bark-900">Before you reach out</h2>
          <div className="mt-8 space-y-4">
            {faqs.slice(0, 3).map((f) => (
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
    </>
  )
}
