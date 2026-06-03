import { PageHero } from "@/components/page-hero"
import { GOLDEN_HOSPITALITY_HERO_IMAGE } from "@/lib/page-hero-images"

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Us"
      title="Let's discuss your project"
      description="Whether you're planning a new facility, renovating an existing space, or need custom manufacturing solutions, our team is ready to help."
      imageSrc={GOLDEN_HOSPITALITY_HERO_IMAGE}
      imageAlt="Warm golden hospitality interior"
    />
  )
}
