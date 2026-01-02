import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import CallToAction from "@/components/call-to-action"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  )
}
