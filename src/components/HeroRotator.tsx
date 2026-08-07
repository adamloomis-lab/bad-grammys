import { useEffect, useState } from 'react'

export type RotatorImage = { src: string; alt: string }

// Auto-rotating crossfade for the hero. Renders every image stacked and
// absolutely positioned; the active one fades in. SSR shows the first image
// (baked into the prerendered HTML), and hydration starts the rotation. Honors
// prefers-reduced-motion by holding on the first frame.
export default function HeroRotator({
  images,
  interval = 3200,
  className = '',
}: {
  readonly images: RotatorImage[]
  readonly interval?: number
  readonly className?: string
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((p) => (p + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden bg-cream-deep/40 ${className}`}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={i === 0 ? img.alt : ''}
          aria-hidden={i === 0 ? undefined : true}
          width={720}
          height={760}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
