"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const projectTypes = [
  "Hospital / Healthcare",
  "Restaurant / Hospitality",
  "Commercial Kitchen",
  "Office / Workspace",
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
      <div className="flex flex-col items-center justify-center text-center py-16 bg-secondary p-12">
        <div className="w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-serif font-medium text-foreground">
          Thank you for your inquiry
        </h3>
        <p className="mt-4 text-muted-foreground max-w-md">
          A member of our team will review your project details and reach out within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-serif font-medium text-foreground mb-8">
        Request a Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="john.doe@company.com"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="Acme Healthcare"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Project Type
          </label>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-foreground hover:border-primary/30"
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
            className="block text-sm font-medium text-foreground mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            placeholder="Tell us about your project, timeline, and any specific requirements..."
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Submit Inquiry
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to be contacted by our team regarding your project.
        </p>
      </form>
    </div>
  )
}
