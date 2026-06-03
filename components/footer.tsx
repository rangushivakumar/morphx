import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
]

const products = [
  { label: "Hospitality Furniture", href: "/products#hospitality" },
  { label: "Restaurant Furniture", href: "/products#restaurant" },
  { label: "Cabinets", href: "/products#cabinets" },
  { label: "Countertops", href: "/products#countertops" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight">
                Morph<span className="font-bold">X</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Transforming Living Spaces
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Phone Number
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@morphx.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Address
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  Business Address
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            &copy; 2025 MorphX. Transforming Living Spaces.
          </p>
        </div>
      </div>
    </footer>
  )
}
