import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { WhyChooseUs } from "@/components/about/why-choose-us"
import { MaterialsSection } from "@/components/about/materials-section"
import { CostComparison } from "@/components/about/cost-comparison"
import { CraftsmanshipSection } from "@/components/about/craftsmanship-section"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <StorySection />
        <WhyChooseUs />
        <MaterialsSection />
        <CostComparison />
        <CraftsmanshipSection />
      </main>
      <Footer />
    </>
  )
}
