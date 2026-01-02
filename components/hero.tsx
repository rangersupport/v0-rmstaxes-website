"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

declare global {
  interface Window {
    Calendly: any
  }
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch((error) => {
        document.body.addEventListener(
          "click",
          () => {
            video.play().catch(() => console.log("[v0] Play failed"))
          },
          { once: true },
        )
      })
    }

    const handleError = (e: Event) => {
      console.error("[v0] Video error:", video.error)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const handleScheduleConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/rmstaxes/15?hide_gdpr_banner=1&primary_color=8b3a3a",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-fallback.jpg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dimddff3a/video/upload/v1767376457/hero-video-compressed_pyx8a1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-primary/35 to-primary/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 to-transparent pointer-events-none"></div>
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        <div className="space-y-12 pt-20">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="max-w-3xl">
              <div>
                <span className="inline-block text-xs font-semibold text-white uppercase tracking-widest bg-primary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  ✦ Professional Tax Solutions Since 1995
                </span>
              </div>

              <div className="space-y-6 mt-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
                  Master Your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md font-light">
                  Strategic tax planning, expert accounting, and comprehensive business consulting for discerning
                  clients who demand excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                <Button
                  onClick={handleScheduleConsultation}
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Schedule Consultation <ArrowRight size={20} />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm font-semibold w-full sm:w-auto"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">30+</p>
                  <p className="text-xs md:text-sm text-white/80">Years of Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">1000+</p>
                  <p className="text-xs md:text-sm text-white/80">Satisfied Clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">99%</p>
                  <p className="text-xs md:text-sm text-white/80">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
