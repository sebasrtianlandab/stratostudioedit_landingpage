import { useEffect, useRef, useState } from 'react'

const DEFAULT_THRESHOLD = 0.08

export function useScrollReveal(threshold = DEFAULT_THRESHOLD) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasRevealed, setHasRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true)
          el.classList.add('reveal-in')
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, hasRevealed])

  return ref
}
