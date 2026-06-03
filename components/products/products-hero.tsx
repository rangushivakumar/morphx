"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProductsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products-banner.png"
          alt="Premium commercial furniture showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
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
            Our Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance"
          >
            Furniture & Materials for Every Commercial Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Explore our curated collections of hospitality furniture, restaurant seating, custom cabinetry, and premium countertops.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
