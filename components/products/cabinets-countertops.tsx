"use client"

import { useState } from "react"
import { SubcategoryPills } from "./subcategory-pills"
import { CatalogSection } from "./catalog-section"
import { SpecCard } from "./spec-card"
import { getCabinetSpecImage } from "@/lib/product-images"

const subcategories = [
  "Base Cabinets",
  "Wall Cabinets",
  "Tall Cabinets",
] as const

const baseCabinets = [
  {
    name: "Single Door & Drawer Cabinet",
    specs: [
      { label: "Widths", value: '6–21"' },
      { label: "Height", value: '34.5"' },
      { label: "Depth", value: '24"' },
    ],
  },
  {
    name: "Double Door & Drawer Cabinet",
    specs: [
      { label: "Widths", value: '24–30"' },
      { label: "Height", value: '34.5"' },
      { label: "Depth", value: '24"' },
    ],
  },
  {
    name: "Base Drawer Cabinet",
    specs: [
      { label: "Widths", value: '12–36"' },
      { label: "Height", value: '34.5"' },
      { label: "Depth", value: '24"' },
    ],
  },
  {
    name: "Corner Base Cabinet",
    specs: [
      { label: "Widths", value: '39–45"' },
      { label: "Height", value: '34.5"' },
      { label: "Depth", value: '24"' },
    ],
  },
  {
    name: "Lazy Susan Cabinet",
    specs: [{ label: "Widths", value: '33" and 36"' }],
  },
  {
    name: "Sink Base Cabinet",
    specs: [{ label: "Widths", value: '30", 33", 36"' }],
  },
]

const wallCabinets = [
  { name: '30" Single Door Cabinet', specs: [{ label: "Widths", value: '6–21"' }] },
  { name: '30" Double Door Cabinet', specs: [{ label: "Widths", value: '24–36"' }] },
  { name: '42" Blind Corner Cabinet', specs: [{ label: "Type", value: "Corner" }] },
  { name: "Angle Wall Cabinet", specs: [{ label: "Depth", value: '24"' }] },
]

const tallCabinets = [
  {
    name: "Oven Cabinet",
    specs: [
      { label: "Width", value: '30"' },
      { label: "Heights", value: '84" or 96"' },
    ],
  },
  {
    name: "Utility Cabinet",
    specs: [
      { label: "Widths", value: '18–30"' },
      { label: "Heights", value: '84" or 90"' },
    ],
  },
]

const subtitles: Partial<Record<(typeof subcategories)[number], string>> = {
  "Base Cabinets": "Precision-built base units with soft-close slides and custom width programs.",
  "Wall Cabinets": "Wall-mounted storage with configurable widths and corner solutions.",
  "Tall Cabinets": "Full-height pantry and oven housings for commercial kitchens.",
}

export function CabinetsCountertops() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof subcategories)[number]>("Base Cabinets")

  const renderContent = () => {
    switch (activeCategory) {
      case "Base Cabinets":
        return (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {baseCabinets.map((cabinet, index) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
                imageUrl={getCabinetSpecImage("base", index)}
              />
            ))}
          </div>
        )
      case "Wall Cabinets":
        return (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wallCabinets.map((cabinet, index) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
                imageUrl={getCabinetSpecImage("wall", index)}
              />
            ))}
          </div>
        )
      case "Tall Cabinets":
        return (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tallCabinets.map((cabinet, index) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
                imageUrl={getCabinetSpecImage("tall", index)}
              />
            ))}
          </div>
        )
      default:
        return null
    }
  }

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
      {renderContent()}
    </CatalogSection>
  )
}
