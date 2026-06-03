"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Map product names to images (cycle through available images)
const productImages: Record<string, string> = {
  // Dining Chairs
  "Curved Back Tub Chair (Rose Fabric)": "/images/products/dining-chair-1.png",
  "Curved Back Tub Chair (Beige Leather)": "/images/products/dining-chair-2.png",
  "Black Frame Chair with Leather Back": "/images/products/dining-chair-1.png",
  "Solid Wood Arm Chair": "/images/products/dining-chair-2.png",
  "Pink Shell Dining Chair": "/images/products/dining-chair-1.png",
  "Oxblood Leather Padded Chair": "/images/products/dining-chair-2.png",
  "Cream Wingback Dining Chair": "/images/products/dining-chair-1.png",
  "Mauve Barrel Chair": "/images/products/dining-chair-2.png",
  // Bar Stools
  "Round Wood Stool (No Back)": "/images/products/bar-stool-1.png",
  "Bentwood Swivel Barstool": "/images/products/bar-stool-1.png",
  "Dark Wood Minimal Bar Chair": "/images/products/bar-stool-1.png",
  "White Saddle Barstool (Teak Frame)": "/images/products/bar-stool-1.png",
  // Hotel Room
  "King Bed + Headboard": "/images/products/hotel-bed.png",
  "Queen Bed + Headboard": "/images/products/hotel-bed.png",
  "Twin Bed + Headboard": "/images/products/hotel-bed.png",
  // Tables
  "Square Light Oak Table": "/images/products/wood-table.png",
  "Walnut Square Table": "/images/products/wood-table.png",
  "Round Table with X-Base": "/images/products/wood-table.png",
  // Booth Seating
  "White Tufted High Back Bench": "/images/products/booth-seating.png",
  "Tan Leather Channel Stitch High Back Bench": "/images/products/booth-seating.png",
  "Natural Wood Slat Back Bench": "/images/products/booth-seating.png",
  // Lobby
  "Lobby Sofa Set": "/images/products/lobby-sofa.png",
  "Reception Accent Chairs": "/images/products/lobby-sofa.png",
  // Outdoor
  "Teak Sun Lounger (Set of 2)": "/images/products/outdoor-lounger.png",
  "Daybed with Canopy Frame": "/images/products/outdoor-lounger.png",
}

// Categories to image mapping for fallback
const categoryImages: Record<string, string> = {
  "Restaurant": "/images/products/dining-chair-1.png",
  "Hospitality": "/images/products/hotel-bed.png",
  "Cabinets": "/images/products/cabinet-shaker.png",
}

// Subcategory fallbacks
const subcategoryImages: Record<string, string> = {
  "Dining Chairs": "/images/products/dining-chair-1.png",
  "Bar & High Chairs": "/images/products/bar-stool-1.png",
  "Solid Wood Tables": "/images/products/wood-table.png",
  "Table Bases": "/images/products/wood-table.png",
  "Booth Seating": "/images/products/booth-seating.png",
  "Hotel Room": "/images/products/hotel-bed.png",
  "Lobby & Common Areas": "/images/products/lobby-sofa.png",
  "Outdoor": "/images/products/outdoor-lounger.png",
  "Bathroom": "/images/products/hotel-bed.png",
  "Lighting": "/images/products/hotel-bed.png",
  "Flooring": "/images/products/hotel-bed.png",
}

interface ProductCardProps {
  name: string
  category?: string
  description?: string
}

export function ProductCard({ name, category, description }: ProductCardProps) {
  // Get image - first check exact match, then category fallback
  const image = productImages[name] || (category && categoryImages[category]) || "/images/products/dining-chair-1.png"
  
  return (
    <motion.div
      className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
      whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {category && (
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
            {category}
          </p>
        )}
        <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        )}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-[1.02] transition-all duration-200"
        >
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </div>
    </motion.div>
  )
}
