import { PageHero } from "@/components/page-hero"
import { ABOUT_HERO_IMAGE } from "@/lib/page-hero-images"

export function AboutHero() {
  return (
    <PageHero
      eyebrow="About Us"
      title="One Stop Solution for All Your Construction Materials"
      description="MorphX supplies premium bespoke furniture and construction materials — direct from trusted manufacturers — to hotels, restaurants, and commercial spaces across the region."
      imageSrc={ABOUT_HERO_IMAGE}
      imageAlt="Manufacturing facility"
    />
  )
}
