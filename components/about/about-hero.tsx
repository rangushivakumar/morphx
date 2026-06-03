import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
          alt="Manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            About Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
            One Stop Solution for All Your Construction Materials
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            MorphX supplies premium bespoke furniture and construction materials — direct from trusted manufacturers — to hotels, restaurants, and commercial spaces across the region.
          </p>
        </div>
      </div>
    </section>
  )
}
