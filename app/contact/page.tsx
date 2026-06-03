import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          {/* Subtle decorative background blobs */}
          <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

