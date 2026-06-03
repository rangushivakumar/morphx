"use client"

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
      <div className="flex gap-3 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
