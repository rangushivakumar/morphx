"use client"

import { motion } from "framer-motion"

const pricingData = [
  { wood: "Rubberwood", morphx: "$5,880–$6,360", usa: "$8,000–$9,000", savings: "30–50% less" },
  { wood: "Acacia", morphx: "$6,120–$6,600", usa: "$8,500–$9,500", savings: "30–40% less" },
  { wood: "Birch", morphx: "$6,360–$6,840", usa: "$9,000–$10,000", savings: "35–45% less" },
  { wood: "Oak", morphx: "$6,960–$7,920", usa: "$10,500–$12,500", savings: "40–55% less" },
  { wood: "Teak", morphx: "$7,200–$8,160", usa: "$12,000–$14,000", savings: "55–70% less" },
  { wood: "Walnut", morphx: "$7,440–$8,400", usa: "$13,000–$15,000", savings: "60–80% less" },
]

export function CostComparison() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70 mb-4">
            Cost Comparison
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary-foreground text-balance">
            Why Import Through MorphX?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Per room set pricing comparison vs USA market.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/20">
                <th className="text-left py-4 px-4 font-medium text-primary-foreground/70">Wood Type</th>
                <th className="text-left py-4 px-4 font-medium text-primary-foreground/70">MorphX Price</th>
                <th className="text-left py-4 px-4 font-medium text-primary-foreground/70">USA Price</th>
                <th className="text-left py-4 px-4 font-medium text-primary-foreground/70">You Save</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, index) => (
                <motion.tr
                  key={row.wood}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{row.wood}</td>
                  <td className="py-4 px-4 text-accent">{row.morphx}</td>
                  <td className="py-4 px-4 text-primary-foreground/60">{row.usa}</td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium">
                      {row.savings}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
