"use client"

import { useState } from "react"
import { HospitalityFurniture } from "./hospitality-furniture"
import { RestaurantFurniture } from "./restaurant-furniture"
import { CabinetsCountertops } from "./cabinets-countertops"

const tabs = [
  { id: "hospitality", label: "Hospitality Furniture" },
  { id: "restaurant", label: "Restaurant Furniture" },
  { id: "cabinets", label: "Cabinets & Countertops" },
]

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("hospitality")

  return (
    <section>
      {/* Tab Bar */}
      <div className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12 lg:py-16">
        {activeTab === "hospitality" && <HospitalityFurniture />}
        {activeTab === "restaurant" && <RestaurantFurniture />}
        {activeTab === "cabinets" && <CabinetsCountertops />}
      </div>
    </section>
  )
}
