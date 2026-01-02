import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Briefcase, FileText, Shield, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Preparation",
    description:
      "Minimize your tax burden with strategic planning and expert preparation for individual and business returns.",
    features: ["Individual Returns", "Business Tax", "Quarterly Estimates", "Tax Optimization"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Accounting Services",
    description: "Complete bookkeeping, financial reporting, and accounting solutions to keep your finances organized.",
    features: ["Bookkeeping", "Financial Statements", "Payroll Processing", "Reconciliation"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic business solutions to help your company grow, optimize operations, and maximize profitability.",
    features: ["Business Strategy", "Financial Analysis", "Growth Planning", "Risk Management"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Protect your legacy with comprehensive estate planning and wealth transfer strategies for your family.",
    features: ["Estate Strategies", "Succession Planning", "Trust Planning", "Asset Protection"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Compliance & Audit",
    description: "Stay compliant with all regulations. Comprehensive audit and review services for peace of mind.",
    features: ["Audit Services", "Review Services", "IRS Representation", "Compliance"],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Users,
    title: "Virtual Meetings",
    description: "Convenient consultations from anywhere. Book your virtual meeting with our tax professionals.",
    features: ["Video Consultations", "Flexible Scheduling", "Remote Support", "Digital Documents"],
    color: "from-indigo-500 to-indigo-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Comprehensive Financial Solutions</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From tax preparation to business consulting, we provide expert financial services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const calendlyLinks: { [key: number]: string } = {
              0: "https://calendly.com/rmstaxes/30min?hide_gdpr_banner=1&background_color=8B3A3A", // Tax Planning
              2: "https://calendly.com/rmstaxes/60min?hide_gdpr_banner=1&background_color=8B3A3A", // Business Consulting
            }
            const hasCalendly = calendlyLinks[index]

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-border/50">
                <CardHeader>
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white w-fit mb-4`}
                  >
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {hasCalendly ? (
                    <Button asChild className="w-full bg-primary hover:bg-accent text-white font-semibold">
                      <a href={hasCalendly} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="#contact">Learn More</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
