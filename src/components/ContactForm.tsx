import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { offerings } from '../data/site'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

// Netlify Forms: the form markup below is baked into the prerendered HTML at
// build time, so Netlify detects it. On submit we POST url-encoded data back to
// the page (the standard SPA pattern) and show an inline thank-you.
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { 'form-name': 'contact' }
    data.forEach((v, k) => {
      payload[k] = typeof v === 'string' ? v : ''
    })
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-[1.6rem] border border-pine-500/30 bg-paper p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-12 w-12 text-pine-600" />
        <h3 className="mt-4 text-2xl font-semibold text-bark-900">Message sent!</h3>
        <p className="mt-2 text-bark-700">
          Thank you. Bad Grammy's will get back to you soon. For anything urgent, give us a call.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-[1.6rem] border border-rust-100 bg-paper p-6 shadow-soft sm:p-8"
    >
      {/* Netlify needs these for detection + spam filtering */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-bark-800">Your name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-rust-200 bg-cream/50 px-4 py-3 text-bark-900 outline-none transition focus:border-rust-400 focus:bg-paper focus:ring-2 focus:ring-rust-300"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-bark-800">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-rust-200 bg-cream/50 px-4 py-3 text-bark-900 outline-none transition focus:border-rust-400 focus:bg-paper focus:ring-2 focus:ring-rust-300"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-bark-800">
            Phone <span className="font-normal text-bark-700">(optional)</span>
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-rust-200 bg-cream/50 px-4 py-3 text-bark-900 outline-none transition focus:border-rust-400 focus:bg-paper focus:ring-2 focus:ring-rust-300"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-bark-800">What can we make you?</span>
          <select
            name="interest"
            defaultValue=""
            className="mt-1.5 w-full rounded-xl border border-rust-200 bg-cream/50 px-4 py-3 text-bark-900 outline-none transition focus:border-rust-400 focus:bg-paper focus:ring-2 focus:ring-rust-300"
          >
            <option value="" disabled>
              Choose one...
            </option>
            {offerings.map((o) => (
              <option key={o.slug} value={o.title}>
                {o.title}
              </option>
            ))}
            <option value="Something else">Something else / not sure yet</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-bark-800">Tell us about your idea</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Names or dates to embroider, the occasion, colors, or a piece of clothing with a story..."
          className="mt-1.5 w-full resize-y rounded-xl border border-rust-200 bg-cream/50 px-4 py-3 text-bark-900 outline-none transition placeholder:text-bark-700/50 focus:border-rust-400 focus:bg-paper focus:ring-2 focus:ring-rust-300"
        />
      </label>

      {status === 'error' && (
        <p className="mt-4 rounded-xl bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-500">
          Oops, something went wrong sending that. Please try again, or just give us a call.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust-500 px-7 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600 disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        {status === 'submitting' ? 'Sending...' : 'Send my idea'}
      </button>
    </form>
  )
}
