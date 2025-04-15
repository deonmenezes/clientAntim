import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About Excel Trading"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Excel Trading LLC</h2>
            <p className="text-gray-600 mb-6">
              Excel Trading LLC (OPC) is one of the main industrial product supplier for a wide range of industrial
              tools and equipment all over the UAE. With years of experience in the industry, we have established
              ourselves as a reliable partner for businesses seeking high-quality industrial solutions.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p>Wide range of high-quality industrial products</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p>Competitive pricing and excellent value</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p>Expert advice and technical support</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p>Fast and reliable delivery across the UAE</p>
              </div>
            </div>

            <Link href="/about">
              <Button className="bg-green-600 hover:bg-green-700">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
