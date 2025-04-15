import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/ui/page-header"
import { getServiceBySlug } from "@/lib/services"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found - Excel Trading LLC",
    }
  }

  return {
    title: `${service.title} - Excel Trading LLC`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title={service.title} description={service.shortDescription} />

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        </div>

        <div className="flex flex-col space-y-6">
          <div className="prose max-w-none">
            <p className="text-lg">{service.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" className="w-fit mt-4 bg-red-600 hover:bg-red-700">
            Request Service
          </Button>
        </div>
      </div>

      {service.process && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="mt-2 text-gray-600">Contact us today to discuss your requirements</p>
        </div>
        <div className="flex justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 mr-4">
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  )
}
