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
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            From concept to completion
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}

              {/* Step Number */}
              <div className="w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground font-serif text-xl font-medium mb-6">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
