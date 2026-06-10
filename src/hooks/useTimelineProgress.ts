import { useEffect, useRef, useState } from 'react'

export function useTimelineProgress() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateProgress = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const start = windowHeight * 0.85
      const end = windowHeight * 0.15
      const total = rect.height + start - end
      const scrolled = start - rect.top
      const value = Math.min(Math.max(scrolled / total, 0), 1)
      setProgress(value)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return { containerRef, progress }
}
