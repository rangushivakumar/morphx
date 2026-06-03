"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SubcategoryPills } from "./subcategory-pills"

const subcategories = [
  "Base Cabinets",
  "Wall Cabinets",
  "Tall Cabinets",
  "Cabinet Styles",
  "Quartz Countertops",
  "Hardware",
]

// Specification Card Component
function SpecCard({
  name,
  specs,
}: {
  name: string
  specs: { label: string; value: string }[]
}) {
  return (
    <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
      <h3 className="text-base font-semibold text-foreground mb-4">{name}</h3>
      <div className="space-y-2">
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{spec.label}</span>
            <span className="text-foreground font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="w-full mt-5 border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
      >
        <Link href="/contact">Enquire Now</Link>
      </Button>
    </div>
  )
}

// Style Card Component
function StyleCard({
  name,
  description,
  options,
}: {
  name: string
  description: string
  options: string[]
}) {
  return (
    <div className="bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors">
      {/* Image Placeholder */}
      <div className="aspect-[16/9] bg-muted flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-border rounded-lg flex items-center justify-center">
          <svg
            className="w-10 h-10 text-muted-foreground/50"
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
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
            Carcass Options
          </p>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <span
                key={option}
                className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Quartz Card Component
function QuartzCard({ name }: { name: string }) {
  return (
    <div className="bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors">
      {/* Swatch Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
        <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">
          Swatch
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">{name}</h3>
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
            2cm
          </span>
          <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
            3cm
          </span>
        </div>
      </div>
    </div>
  )
}

// Hardware Card Component
function HardwareCard({ name }: { name: string }) {
  return (
    <div className="bg-card border border-border p-4 hover:border-primary/30 transition-colors text-center">
      {/* Image Placeholder */}
      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-3">
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
      <h3 className="text-sm font-medium text-foreground">{name}</h3>
    </div>
  )
}

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
  {
    name: '30" Single Door Cabinet',
    specs: [{ label: "Widths", value: '6–21"' }],
  },
  {
    name: '30" Double Door Cabinet',
    specs: [{ label: "Widths", value: '24–36"' }],
  },
  {
    name: '42" Blind Corner Cabinet',
    specs: [{ label: "Type", value: "Corner" }],
  },
  {
    name: "Angle Wall Cabinet",
    specs: [{ label: "Depth", value: '24"' }],
  },
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

const cabinetStyles = [
  {
    name: "Classic Shaker Style",
    description:
      "Timeless framed cabinet design with clean lines and versatile appeal.",
    options: ["MDF", "Plywood", "Particle Board", "Solid Wood"],
  },
  {
    name: "Slab / European Style",
    description:
      "Modern flat-panel cabinetry designed for contemporary spaces.",
    options: ["MDF", "Plywood", "Particle Board", "Solid Wood"],
  },
  {
    name: "Raised Shaker Style",
    description:
      "Traditional cabinet styling with added depth and detailing.",
    options: ["MDF", "Plywood", "Particle Board", "Solid Wood"],
  },
]

const quartzCountertops = [
  "Calcatta Valerio",
  "Calcatta Eternal",
  "Calcatta Venatino",
  "Calcatta Marquina",
  "Carrara Iridescent Cloud",
  "Exotic Ventisca",
  "Basic Cement Grey",
  "Basic Foggy City",
]

const hardware = [
  "T-Bar Handle (Matte Black)",
  "Curved Pull (Black)",
  "Brushed Nickel Pull",
  "Bronze Curved Pull",
  "White Square Pull",
  "Stainless Bar Pull",
  "Round Knob Chrome",
  "Round Knob Gold",
  "Round Knob Black Marble",
  "Square Knob Nickel",
  "Cylinder Knob Chrome",
  "Classic Knob Brass",
]

export function CabinetsCountertops() {
  const [activeCategory, setActiveCategory] = useState("Base Cabinets")

  const renderContent = () => {
    switch (activeCategory) {
      case "Base Cabinets":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {baseCabinets.map((cabinet) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
              />
            ))}
          </div>
        )
      case "Wall Cabinets":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wallCabinets.map((cabinet) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
              />
            ))}
          </div>
        )
      case "Tall Cabinets":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tallCabinets.map((cabinet) => (
              <SpecCard
                key={cabinet.name}
                name={cabinet.name}
                specs={cabinet.specs}
              />
            ))}
          </div>
        )
      case "Cabinet Styles":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cabinetStyles.map((style) => (
              <StyleCard
                key={style.name}
                name={style.name}
                description={style.description}
                options={style.options}
              />
            ))}
          </div>
        )
      case "Quartz Countertops":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {quartzCountertops.map((quartz) => (
              <QuartzCard key={quartz} name={quartz} />
            ))}
          </div>
        )
      case "Hardware":
        return (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {hardware.map((item) => (
                <HardwareCard key={item} name={item} />
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground text-center">
              All drawer slides and hinges are soft-close. Color variants
              available on all hardware.
            </p>
          </>
        )
      default:
        return null
    }
  }

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

      {/* Content */}
      {renderContent()}
    </div>
  )
}
