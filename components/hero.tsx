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

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      /* Calendly Widget Theming - RMS Burgundy Brand */
      .calendly-inline-widget {
        --calendly-primary: #8b3a3a;
        --calendly-primary-hover: #6d2d2d;
        --calendly-text-primary: #1a1a1a;
        --calendly-text-secondary: #4a4a4a;
        --calendly-border: #e0e0e0;
      }

      /* Button styling - burgundy brand color */
      .calendly-inline-widget button {
        background-color: #8b3a3a !important;
        color: #ffffff !important;
        border-color: #8b3a3a !important;
        font-weight: 500;
      }

      .calendly-inline-widget button:hover {
        background-color: #6d2d2d !important;
        border-color: #6d2d2d !important;
      }

      /* Calendar selected date - burgundy highlight */
      .calendly-inline-widget [data-attribute="day"][data-selected="true"],
      .calendly-inline-widget .calendly-selected {
        background-color: #8b3a3a !important;
        color: #ffffff !important;
      }

      /* Calendar hover state */
      .calendly-inline-widget [data-attribute="day"]:hover {
        background-color: #f0f0f0 !important;
      }

      /* Text contrast - dark text on light backgrounds */
      .calendly-inline-widget {
        color: #1a1a1a !important;
      }

      .calendly-inline-widget h2,
      .calendly-inline-widget h3,
      .calendly-inline-widget label {
        color: #1a1a1a !important;
        font-weight: 600;
      }

      .calendly-inline-widget p,
      .calendly-inline-widget span {
        color: #4a4a4a !important;
      }

      /* Time slots styling */
      .calendly-inline-widget [data-test*="time"],
      .calendly-inline-widget [class*="time"] {
        color: #1a1a1a !important;
      }

      /* Links - burgundy color */
      .calendly-inline-widget a {
        color: #8b3a3a !important;
        text-decoration: none;
      }

      .calendly-inline-widget a:hover {
        color: #6d2d2d !important;
        text-decoration: underline;
      }

      /* Form inputs */
      .calendly-inline-widget input,
      .calendly-inline-widget textarea,
      .calendly-inline-widget select {
        background-color: #ffffff !important;
        color: #1a1a1a !important;
        border-color: #e0e0e0 !important;
      }

      .calendly-inline-widget input::placeholder,
      .calendly-inline-widget textarea::placeholder {
        color: #999999 !important;
      }

      /* Calendar grid/month header */
      .calendly-inline-widget [data-test="calendar-month-header"],
      .calendly-inline-widget [role="heading"] {
        color: #1a1a1a !important;
        font-weight: 600;
      }

      /* Day names */
      .calendly-inline-widget [data-test*="weekday"],
      .calendly-inline-widget [class*="weekday"] {
        color: #4a4a4a !important;
        font-weight: 500;
      }

      /* Disabled time slots */
      .calendly-inline-widget [data-test*="time"][disabled],
      .calendly-inline-widget [class*="disabled"] {
        color: #cccccc !important;
        opacity: 0.6;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
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
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
                  Master Your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md font-light">
                  Strategic tax planning, expert accounting, and comprehensive business consulting for discerning
                  clients who demand excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="#calendly-widgets" className="flex items-center gap-2">
                    Schedule Now <ArrowRight size={20} />
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
          </div>

          <div
            id="calendly-widgets"
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Consultation Widget */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-yellow-300/20 rounded-xl blur-2xl opacity-60 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30 h-full">
                  <h3 className="text-lg font-bold text-primary mb-2">Consultation</h3>
                  <p className="text-sm text-foreground/70 mb-4">30 min • One-on-One</p>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/rmstaxes?hide_gdpr_banner=1&background_color=f5f5f5"
                    style={{ minWidth: "100%", height: "300px" }}
                  ></div>
                </div>
              </div>

              {/* Taxes Widget */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-yellow-300/20 rounded-xl blur-2xl opacity-60 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30 h-full">
                  <h3 className="text-lg font-bold text-primary mb-2">Tax Planning</h3>
                  <p className="text-sm text-foreground/70 mb-4">30 min • One-on-One</p>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/rmstaxes/30min?hide_gdpr_banner=1&background_color=f5f5f5"
                    style={{ minWidth: "100%", height: "300px" }}
                  ></div>
                </div>
              </div>

              {/* Business Consultations Widget */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-yellow-300/20 rounded-xl blur-2xl opacity-60 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/30 h-full">
                  <h3 className="text-lg font-bold text-primary mb-2">Business Consulting</h3>
                  <p className="text-sm text-foreground/70 mb-4">1 hour • One-on-One</p>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/rmstaxes/60min?hide_gdpr_banner=1&background_color=f5f5f5"
                    style={{ minWidth: "100%", height: "300px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
