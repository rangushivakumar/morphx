"use client"

import { cn } from "@/lib/utils"

interface SubcategoryPillsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function SubcategoryPills({
  categories,
  activeCategory,
  onCategoryChange,
}: SubcategoryPillsProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
      <div className="flex gap-2.5 pb-1">
        {categories.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border/80 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
