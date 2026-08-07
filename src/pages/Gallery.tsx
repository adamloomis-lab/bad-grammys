import { useState } from 'react'
import { X, Play } from 'lucide-react'
import { galleryItems, galleryCategories, type GalleryCategory } from '../data/gallery'
import CtaBand from '../components/CtaBand'

type Filter = 'All' | GalleryCategory

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [active, setActive] = useState<number | null>(null)

  const items =
    filter === 'All'
      ? galleryItems
      : filter === 'Spirit Wear'
        ? galleryItems.filter((g) => g.category === 'Spirit Wear' || g.spiritWear)
        : galleryItems.filter((g) => g.category === filter)
  const filters: Filter[] = ['All', ...galleryCategories]

  return (
    <>
      <section className="linen px-4 py-14 sm:px-6 sm:py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-bark-900 sm:text-5xl">Handmade, one at a time</h1>
          <p className="mt-4 text-lg text-bark-700">
            Real creations made for real customers. Every piece is unique, and yours would be too.
          </p>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === f
                    ? 'bg-rust-500 text-cream shadow-soft'
                    : 'border border-rust-200 bg-paper text-bark-700 hover:border-rust-400 hover:text-rust-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {items.map((g) => {
              const realIndex = galleryItems.indexOf(g)
              return (
                <button
                  key={g.src}
                  type="button"
                  onClick={() => setActive(realIndex)}
                  className="group relative mb-3 block w-full overflow-hidden rounded-xl shadow-soft sm:mb-4"
                  aria-label={g.video ? `Play video: ${g.alt}` : g.alt}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  {g.video && (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bark-900/15 transition group-hover:bg-bark-900/25">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-rust-600 shadow-lift transition group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 fill-rust-600" />
                      </span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bark-900/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[active].alt}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-cream/15 p-2.5 text-cream transition hover:bg-cream/25"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[88vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {galleryItems[active].video ? (
              <video
                src={galleryItems[active].video}
                poster={galleryItems[active].src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lift"
              />
            ) : (
              <img
                src={galleryItems[active].src}
                alt={galleryItems[active].alt}
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lift"
              />
            )}
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {galleryItems[active].alt}
            </figcaption>
          </figure>
        </div>
      )}

      <CtaBand heading="Want one made just for you?" />
    </>
  )
}
