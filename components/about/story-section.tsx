"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function StorySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-muted overflow-hidden group"
          >
            <Image
              src="/images/craftsmanship.png"
              alt="MorphX craftsman at work"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6 text-balance">
              Craftsmanship Meets Commercial Intelligence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MorphX was built on a simple belief — that premium commercial furniture shouldn&apos;t cost a fortune. By working directly with trusted manufacturers, we eliminate the middlemen and pass the savings directly to our clients, without ever compromising on quality or craftsmanship.
              </p>
              <p>
                From a single hotel room set to a full restaurant fit-out, we handle every material — furniture, cabinetry, countertops, flooring, lighting, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
