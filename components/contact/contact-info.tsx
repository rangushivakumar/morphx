import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    content: "(800) 555-1234",
    link: "tel:+18005551234",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@morphx.com",
    link: "mailto:info@morphx.com",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    content: "1250 Industrial Blvd, Houston, TX 77001",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 8:00 AM - 6:00 PM CST",
    link: null,
  },
]

const departments = [
  {
    name: "Sales & Quotes",
    email: "sales@morphx.com",
    description: "New project inquiries and wholesale commercial pricing.",
  },
  {
    name: "Customer Support",
    email: "support@morphx.com",
    description: "Existing order updates, tracking, and logistical coordination.",
  },
  {
    name: "Warranty & Service",
    email: "warranty@morphx.com",
    description: "Product warranty details, replacement parts, and maintenance.",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-4 rounded-xl bg-card/40 border border-border/50 hover:bg-card/70 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors block truncate"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground leading-relaxed">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
          Key Departments
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group p-6 bg-card/65 backdrop-blur-sm border border-border/80 rounded-xl hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded-full">
                  Direct Line
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {dept.description}
              </p>
              <a
                href={`mailto:${dept.email}`}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                {dept.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative aspect-video bg-card/65 backdrop-blur-sm border border-border/80 rounded-xl overflow-hidden shadow-md group hover:border-primary/20 transition-all duration-500">
        <div className="absolute inset-0 z-0 bg-muted/40" />

        {/* Decorative Grid Map Look */}
        <div
          className="absolute inset-0 opacity-40 z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Simulated Map Elements */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative">
            {/* Glowing outer rings for map marker */}
            <span className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
            <span className="absolute -inset-8 rounded-full bg-primary/10 animate-pulse" />
            <div className="relative w-8 h-8 rounded-full bg-primary shadow-lg border border-primary-foreground flex items-center justify-center text-primary-foreground">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Floating Map Label */}
        <div className="absolute bottom-4 left-4 z-20 bg-background/90 border border-border px-3.5 py-2 rounded-lg shadow-sm">
          <p className="text-xs font-semibold text-foreground">Houston, Texas Headquarters</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">1250 Industrial Blvd</p>
        </div>
      </div>
    </div>
  )
}

