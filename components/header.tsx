"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-4 md:px-6">
        {/* Logo - Left positioned */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition" title="RMS Tax Services">
          <Image
            src="/images/logo.png"
            alt="RMS Tax Services Logo"
            width={50}
            height={50}
            className="h-auto w-auto max-w-[50px]"
            priority
          />
          <span className="hidden sm:inline font-bold text-lg text-primary md:text-foreground">RMS Tax Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-foreground/70 hover:text-primary transition">
            Services
          </Link>
          <Link href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition">
            Why Us
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex gap-2">
          <Button
            asChild
            variant="outline"
            className="border-primary/20 text-foreground hover:bg-primary/5 bg-transparent"
          >
            <Link href="#contact">Sign In</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="#calendly">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition">
              Services
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition">
              Why Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition">
              Contact
            </Link>
            <div className="flex gap-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="#contact">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="#calendly">Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
