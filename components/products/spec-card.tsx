import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface SpecCardProps {
  name: string
  specs: { label: string; value: string }[]
  imageUrl?: string
}

export function SpecCard({ name, specs, imageUrl }: SpecCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          Cabinet Spec
        </p>
        <h3 className="mb-4 font-serif text-lg font-medium text-foreground">{name}</h3>
        <div className="mb-5 space-y-2.5 flex-grow">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground">{spec.label}</span>
              <span className="text-right font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="mt-auto w-full border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </div>
    </div>
  )
}
