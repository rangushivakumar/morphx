"use client"

import { motion } from "framer-motion"
import { 
  Droplets, 
  Settings, 
  SlidersHorizontal, 
  Shield, 
  Archive, 
  Layers, 
  Square, 
  PanelLeft, 
  Volume2 
} from "lucide-react"

const features = [
  {
    title: "Moisture Resistant",
    description: "Built with materials and finishes designed to withstand moisture and maintain long-term durability.",
    icon: Droplets,
  },
  {
    title: "Soft Close Hardware",
    description: "Premium hardware systems that provide smooth and quiet operation.",
    icon: Settings,
  },
  {
    title: "Adjustable Shelves",
    description: "Flexible storage solutions that adapt to changing requirements.",
    icon: SlidersHorizontal,
  },
  {
    title: "Secure Structure",
    description: "Engineered construction methods that ensure strength, stability, and reliability.",
    icon: Shield,
  },
  {
    title: "Dependable Storage",
    description: "Practical designs focused on maximizing storage efficiency and accessibility.",
    icon: Archive,
  },
  {
    title: "Top-Down Construction",
    description: "Manufactured using proven construction techniques for improved durability and performance.",
    icon: Layers,
  },
  {
    title: "Sturdy 3/4\" Shelves",
    description: "Robust shelving designed to support daily commercial and residential use.",
    icon: Square,
  },
  {
    title: "Durable End Panels",
    description: "Strong panel construction that enhances product lifespan and structural integrity.",
    icon: PanelLeft,
  },
  {
    title: "Whisper Quiet Close",
    description: "Advanced closing mechanisms that reduce noise and improve user experience.",
    icon: Volume2,
  },
]

export function CraftsmanshipSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Quality Standards
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Excellence in Craftsmanship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 border border-border hover:border-primary/30 hover:bg-secondary/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
