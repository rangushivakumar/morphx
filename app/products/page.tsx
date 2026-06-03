import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductCard } from "@/components/products/product-card"

const productSections = [
  {
    id: "hospital-furniture",
    title: "Hospital Furniture",
    subtitle: "Durable, hygienic, and certified furniture solutions designed for modern clinical spaces and patient care.",
    products: [
      {
        name: "ICU Electric Bed",
        description: "Multi-function motorized ICU bed with intuitive side-rail controls, integrated weighing scales, and cardiac chair positioning.",
        imageUrl: "https://images.unsplash.com/photo-1670665352618-49ae2ae914ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Bedside Locker & Cabinet",
        description: "Antibacterial ABS plastic surface bedside table with multiple drawers, slide-out writing tray, and hidden locking cabinet.",
        imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Overbed Table",
        description: "Smooth gas-spring height-adjustable overbed table featuring a spill-proof molded laminate tray top and locking castors.",
        imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Stainless Steel Medical Trolley",
        description: "Heavy-grade 304 stainless steel laboratory cart with dual shelves, drawer storage, and noise-damping swivel castors.",
        imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Patient Examination Couch",
        description: "Ergonomically padded clinical exam couch with adjustable headrest, built-in paper roll holder, and easy-clean vinyl surface.",
        imageUrl: "https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "restaurant-furniture",
    title: "Restaurant Furniture",
    subtitle: "High-traffic seating, premium solid wood tables, and commercial banquettes crafted for fine dining and cafés.",
    products: [
      {
        name: "Curved Back Tub Chair",
        description: "Chic contemporary tub dining chair featuring lush velvet rose fabric upholstery and dark-stained solid ash legs.",
        imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Solid Wood Dining Table",
        description: "Premium commercial dining table crafted from solid kiln-dried white oak with a durable, scratch-resistant matte clear coat.",
        imageUrl: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Bentwood Swivel Barstool",
        description: "Elegant retro-inspired bentwood high stool with a full 360-degree swivel mechanism and button-tufted black leather seat.",
        imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Tan Leather Booth Bench",
        description: "Custom modular wall banquet bench with high-back vertical channel stitching and a solid hardwood kickbase.",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Round Café Bistro Table",
        description: "Cast-iron tulip pedestal base supporting an elegant polished white Carrara marble top with beveled edges.",
        imageUrl: "https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "cabinets-countertops",
    title: "Cabinets & Countertops",
    subtitle: "Custom-manufactured architectural woodwork, modern slab cabinetry, and beautiful engineered quartz surfaces.",
    products: [
      {
        name: "Classic Shaker Base Cabinet",
        description: "Precision-machined five-piece shaker doors, solid maple drawer boxes, and premium soft-close under-mount drawer glides.",
        imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Slab European Wall Cabinet",
        description: "Modern handleless European wall cabinets with high-gloss acrylic front panels and Blum Aventos lift systems.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Calcatta Quartz Countertop",
        description: "Premium engineered quartz countertop slab featuring realistic grey veins on a stark, polished white background.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Brushed Nickel Handle Bar",
        description: "Modern solid stainless steel pull bar with anti-fingerprint brushed finish, perfect for contemporary cabinets.",
        imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Soft-Close Utility Tall Cabinet",
        description: "Full-height kitchen utility pantry with premium soft-close hinges, multi-tier spice racks, and heavy-duty wire basket pullouts.",
        imageUrl: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        <ProductsHero />

        {/* Products List Sections */}
        {productSections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 lg:py-24 scroll-mt-20 ${
              idx % 2 === 1 ? "bg-secondary/40" : "bg-background"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Section Header */}
              <div className="max-w-3xl mb-12 lg:mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {section.products.map((product) => (
                  <ProductCard
                    key={product.name}
                    name={product.name}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    category={section.title}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

