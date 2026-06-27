// import Link from "next/link"
// import { ShoppingBag, RefreshCw, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const options = [
//   {
//     icon: ShoppingBag,
//     title: "Own It",
//     description:
//       "Purchase outright with full control over your FF&E from day one. Ideal for projects with defined budgets and long-term planning.",
//   },
//   {
//     icon: RefreshCw,
//     title: "Lease It",
//     description:
//       "Flexible leasing options aligned to your project timeline and cash flow. Availability varies by scope — speak to our team.",
//   },
// ]

// export function BuyOrLeaseSection() {
//   return (
//     // <section className="bg-[#FAF8F5] py-20">
//     //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
//     //     {/* Label */}
//     //     <div className="text-center">
//     //       <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9CA3AF]">
//     //         Procurement Flexibility
//     //       </p>

//     //       {/* Heading */}
//     //       <h2 className="mt-4 font-serif text-3xl font-medium text-[#1a1f2e] sm:text-4xl">
//     //         Buy or Lease, Based on What Your Project Needs
//     //       </h2>

//     //       {/* Description */}
//     //       <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-[#6B7280]">
//     //         Every commercial space has different FF&amp;E requirements,
//     //         timelines, budgets, and operating plans. At MorphX, customers have
//     //         the flexibility to either purchase outright or explore leasing
//     //         options based on project scope and availability. Whether you are
//     //         setting up a hotel, restaurant, office, lounge, villa, or commercial
//     //         interior, our team can help you understand the right procurement
//     //         model for your space.
//     //       </p>
//     //     </div>

//     //     {/* Cards */}
//     //     <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
//     //       {options.map((option) => (
//     //         <div
//     //           key={option.title}
//     //           className="rounded-xl border border-[#E8E0D8] bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
//     //         >
//     //           <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E8E0D8] bg-[#FAF8F5]">
//     //             <option.icon className="h-5 w-5 text-[#1a1f2e]" />
//     //           </div>

//     //           <h3 className="mb-3 text-lg font-semibold text-[#1a1f2e]">
//     //             {option.title}
//     //           </h3>

//     //           <p className="text-sm leading-relaxed text-[#6B7280]">
//     //             {option.description}
//     //           </p>
//     //         </div>
//     //       ))}
//     //     </div>

//     //     {/* Tagline */}
//     //     <p className="mt-12 text-center font-serif text-xl italic text-[#1a1f2e]">
//     //       Own it. Lease it. Build it your way.
//     //     </p>

//     //     {/* CTA */}
//     //     <div className="mt-8 flex justify-center">
//     //       <Button
//     //         asChild
//     //         size="lg"
//     //         className="bg-[#1a1f2e] text-white hover:bg-[#1a1f2e]/90"
//     //       >
//     //         <Link href="/contact">
//     //           Speak to Our Team
//     //           <ArrowRight className="ml-2 h-4 w-4" />
//     //         </Link>
//     //       </Button>
//     //     </div>
//     //   </div>
//     // </section>
//   )
// }


import Link from "next/link"
import { ShoppingBag, RefreshCw, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { OWNIT_IMAGE } from "@/lib/ownit"
import { LEASE_IT_IMAGE } from "@/lib/leaseit"

const options = [
  {
    icon: ShoppingBag,
    title: "Own It",
    description:
      "Purchase outright with full control over your FF&E from day one. Ideal for projects with defined budgets and long-term planning.",
    image: OWNIT_IMAGE,
  },
  {
    icon: RefreshCw,
    title: "Lease It",
    description:
      "Flexible leasing options aligned to your project timeline and cash flow. Availability varies by scope — speak to our team.",
    image: LEASE_IT_IMAGE,
  },
]

export function BuyOrLeaseSection() {
  return (
    <section className="relative bg-[#FAF8F5] py-20 overflow-hidden">
      {/* grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,31,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,31,46,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* soft ambient blobs */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#1a1f2e]/5 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#1a1f2e]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9CA3AF]">
            Procurement Flexibility
          </p>

          <h2 className="mt-4 font-serif text-3xl font-medium text-[#1a1f2e] sm:text-4xl">
            Buy or Lease, Based on What Your Project Needs
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-[#6B7280]">
            Every commercial space has different FF&amp;E requirements, timelines, budgets, and
            operating plans. At MorphX, customers have the flexibility to either purchase outright
            or explore leasing options based on project scope and availability.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.title}
              className="group overflow-hidden rounded-xl border border-[#E8E0D8] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Image header */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E8E0D8] bg-[#FAF8F5]">
                  <option.icon className="h-5 w-5 text-[#1a1f2e]" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[#1a1f2e]">
                  {option.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#6B7280]">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-12 text-center font-serif text-xl italic text-[#1a1f2e]">
          Own it. Lease it. Build it your way.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#1a1f2e] text-white hover:bg-[#1a1f2e]/90"
          >
            <Link href="/contact">
              Speak to Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}