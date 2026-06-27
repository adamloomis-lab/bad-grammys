import { useState } from 'react'
import {
  Send,
  Loader2,
  ArrowRight,
  Phone,
  Heart,
  Scissors,
  Gift,
  ShoppingBag,
  BedDouble,
  Shirt,
  Rabbit,
  Home,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { offerings, company } from '../data/site'
import { FloatField, SuccessCheck } from './FluidField'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

// Icon-card selector for "What we can make you". The submitted `value` stays
// identical to the old <select> options (offering titles + "Something else"),
// so Netlify receives the exact same `interest` data.
const ICONS: Record<string, LucideIcon> = {
  heart: Heart,
  needle: Scissors,
  gift: Gift,
  bag: ShoppingBag,
  pillow: BedDouble,
  shirt: Shirt,
  rabbit: Rabbit,
  home: Home,
}

const INTEREST_OPTIONS: { value: string; label: string; icon: LucideIcon }[] = [
  ...offerings.map((o) => ({ value: o.title, label: o.title, icon: ICONS[o.icon] ?? Sparkles })),
  { value: 'Something else', label: 'Something else / not sure yet', icon: Sparkles },
]

// Netlify Forms: the form markup below is baked into the prerendered HTML at
// build time, so Netlify detects it. On submit we POST url-encoded data back to
// the page (the standard SPA pattern) and show a personalized inline thank-you.
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [thankedName, setThankedName] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Capture the first name BEFORE any reset, for the personalized thank-you.
    const firstName = form.name.trim().split(/\s+/)[0] ?? ''
    const payload: Record<string, string> = { 'form-name': 'contact', ...form }
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (res.ok) {
        setThankedName(firstName)
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div
        className="rounded-[1.6rem] border border-rust-100 bg-paper p-8 text-center shadow-soft sm:p-10"
        style={{ animation: 'rise 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <span
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center"
          style={{ animation: 'pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}
        >
          <SuccessCheck />
        </span>
        <h3 className="font-display text-3xl font-semibold text-bark-900 sm:text-4xl">
          {thankedName ? `Thank You, ${thankedName}!` : 'Thank You!'}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-bark-700">
          Your idea is on its way to Bad Grammy's. We'll get back to you soon. Want to
          chat about it sooner? Give us a call and we'll help you today.
        </p>
        <a
          href={company.phoneHref}
          className="group relative mt-7 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-rust-500 px-8 py-3.5 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md group-hover:[animation:sheen_0.9s_ease]"
          />
          <Phone className="h-5 w-5" /> {company.phone}
        </a>
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
        <FloatField
          name="name"
          label="Your name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
        <FloatField
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <div className="sm:col-span-2">
          <FloatField
            name="phone"
            label="Phone (optional)"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      {/* "What can we make you?" as single-select icon cards. The chosen value
          submits via the hidden `interest` input below, matching the old data. */}
      <input type="hidden" name="interest" value={form.interest} />
      <fieldset className="mt-6">
        <legend className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.12em] text-bark-700">
          What can we make you?
        </legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {INTEREST_OPTIONS.map((o) => {
            const active = form.interest === o.value
            const Icon = o.icon
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  setForm((prev) => ({ ...prev, interest: active ? '' : o.value }))
                }
                className={`flex flex-col items-start gap-2 rounded-xl border px-3.5 py-3.5 text-left font-body text-sm transition-all duration-200 active:scale-[0.98] ${
                  active
                    ? 'border-rust-500 bg-rust-500 text-cream shadow-[0_10px_24px_-12px_rgba(194,105,62,0.7)]'
                    : 'border-rust-200 bg-cream/50 text-bark-900 hover:border-rust-400 hover:bg-paper'
                }`}
              >
                <Icon size={22} className={active ? 'text-cream' : 'text-rust-500'} strokeWidth={1.75} />
                <span className="font-semibold leading-tight">{o.label}</span>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <FloatField
          name="message"
          label="Tell us about your idea"
          value={form.message}
          onChange={handleChange}
          textarea
          rows={5}
          required
        />
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-xl bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-500">
          Oops, something went wrong sending that. Please try again, or just give us a call.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-rust-500 px-7 py-4 text-base font-bold text-cream shadow-soft transition hover:bg-rust-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25 blur-md group-hover:[animation:sheen_0.9s_ease]"
        />
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Send my idea
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}
