import { useEffect, useState } from 'react'
import { Link } from 'wouter'

const KEY = 'cookie-consent'

// Dismissible cookie/consent banner (brand standard). Stores a flag in
// localStorage so it only shows once. Renders nothing during SSR/first paint
// to avoid hydration mismatch, then appears after a short delay if consent
// hasn't been recorded yet.
export default function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 700)
        return () => clearTimeout(t)
      }
    } catch {
      /* private mode — just don't show */
    }
  }, [])

  if (!show) return null

  const respond = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-rust-100 bg-paper p-4 shadow-lift sm:bottom-4 sm:p-5 lg:inset-x-auto lg:right-4"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-bark-800">
          Grammy keeps a few cookies on this site — the digital kind, not the warm-from-the-oven
          kind. They keep things running smoothly. We never sell your data. See our{' '}
          <Link href="/privacy" className="font-semibold text-rust-600 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => respond('declined')}
            className="rounded-full border border-rust-300 px-4 py-2 text-sm font-semibold text-rust-600 transition hover:bg-rust-50"
          >
            No Thanks
          </button>
          <button
            type="button"
            onClick={() => respond('accepted')}
            className="rounded-full bg-rust-500 px-5 py-2 text-sm font-bold text-cream transition hover:bg-rust-600"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  )
}
