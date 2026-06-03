import { Paintbrush, Factory, DollarSign, Layers } from "lucide-react"
import { SectionPattern, homeCardClass, HomeCardAccent } from "./section-pattern"

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
    <SectionPattern id="features" tone="soft">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Why Choose MorphX
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
          Premium quality. Direct pricing. Complete customization.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div key={feature.title} className={homeCardClass}>
            <HomeCardAccent />
            <span className="absolute top-5 right-5 text-5xl font-serif font-medium text-muted/35 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30 group-hover:shadow-md">
              <feature.icon className="h-6 w-6" />
            </div>

            <h3 className="relative z-10 font-serif text-lg font-medium text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionPattern>
  )
}
