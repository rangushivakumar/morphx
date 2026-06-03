"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  category?: string
  description?: string
  imageUrl?: string
}

export function ProductCard({ name, category, description, imageUrl }: ProductCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-border">
              <svg
                className="h-8 w-8 text-muted-foreground/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
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
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        {category && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            {category}
          </p>
        )}
        <h3 className="mb-2 font-serif text-lg font-medium text-foreground line-clamp-2">
          {name}
        </h3>
        {description && (
          <p className="mb-5 flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="mt-auto w-full border-foreground/20 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </div>
    </div>
  )
}
