import type { ReactNode } from 'react'

export default function LegalShell({
  title,
  updated,
  children,
}: {
  readonly title: string
  readonly updated: string
  readonly children: ReactNode
}) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold text-bark-900">{title}</h1>
        <p className="mt-2 text-sm text-bark-700/80">Last updated: {updated}</p>
        <div className="legal mt-8 space-y-6 text-bark-800">{children}</div>
      </div>
    </section>
  )
}
