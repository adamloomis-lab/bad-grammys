import { useEffect, useRef, useState } from 'react'

// Sticky-bar "duck on scroll": the bar hides while the visitor is actively
// scrolling and glides back `settleMs` after scrolling stops. It only appears
// once the visitor is past `revealAfter` (so it stays out of the hero).
//
// Reduced-motion visitors get a STATIC bar: no ducking at all. It simply
// appears once they are past the threshold and never hides on scroll.
export function useDuckOnScroll({ revealAfter = 560, settleMs = 550 } = {}): boolean {
  const [visible, setVisible] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const past = () => window.scrollY > revealAfter
    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    // Reduced motion: static bar, revealed past the threshold, no duck.
    if (reduce) {
      const onScroll = () => setVisible(past())
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    const onScroll = () => {
      setVisible(false) // duck while scrolling
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setVisible(past()), settleMs) // glide back once idle
    }

    setVisible(past()) // initial (e.g. reload mid-page)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer.current)
    }
  }, [revealAfter, settleMs])

  return visible
}
