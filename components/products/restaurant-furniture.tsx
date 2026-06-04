"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { SubcategoryPills } from "./subcategory-pills"
import { CatalogSection } from "./catalog-section"
import { getRestaurantImage } from "@/lib/product-images"
import { productDescription } from "@/lib/product-descriptions"

const subcategories = [
  "Dining Chairs",
  "Bar & High Chairs",
  "Solid Wood Tables",
  "Booth Seating",
] as const

const products: Record<(typeof subcategories)[number], string[]> = {
  "Dining Chairs": [
    "Curved Back Tub Chair (Rose Fabric)",
    "Curved Back Tub Chair (Beige Leather)",
    "Black Frame Chair with Leather Back",
    "Solid Wood Arm Chair",
    "Pink Shell Dining Chair",
    "Oxblood Leather Padded Chair",
  ],
  "Bar & High Chairs": [
    "Round Wood Stool (No Back)",
    "Bentwood Swivel Barstool",
    "White Boucle Gold Frame Bar Chair",
  ],
  "Solid Wood Tables": [
    "Square Light Oak Table",
    "Walnut Square Table",
    "Round Table with X-Base",
    "Wide Rectangular Table with Angled Legs",
  ],
  "Booth Seating": [
    "White Tufted High Back Bench",
    "Tan Leather Channel Stitch High Back Bench",
    "Natural Wood Slat Back Bench",
    "Circular Green Booth Pod",
    // "Low Black Bench with Metal Frame",
    // "Burgundy Double-Sided Booth",
    // "White Channel Stitch Double-Sided Booth",
    // "Dark Brown Tufted Double-Sided Booth",
  ],
}

const subtitles: Partial<Record<(typeof subcategories)[number], string>> = {
  "Dining Chairs": "High-traffic upholstery and solid wood frames for fine dining and hospitality venues.",
  "Booth Seating": "Custom banquettes with channel stitch, tufting, and modular configurations.",
}

export function RestaurantFurniture() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof subcategories)[number]>("Dining Chairs")

  return (
    <CatalogSection
      title={activeCategory}
      subtitle={subtitles[activeCategory]}
      pills={
        <SubcategoryPills
          categories={[...subcategories]}
          activeCategory={activeCategory}
          onCategoryChange={(c) =>
            setActiveCategory(c as (typeof subcategories)[number])
          }
        />
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products[activeCategory].map((product, index) => (
          <ProductCard
            key={product}
            name={product}
            category="Restaurant Furniture"
            description={productDescription(product, activeCategory)}
            imageUrl={getRestaurantImage(activeCategory, index)}
          />
        ))}
      </div>
    </CatalogSection>
  )
}
