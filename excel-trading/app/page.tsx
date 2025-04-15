import Hero from "@/components/home/hero"
import CategorySection from "@/components/home/category-section"
import FeaturedProducts from "@/components/home/featured-products"
import AboutSection from "@/components/home/about-section"
import ServicesSection from "@/components/home/services-section"
import ClientsSection from "@/components/home/clients-section"
import ContactCTA from "@/components/home/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <CategorySection />
      <FeaturedProducts />
      <ServicesSection />
      <ClientsSection />
      <ContactCTA />
    </div>
  )
}
