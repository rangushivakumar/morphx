"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const projectTypes = [
  "Hospitality Furniture",
  "Restaurant Furniture",
  "Cabinets & Countertops",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedType, setSelectedType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-card/65 backdrop-blur-md border border-border/80 shadow-xl rounded-2xl transition-all duration-500">
        <div className="w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 mb-6 animate-fade-in">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-foreground">
          Inquiry Submitted
        </h3>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
          Thank you for reaching out. An expert from our commercial design team will contact you within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card/65 backdrop-blur-md border border-border/80 shadow-xl rounded-2xl p-8 lg:p-12 hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
        Request a Quote
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Tell us about your project requirements and receive custom catalog details and wholesale pricing estimates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm"
            placeholder="john.doe@company.com"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm"
            placeholder="Acme Design Co."
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Project Type
          </label>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-xs font-medium border rounded-full transition-all duration-300 cursor-pointer shadow-sm ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.03]"
                    : "bg-background/50 border-border/80 text-foreground hover:border-primary/45 hover:bg-background/80"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 bg-background/50 border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 rounded-lg text-sm resize-none"
            placeholder="Tell us about your project, quantity needs, timelines..."
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 rounded-lg font-medium cursor-pointer"
        >
          Submit Inquiry
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-center text-[10px] text-muted-foreground leading-relaxed mt-2">
          By submitting, you agree to be contacted by our sales & engineering team.
        </p>
      </form>
    </div>
  )
}
