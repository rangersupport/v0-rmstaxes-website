"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener("loadedmetadata", () => setIsLoaded(true))

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", () => setIsLoaded(true))
      }
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 w-full h-full">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* HD resolution (1920x1080) - optimized for web */}
          <source src="https://via.placeholder.com/1920x1080?text=Your+Adobe+Stock+Video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30"></div>

        {/* Additional top fade for header visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Premium Typography */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="inline-block text-xs font-semibold text-white uppercase tracking-widest bg-primary/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                ✦ Professional Tax Solutions Since 1995
              </span>
            </div>

            {/* Main Headline */}
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

            {/* CTA Buttons */}
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

            {/* Trust Indicators with Premium Design */}
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

          {/* Right - Premium Calendly Integration Container */}
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div id="calendly" className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-yellow-300/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-75 transition duration-1000"></div>

              {/* Main container */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <PlayCircle size={24} className="text-primary" />
                    <h3 className="text-2xl font-bold text-primary">Schedule Your Free Consultation</h3>
                  </div>

                  <p className="text-foreground/70 mb-6">
                    Book a personalized consultation with our tax experts. We'll discuss your financial goals and create
                    a custom strategy.
                  </p>

                  {/* Calendly Embed Container */}
                  <div className="bg-gradient-to-br from-muted to-muted/50 rounded-xl p-6 min-h-96 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                        <PlayCircle size={24} className="text-primary animate-pulse" />
                      </div>
                      <p className="text-sm font-medium text-foreground/60">Calendly booking widget</p>
                      <p className="text-xs text-foreground/50 max-w-sm">
                        Replace this placeholder with your Calendly embed code
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-foreground/50 text-center pt-4">Typically responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
