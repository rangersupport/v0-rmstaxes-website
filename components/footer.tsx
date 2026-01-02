import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs font-bold">
                RMS
              </div>
              <span>RMS Tax Services</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional tax, accounting, and business consulting services for individuals and companies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-white transition">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-white transition">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-white transition">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-white transition">
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+19083516969" className="text-primary-foreground/80 hover:text-white transition">
                  (908) 351-6969
                </a>
              </li>
              <li>
                <a href="mailto:info@rmstaxes.com" className="text-primary-foreground/80 hover:text-white transition">
                  info@rmstaxes.com
                </a>
              </li>
              <li className="text-primary-foreground/80">
                88 Elmora Ave
                <br />
                Elizabeth, NJ 07202
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/80">
              &copy; {currentYear} RMS Tax Services & Accountants. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                Privacy
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                Terms
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
