import { Paintbrush, Factory, DollarSign, Layers } from "lucide-react"

const features = [
  {
    icon: Paintbrush,
    title: "Bespoke to Order",
    description: "Every piece made-to-order. Full control over design, materials and finish.",
  },
  {
    icon: Factory,
    title: "Direct Manufacturer",
    description: "Sourced straight from trusted manufacturers for quality and cost efficiency.",
  },
  {
    icon: DollarSign,
    title: "Unmatched Pricing",
    description: "30–80% below USA market pricing across all wood types and finishes.",
  },
  {
    icon: Layers,
    title: "Full Material Range",
    description: "Solid wood, MDF, plywood, stone, metal, fabric — end-to-end supply.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Why Choose MorphX
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Premium quality. Direct pricing. Complete customization.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-6xl font-serif font-medium text-muted/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
