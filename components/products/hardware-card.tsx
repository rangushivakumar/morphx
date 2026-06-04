import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HardwareCardProps {
  name: string
  imageUrl: string
}

export function HardwareCard({ name, imageUrl }: HardwareCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-3 flex-grow text-sm font-medium leading-snug text-foreground">{name}</h3>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="w-full border-foreground/20 text-xs hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        <Link href="/contact">Enquire</Link>
      </Button>
    </div>
  )
}
