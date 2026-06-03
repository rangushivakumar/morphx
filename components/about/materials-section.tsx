"use client"

import { motion } from "framer-motion"

const woodTypes = [
  "Walnut",
  "Beech",
  "Birch",
  "Pine",
  "Ash",
  "Oak",
  "Teak",
  "Rubber",
  "Ebony",
  "Rosewood",
]

const surfaceFinishes = [
  "Wood Veneer",
  "HPL Laminate",
  "Melamine",
  "SW Paint Lacquer",
  "PET Finish",
  "Thermofoil Finish",
  "Paint Finish",
]

export function MaterialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Our Materials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Premium Material Selection
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Wood Types */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-medium text-foreground mb-8 pb-4 border-b border-border">
              Wood Types
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {woodTypes.map((wood, index) => (
                <motion.div
                  key={wood}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{wood}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Surface Finishes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-medium text-foreground mb-8 pb-4 border-b border-border">
              Surface Finishes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {surfaceFinishes.map((finish, index) => (
                <motion.div
                  key={finish}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{finish}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
