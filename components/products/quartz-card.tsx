import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface QuartzCardProps {
  name: string
  imageUrl: string
}

export function QuartzCard({ name, imageUrl }: QuartzCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="font-serif text-base font-medium text-foreground mb-3">{name}</h3>
        <div className="mb-4 flex gap-2">
          {["2cm", "3cm"].map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
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
