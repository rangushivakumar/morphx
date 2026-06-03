export function TrustStatement() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/40 py-12 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-lg lg:text-xl font-serif font-medium text-foreground">
          Trusted for Hospitality, Restaurant &amp; Commercial Projects
        </p>
      </div>
    </section>
  )
}
