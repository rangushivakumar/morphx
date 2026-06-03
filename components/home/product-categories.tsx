"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal"

const categories = [
  {
    id: "hospitality",
    title: "Hospitality Furniture",
    description: "Hotel rooms, lobbies, restaurant areas, outdoor & bathroom furniture",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2920&auto=format&fit=crop",
    href: "/products#hospitality",
  },
  {
    id: "restaurant",
    title: "Restaurant Furniture",
    description: "Dining chairs, bar stools, booth seating, solid wood & stone tables",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    href: "/products#restaurant",
  },
  {
    id: "cabinets",
    title: "Cabinets & Countertops",
    description: "Kitchen, bathroom, office & closet cabinetry with quartz countertops",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    href: "/products#cabinets",
  },
]

export function ProductCategories() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Our Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
              Premium furniture for every commercial space
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        {/* Categories Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <Link
                href={category.href}
                className="group relative aspect-[3/4] overflow-hidden bg-muted block"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-3xl font-serif font-medium text-primary-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 max-w-sm mb-4">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
