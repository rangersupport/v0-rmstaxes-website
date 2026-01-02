"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border border-border/50">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Address</h3>
                  <p className="text-sm text-foreground/70">
                    88 Elmora Ave
                    <br />
                    Elizabeth, NJ 07202
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a href="tel:+19083516969" className="text-sm text-primary hover:underline">
                    (908) 351-6969
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@rmstaxes.com" className="text-sm text-primary hover:underline">
                    info@rmstaxes.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Hours</h3>
                  <p className="text-sm text-foreground/70">
                    Mon - Fri: 9am - 6pm
                    <br />
                    Sat: By appointment
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(908) 123-4567"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select a service</option>
                      <option value="tax">Tax Planning & Preparation</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="business">Business Consulting</option>
                      <option value="estate">Estate Planning</option>
                      <option value="compliance">Compliance & Audit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      rows={4}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
