import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { HOME_HERO_IMAGE } from "@/lib/home-images"

interface SectionPatternProps {
  id?: string
  children: ReactNode
  className?: string
  /** "soft" = tinted secondary band; "light" = white with subtle pattern */
  tone?: "soft" | "light"
  /** Same image as home hero, shown faintly behind the section */
  heroBackground?: boolean
}

export function SectionPattern({
  id,
  children,
  className,
  tone = "soft",
  heroBackground = false,
}: SectionPatternProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 lg:py-32",
        !heroBackground && (tone === "soft" ? "bg-secondary/60" : "bg-background"),
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {heroBackground && (
          <>
            <Image
              src={HOME_HERO_IMAGE}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/96 via-background/92 to-background/97" />
          </>
        )}

        <div
          className={cn(
            "absolute inset-0",
            heroBackground
              ? "bg-gradient-to-b from-background/40 via-transparent to-background/50"
              : tone === "soft"
                ? "bg-gradient-to-b from-background via-transparent to-background/80"
                : "bg-gradient-to-b from-secondary/30 via-transparent to-secondary/20"
          )}
        />

        {/* Dot grid */}
        <div
          className={cn(
            "absolute inset-0",
            heroBackground ? "opacity-[0.25]" : "opacity-[0.45]"
          )}
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklch, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {!heroBackground && (
          <>
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, transparent, transparent 48px, color-mix(in oklch, var(--primary) 25%, transparent) 48px, color-mix(in oklch, var(--primary) 25%, transparent) 49px)",
              }}
            />
            <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/[0.07] blur-3xl" />
            <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-primary/[0.05] blur-3xl" />
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[80px]" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

export const homeCardClass =
  "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-8 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_12px_40px_-8px_rgba(15,23,42,0.12)]"

export function HomeCardAccent() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  )
}
