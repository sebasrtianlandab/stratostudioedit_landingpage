import { useEffect } from 'react'
import {
  Navigation,
  Hero,
  VSLSection,
  Problem,
  FiveStages,
  Services,
  InterventionLevels,
  Differentiator,
  FinalCTA,
} from './components/sections'
import { scrollToPath } from './components/ui'

export default function App() {
  useEffect(() => {
    const pathname = window.location.pathname
    const id = requestAnimationFrame(() => {
      scrollToPath(pathname)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const onPopState = () => scrollToPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className="min-h-screen bg-background font-['Space_Grotesk',sans-serif]">
      <Navigation />
      <Hero />
      <VSLSection />
      <Problem />
      <FiveStages />
      <Services />
      <InterventionLevels />
      <Differentiator />
      <FinalCTA />
    </div>
  )
}
