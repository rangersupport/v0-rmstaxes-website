"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const handleScheduleConsultation = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/rmstaxes/15?hide_gdpr_banner=1&primary_color=8b3a3a",
      })
    }
  }

  return (
    <section className="section-padding gradient-primary text-primary-foreground">
      <div className="container-custom text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Simplify Your Finances?</h2>
          <p className="text-base sm:text-lg text-primary-foreground/90">
            Schedule a consultation with our tax experts today and discover how we can help you achieve your financial
            goals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
          <Button
            onClick={handleScheduleConsultation}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Schedule Now <ArrowRight size={18} />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-semibold w-full sm:w-auto"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
