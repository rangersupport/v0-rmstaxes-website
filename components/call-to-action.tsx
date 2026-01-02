import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="section-padding gradient-primary text-primary-foreground">
      <div className="container-custom text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Simplify Your Finances?</h2>
          <p className="text-lg text-primary-foreground/90">
            Schedule a consultation with our tax experts today and discover how we can help you achieve your financial
            goals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="#services" className="flex items-center gap-2">
              Schedule Now <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
