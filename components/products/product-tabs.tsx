"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { HospitalityFurniture } from "./hospitality-furniture"
import { RestaurantFurniture } from "./restaurant-furniture"
import { CabinetsCountertops } from "./cabinets-countertops"

const tabs = [
  { id: "hospitality", label: "Hospitality Furniture" },
  { id: "restaurant", label: "Restaurant Furniture" },
  { id: "cabinets", label: "Cabinets & Countertops" },
] as const

type TabId = (typeof tabs)[number]["id"]

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("hospitality")

  return (
    <section id="product-catalog" className="scroll-mt-20">
      <div className="sticky top-20 z-40 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="flex gap-1 overflow-x-auto scrollbar-hide"
            role="tablist"
            aria-label="Product categories"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative shrink-0 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors sm:px-8",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 sm:left-6 sm:right-6",
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-background py-14 lg:py-20">
        <div role="tabpanel">
          {activeTab === "hospitality" && <HospitalityFurniture />}
          {activeTab === "restaurant" && <RestaurantFurniture />}
          {activeTab === "cabinets" && <CabinetsCountertops />}
        </div>
      </div>
    </section>
  )
}
