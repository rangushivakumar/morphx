"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { SubcategoryPills } from "./subcategory-pills"

const subcategories = [
  "Dining Chairs",
  "Bar & High Chairs",
  "Solid Wood Tables",
  "Table Bases",
  "Booth Seating",
]

const products: Record<string, string[]> = {
  "Dining Chairs": [
    "Curved Back Tub Chair (Rose Fabric)",
    "Curved Back Tub Chair (Beige Leather)",
    "Black Frame Chair with Leather Back",
    "Solid Wood Arm Chair",
    "Pink Shell Dining Chair",
    "Oxblood Leather Padded Chair",
    "Cream Wingback Dining Chair",
    "Mauve Barrel Chair",
    "Lime Green Cut-Out Chair",
    "Orange High Back Dining Chair",
    "White Tufted Wingback Chair",
    "Beige Minimal Side Chair",
    "Orange Channel Stitch Chair",
    "Brown Channel Stitch Chair",
    "Grey Curved Side Chair",
    "Orange Open Back Arm Chair",
    "Black Tub Chair (Oak Legs)",
    "Rust Barrel Chair (Oak Legs)",
    "Grey Tub Stack Chair",
    "Dark Brown Side Chair",
  ],
  "Bar & High Chairs": [
    "Round Wood Stool (No Back)",
    "Bentwood Swivel Barstool",
    "Dark Wood Minimal Bar Chair",
    "White Saddle Barstool (Teak Frame)",
    "Natural Oak Low Back Bar Chair",
    "Orange Leather Wing Bar Chair",
    "Oak Seat Industrial Metal Frame Stool",
    "White Boucle Gold Frame Bar Chair",
  ],
  "Solid Wood Tables": [
    "Square Light Oak Table",
    "Walnut Square Table",
    "Round Table with X-Base",
    "Wide Rectangular Table with Angled Legs",
  ],
  "Table Bases": [
    "Single Pedestal Black Iron Base",
    "Double Pedestal Black Iron Base",
    "X-Cross Black Iron Base",
    "V-Shape Black Steel Base",
    "Single Round Stainless Base",
    "Brass Tulip Pedestal Base",
    "Round Stainless Base (Circle Base)",
    "Square Stainless Pedestal Base",
  ],
  "Booth Seating": [
    "White Tufted High Back Bench",
    "Tan Leather Channel Stitch High Back Bench",
    "Natural Wood Slat Back Bench",
    "Circular Green Booth Pod",
    "Low Black Bench with Metal Frame",
    "Burgundy Double-Sided Booth",
    "White Channel Stitch Double-Sided Booth",
    "Dark Brown Tufted Double-Sided Booth",
  ],
}

export function RestaurantFurniture() {
  const [activeCategory, setActiveCategory] = useState("Dining Chairs")

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
            category="Restaurant"
          />
        ))}
      </div>
    </div>
  )
}
