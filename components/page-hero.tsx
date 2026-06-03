import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </p>
          <h1
            className={cn(
              "font-serif text-4xl font-medium leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            )}
          >
            {title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
