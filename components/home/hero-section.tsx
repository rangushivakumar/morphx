"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2920&auto=format&fit=crop"
          alt="Modern commercial interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 animate-fade-up opacity-0 animation-delay-200">
            Premium Hospitality Furniture
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-foreground animate-fade-up opacity-0 text-balance">
            Crafted for Spaces That Leave a Lasting Impression
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up opacity-0 animation-delay-400">
            Bespoke hospitality furniture, restaurant seating, and custom cabinetry — sourced direct from manufacturers. Premium quality solutions at 30–80% below typical USA market pricing.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5 px-8"
            >
              <Link href="#features">View Cost Savings</Link>
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up opacity-0 animation-delay-600">
            <div className="flex flex-wrap items-center gap-8 lg:gap-12">
              <div>
                <p className="text-3xl lg:text-4xl font-serif font-medium text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="h-12 w-px bg-border/50 hidden sm:block" />
              <div>
                <p className="text-3xl lg:text-4xl font-serif font-medium text-foreground">6+</p>
                <p className="text-sm text-muted-foreground mt-1">Wood Types</p>
              </div>
              <div className="h-12 w-px bg-border/50 hidden sm:block" />
              <div>
                <p className="text-2xl lg:text-3xl font-serif font-medium text-foreground">Bespoke</p>
                <p className="text-sm text-muted-foreground mt-1">to Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  )
}
