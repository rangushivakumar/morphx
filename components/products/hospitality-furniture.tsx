"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { SubcategoryPills } from "./subcategory-pills"
import { CatalogSection } from "./catalog-section"
import { getHospitalityImage } from "@/lib/product-images"
import { productDescription } from "@/lib/product-descriptions"

const subcategories = [
  "Hotel Room",
  "Lobby & Common Areas",
  "Restaurant Area",
] as const

const products: Record<(typeof subcategories)[number], string[]> = {
  "Hotel Room": [
    "King Bed + Headboard",
    "Twin Bed + Headboard",
    "Nightstands (Set of 2)",
    "Wardrobe with Storage",
  ],
  "Lobby & Common Areas": [
    "Lobby Sofa Set",
    "Reception Accent Chairs",
    "Lobby Ottoman",
    "Reception Desk Seating",
  ],
  "Restaurant Area": [
    "Hotel Banquet Dining Chair",
    "Restaurant Banquette Seating",
    "Buffet Console Table",
    "Private Dining Table Set",
  ],
}

const subtitles: Partial<Record<(typeof subcategories)[number], string>> = {
  "Hotel Room": "Complete guest room packages with coordinated finishes and soft-close hardware.",
  "Lobby & Common Areas": "Statement seating and tables for arrival experiences and shared lounges.",
  "Restaurant Area": "Coordinated dining pieces for in-hotel restaurants and banquet spaces.",
}

export function HospitalityFurniture() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof subcategories)[number]>("Hotel Room")

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
            category="Hospitality Furniture"
            description={productDescription(product, activeCategory)}
            imageUrl={getHospitalityImage(activeCategory, index)}
          />
        ))}
      </div>
    </CatalogSection>
  )
}
