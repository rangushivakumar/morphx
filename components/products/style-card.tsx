import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface StyleCardProps {
  name: string
  description: string
  options: string[]
  imageUrl: string
}

export function StyleCard({ name, description, options, imageUrl }: StyleCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl lg:col-span-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-grow flex-col p-8">
        <h3 className="font-serif text-xl font-medium text-foreground mb-3">{name}</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mb-6 flex-grow">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
            Carcass Options
          </p>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <span
                key={option}
                className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs text-muted-foreground"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </div>
    </div>
  )
}
