"use client"

import { motion } from "framer-motion"
import { Layers, Palette, Handshake, Settings, DollarSign } from "lucide-react"

const reasons = [
  {
    number: "01",
    title: "Comprehensive Material Solutions",
    description: "A complete sourcing solution covering furniture, cabinetry, countertops, flooring, lighting, and interior materials for commercial projects.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Tailored to Your Vision",
    description: "Every project is customized to meet your specific design, material, and functional requirements.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Direct Manufacturer Partnerships",
    description: "We work directly with trusted manufacturers to ensure quality, consistency, and competitive pricing.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Flexible Quality & Specification Options",
    description: "Choose from a wide range of materials, finishes, and specifications to suit your project's budget and vision.",
    icon: Settings,
  },
  {
    number: "05",
    title: "Unmatched Pricing Advantage",
    description: "Our direct sourcing model allows clients to access premium products at significantly lower costs compared to traditional markets.",
    icon: DollarSign,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Our Advantages
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Why Clients Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-serif text-primary/20">{reason.number}</span>
                <reason.icon className="w-6 h-6 text-primary mt-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
