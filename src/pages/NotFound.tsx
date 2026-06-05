import { Link } from 'wouter'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="linen flex min-h-[60vh] items-center px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-lg text-center">
        <img src="/images/logo.png" alt="" width={88} height={88} className="mx-auto h-22 w-22 rounded-full ring-2 ring-rust-300/60" />
        <p className="mt-6 font-script text-5xl text-rust-500">Oops!</p>
        <h1 className="mt-2 text-3xl font-semibold text-bark-900">We couldn't find that page</h1>
        <p className="mt-3 text-bark-700">
          The page you're looking for may have moved, but our creations haven't gone anywhere.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-6 py-3 text-sm font-bold text-cream shadow-soft transition hover:bg-rust-600"
          >
            <Home className="h-4 w-4" /> Back home
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-rust-300 px-6 py-3 text-sm font-bold text-rust-600 transition hover:bg-rust-50"
          >
            See the gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
