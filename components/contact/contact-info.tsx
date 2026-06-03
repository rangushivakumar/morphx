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
    description: "New project inquiries and pricing",
  },
  {
    name: "Customer Support",
    email: "support@morphx.com",
    description: "Existing order support and questions",
  },
  {
    name: "Warranty & Service",
    email: "warranty@morphx.com",
    description: "Product warranty and repair services",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-serif font-medium text-foreground mb-8">
          Get in Touch
        </h2>
        <div className="space-y-6">
          {contactDetails.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-foreground">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div>
        <h2 className="text-2xl font-serif font-medium text-foreground mb-8">
          Departments
        </h2>
        <div className="space-y-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground">{dept.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {dept.description}
              </p>
              <a
                href={`mailto:${dept.email}`}
                className="text-sm text-primary hover:underline underline-offset-4 mt-2 inline-block"
              >
                {dept.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative aspect-video bg-muted border border-border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Houston, Texas
            </p>
          </div>
        </div>
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  )
}
