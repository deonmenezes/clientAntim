import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/ui/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getServices } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services - Excel Trading LLC (OPC)",
  description:
    "Discover our comprehensive range of industrial services. Excel Trading LLC offers expert solutions for all your industrial needs.",
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Our Services" description="Comprehensive industrial solutions tailored to your needs" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.slug}`} className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
