"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch((error) => {
        console.log("[v0] Autoplay prevented, adding click listener")
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
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-primary/35 to-primary/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 to-transparent pointer-events-none"></div>
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <div
            className={`space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="inline-block text-xs font-semibold text-white uppercase tracking-widest bg-primary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                ✦ Professional Tax Solutions Since 1995
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
                Master Your{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md font-light">
                Strategic tax planning, expert accounting, and comprehensive business consulting for discerning clients
                who demand excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#calendly" className="flex items-center gap-2">
                  Schedule Consultation <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm font-semibold"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-4xl font-bold text-yellow-300 mb-1">30+</p>
                <p className="text-sm text-white/80">Years of Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-4xl font-bold text-yellow-300 mb-1">1000+</p>
                <p className="text-sm text-white/80">Satisfied Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-4xl font-bold text-yellow-300 mb-1">99%</p>
                <p className="text-sm text-white/80">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div id="calendly" className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-yellow-300/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-75 transition duration-1000"></div>

              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-primary">Schedule Consultation</h3>
                  </div>

                  <p className="text-foreground/70 mb-6">
                    Book a personalized consultation with our tax experts. We'll discuss your financial goals and create
                    a custom strategy.
                  </p>

                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/rmstaxes?hide_gdpr_banner=1&background_color=8B3A3A"
                    style={{ minWidth: "320px", height: "700px" }}
                  ></div>

                  <p className="text-xs text-foreground/50 text-center pt-4">Typically responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
