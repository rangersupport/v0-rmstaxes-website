import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Users, Zap } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Expert Professionals",
    description: "Certified accountants and tax specialists with years of industry experience.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient processes ensure your returns are prepared and filed promptly.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "We tailor solutions to your specific financial situation and goals.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Secure, modern tools to protect your data and streamline communication.",
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Why Partner With RMS Tax Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border border-border/50 hover:border-secondary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-secondary/20 text-secondary">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 mt-2">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
