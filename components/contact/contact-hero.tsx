"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance"
          >
            Let&apos;s discuss your project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-xl text-muted-foreground leading-relaxed"
          >
            Whether you&apos;re planning a new facility, renovating an existing space, or need custom manufacturing solutions, our team is ready to help.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
