"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { SubcategoryPills } from "./subcategory-pills"

const subcategories = [
  "Hotel Room",
  "Lobby & Common Areas",
  "Outdoor",
  "Bathroom",
  "Lighting",
  "Flooring",
]

const products: Record<string, string[]> = {
  "Hotel Room": [
    "King Bed + Headboard",
    "Queen Bed + Headboard",
    "Twin Bed + Headboard",
    "Nightstands (Set of 2)",
    "Wardrobe with Storage",
    "Desk + Desk Chair",
    "TV Panel / Media Console",
    "Luggage Bench / Rack",
    "Mini-bar Cabinet",
    "Lounge / Accent Chair",
    "Ottoman or Bench",
    "Coffee Table",
    "Side Table",
    "Vanity Unit",
  ],
  "Lobby & Common Areas": [
    "Lobby Sofa Set",
    "Reception Accent Chairs",
    "Lobby Coffee Table",
    "Side Table",
    "Lobby Ottoman",
    "Reception Desk Seating",
  ],
  "Outdoor": [
    "Teak Sun Lounger (Set of 2)",
    "Egg Pod Seating with Cushions",
    "Daybed with Canopy Frame",
    "Outdoor Side Table",
  ],
  "Bathroom": [
    "Floating Vanity Unit",
    "Freestanding Bathtub",
    "Basin Faucet Set",
    "Bathroom Mirror Cabinet",
  ],
  "Lighting": [
    "Crystal Rod Chandelier",
    "Brass Wall Sconce",
    "Rectangular LED Ceiling Panel",
  ],
  "Flooring": [
    "Dark Marble Tiles",
    "Patterned Axminster Carpet",
    "Oak Hardwood Flooring",
  ],
}

export function HospitalityFurniture() {
  const [activeCategory, setActiveCategory] = useState("Hotel Room")

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Subcategory Pills */}
      <SubcategoryPills
        categories={subcategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Section Title */}
      <div className="mt-10 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
          {activeCategory}
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products[activeCategory]?.map((product) => (
          <ProductCard
            key={product}
            name={product}
            category="Hospitality"
          />
        ))}
      </div>
    </div>
  )
}
