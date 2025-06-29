import { HeroSection } from "@/Components/hero-section"
import { ServicesSection } from "@/Components/service-section"
import { DestinationsSection } from "@/Components/destinations-section"
import { BookingStepsSection } from "@/Components/booking-steps-section"
import { TestimonialsSection } from "@/Components/testimonial-section"
import { PartnersSection } from "@/Components/partners-section"
import { NewsletterSection } from "@/Components/newsletter-section"
import { Footer } from "@/Components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <BookingStepsSection />
        <TestimonialsSection />
        <PartnersSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
