import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustStatement } from "@/components/home/trust-statement"
import { ProductCategories } from "@/components/home/product-categories"
import { FeaturesSection } from "@/components/home/features-section"
import { BuyOrLeaseSection } from "@/components/home/buy-or-lease-section"
import { HowItWorks } from "@/components/home/how-it-works"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustStatement />
        <ProductCategories />
        <FeaturesSection />
        <BuyOrLeaseSection />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
