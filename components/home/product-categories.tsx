"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "hospitality",
    title: "Hospitality Furniture",
    description: "Clinical ICU beds, bedside lockers, adjustable overbed tables, and diagnostic examination seating.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    href: "/products#product-catalog",
  },
  {
    id: "restaurant",
    title: "Restaurant Furniture",
    description: "Dining chairs, bar stools, booth seating, solid wood & stone tables",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    href: "/products#product-catalog",
  },
  {
    id: "cabinets",
    title: "Cabinets & Countertops",
    description: "Kitchen, bathroom, office & closet cabinetry with quartz countertops",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
    href: "/products#product-catalog",
  },
]

export function ProductCategories() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklch, var(--border) 40%, transparent) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
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
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] ring-1 ring-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)] hover:ring-primary/20"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-primary/5 transition-all duration-500 group-hover:from-primary/90" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="mb-3 inline-flex w-fit rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground backdrop-blur-md">
                  Collection
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary-foreground mb-3">
                  {category.title}
                </h3>
                <p className="mb-5 max-w-sm text-sm leading-relaxed text-primary-foreground/85">
                  {category.description}
                </p>

                <div className="flex items-center gap-2 text-primary-foreground">
                  <span className="text-sm font-medium">Explore Collection</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 transition-all duration-300 group-hover:bg-primary-foreground group-hover:text-primary">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
