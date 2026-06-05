import { useEffect, useState } from 'react'
import { Link } from 'wouter'

const KEY = 'bgc-cookie-consent'

// Dismissible cookie/consent banner (brand standard). Stores a flag in
// localStorage so it only shows once. Renders nothing during SSR/first paint
// to avoid hydration mismatch, then appears if consent hasn't been recorded.
export default function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true)
    } catch {
      /* private mode — just don't show */
    }
  }, [])

  if (!show) return null

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-rust-100 bg-paper p-4 shadow-lift sm:bottom-4 sm:p-5 lg:inset-x-auto lg:right-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-bark-800">
          Grammy keeps a few cookies on this site. Sadly the digital kind, not the warm-from-the-oven
          kind. They just help things run smoothly. See our{' '}
          <Link href="/privacy" className="font-semibold text-rust-600 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-full bg-rust-500 px-5 py-2 text-sm font-bold text-cream transition hover:bg-rust-600"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
