"use client"

import type { ReactNode } from "react"

interface CatalogSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  pills: ReactNode
}

export function CatalogSection({ title, subtitle, children, pills }: CatalogSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {pills}
      <div className="mt-10 mb-10 border-b border-border/60 pb-8">
        <h2 className="font-serif text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
