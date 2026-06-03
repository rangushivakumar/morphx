import Image from "next/image"

export function StorySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-muted overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop"
              alt="MorphX workshop"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6 text-balance">
              Craftsmanship Meets Commercial Intelligence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MorphX was built on a simple belief — that premium commercial furniture shouldn&apos;t cost a fortune. By working directly with trusted manufacturers, we eliminate the middlemen and pass the savings directly to our clients, without ever compromising on quality or craftsmanship.
              </p>
              <p>
                From a single hotel room set to a full restaurant fit-out, we handle every material — furniture, cabinetry, countertops, flooring, lighting, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
