import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductTabs } from "@/components/products/product-tabs"

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main>
        <ProductsHero />
        <ProductTabs />
      </main>
      <Footer />
    </>
  )
}
