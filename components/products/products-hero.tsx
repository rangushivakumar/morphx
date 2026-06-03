import { PageHero } from "@/components/page-hero"
import { GOLDEN_HOSPITALITY_HERO_IMAGE } from "@/lib/page-hero-images"

export function ProductsHero() {
  return (
    <PageHero
      eyebrow="Our Collections"
      title="Furniture & Materials for Every Commercial Space"
      description="Sourced direct from manufacturers to deliver outstanding quality, customized flexibility, and substantial direct-import savings."
      imageSrc={GOLDEN_HOSPITALITY_HERO_IMAGE}
      imageAlt="Warm hospitality interior"
    />
  )
}
