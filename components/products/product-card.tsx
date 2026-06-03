"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  category?: string
  description?: string
}

export function ProductCard({ name, category, description }: ProductCardProps) {
  return (
    <div className="group bg-card border border-border hover:border-primary/30 transition-all duration-300">
      {/* Image Placeholder */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-border rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-muted-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {category && (
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
            {category}
          </p>
        )}
        <h3 className="text-base font-semibold text-foreground mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        )}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </div>
    </div>
  )
}
