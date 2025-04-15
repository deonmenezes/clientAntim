export interface Service {
  id: number
  title: string
  slug: string
  shortDescription: string
  description: string
  image: string
  benefits: string[]
  active: boolean
  process?: { title: string; description: string }[]
}

// This is a mock function that would normally fetch data from a database
export async function getServices(): Promise<Service[]> {
  // In a real application, this would fetch from a database
  return [
    {
      id: 1,
      title: "Equipment Rental",
      slug: "equipment-rental",
      shortDescription: "Rent high-quality industrial equipment for your short-term projects",
      description:
        "Our equipment rental service provides you with access to a wide range of industrial tools and equipment without the need for a long-term investment. Whether you need specialized tools for a one-time project or temporary replacements for your existing equipment, we have you covered.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Cost-effective solution for short-term projects",
        "Access to latest equipment without capital investment",
        "Flexible rental periods to suit your needs",
        "Well-maintained equipment ready for immediate use",
        "Technical support and training available",
      ],
      active: true,
      process: [
        {
          title: "Consultation",
          description: "Discuss your project requirements with our experts to determine the right equipment",
        },
        {
          title: "Selection & Booking",
          description: "Choose from our extensive range and schedule your rental period",
        },
        {
          title: "Delivery & Setup",
          description: "We deliver the equipment to your site and provide setup assistance if needed",
        },
      ],
    },
    // Additional services would be listed here
  ]
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices()
  return services.find((service) => service.slug === slug) || null
}
