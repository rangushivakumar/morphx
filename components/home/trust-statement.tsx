"use client"

import { motion } from "framer-motion"

export function TrustStatement() {
  return (
    <section className="py-12 lg:py-16 bg-secondary border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg lg:text-xl font-serif font-medium text-foreground"
        >
          Trusted for Hospitality, Restaurant &amp; Commercial Projects
        </motion.p>
      </div>
    </section>
  )
}
