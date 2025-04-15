import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Equipment Rental",
    description: "Rent high-quality industrial equipment for your short-term projects",
    image: "/placeholder.svg?height=300&width=300",
    slug: "equipment-rental",
  },
  {
    id: 2,
    title: "Maintenance & Repair",
    description: "Professional maintenance and repair services for industrial tools and equipment",
    image: "/placeholder.svg?height=300&width=300",
    slug: "maintenance-repair",
  },
  {
    id: 3,
    title: "Technical Consultation",
    description: "Expert advice on selecting the right tools and equipment for your specific needs",
    image: "/placeholder.svg?height=300&width=300",
    slug: "technical-consultation",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services to support your industrial operations and ensure maximum
            efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/services/${service.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-red-600 hover:bg-red-700">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
