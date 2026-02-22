import { useRef, useState } from 'react'
import { Section, CTAButton, PlayIcon, ScrollReveal } from '../ui'
import { VSL_VIDEO_SRC, VSL_VIDEO_POSTER } from '../../lib/videos'

export function VSLSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(VSL_VIDEO_SRC)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <Section spacing="tight" width="default">
      <ScrollReveal>
      <div>
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-primary" />

          <div className="relative aspect-video bg-gradient-to-br from-surface-alt to-background border border-primary/20 overflow-hidden">
            {hasVideo ? (
              <>
                <video
                  ref={videoRef}
                  src={VSL_VIDEO_SRC}
                  poster={VSL_VIDEO_POSTER || undefined}
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  onEnded={() => setPlaying(false)}
                  onClick={togglePlay}
                />
                {!playing && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/30 hover:bg-black/20 transition-colors"
                    aria-label="Reproducir video"
                  >
                    <div className="group/play relative w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
                      <div className="absolute inset-0 bg-primary rounded-full transition-transform group-hover/play:scale-110" />
                      <div className="absolute inset-2 bg-background rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayIcon size="lg" variant="primary" />
                      </div>
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl mb-1 sm:mb-2">Descubre el Sistema Strato</h3>
                    <p className="text-white/40 text-xs sm:text-sm">3 minutos que cambiarán tu estrategia de contenido</p>
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="group/play relative w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary rounded-full" />
                    <div className="absolute inset-2 bg-background rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayIcon size="lg" variant="primary" />
                    </div>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl mb-1 sm:mb-2">Descubre el Sistema Strato</h3>
                  <p className="text-white/40 text-xs sm:text-sm">3 minutos que cambiarán tu estrategia de contenido</p>
                </div>
              </>
            )}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-black/60 backdrop-blur-sm border border-primary/30">
              <span className="text-primary text-xs tracking-wider">3:24</span>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <CTAButton to="planes" variant="primary">
            Ver Planes Mensuales
          </CTAButton>
        </div>
      </div>
      </ScrollReveal>
    </Section>
  )
}
