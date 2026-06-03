import { SectionPattern, homeCardClass, HomeCardAccent } from "./section-pattern"

const steps = [
  {
    step: "01",
    title: "Share Requirements",
    description: "Tell us about your project needs, space requirements, and design preferences.",
  },
  {
    step: "02",
    title: "Choose Materials & Finish",
    description: "Select from our extensive range of woods, fabrics, metals, and finishes.",
  },
  {
    step: "03",
    title: "We Fabricate to Order",
    description: "Our skilled craftsmen manufacture your custom pieces to exact specifications.",
  },
  {
    step: "04",
    title: "Delivered to Your Space",
    description: "Professional delivery and installation at your commercial location.",
  },
]

export function HowItWorks() {
  return (
    <SectionPattern tone="light" heroBackground>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
          How It Works
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
          From concept to completion
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((item, index) => (
          <div key={item.step} className={homeCardClass}>
            <HomeCardAccent />

            {index < steps.length - 1 && (
              <div
                aria-hidden
                className="hidden lg:block absolute top-14 -right-4 z-0 h-px w-8 bg-gradient-to-r from-primary/30 to-transparent"
              />
            )}

            <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary font-serif text-lg font-medium text-primary-foreground shadow-[0_4px_14px_-2px] shadow-primary/25 ring-4 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
              {item.step}
            </div>

            <h3 className="relative z-10 font-serif text-lg font-medium text-foreground mb-2">
              {item.title}
            </h3>
            <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionPattern>
  )
}
