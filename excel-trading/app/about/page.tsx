import type { Metadata } from "next"
import Image from "next/image"
import PageHeader from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - Excel Trading LLC (OPC)",
  description: "Learn about Excel Trading LLC, a leading supplier of industrial tools and equipment in the UAE.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="About Excel Trading LLC"
        description="Your trusted partner for industrial tools and equipment in the UAE"
      />

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="prose max-w-none">
          <p className="text-lg">
            Excel Trading LLC (OPC) is one of the main industrial product suppliers for a wide range of industrial tools
            and equipment all over the UAE. With years of experience in the industry, we have established ourselves as a
            reliable partner for businesses seeking high-quality industrial solutions.
          </p>
          <p>
            Our mission is to provide our clients with premium quality products that enhance productivity, ensure
            safety, and deliver exceptional value. We understand the unique challenges faced by industries in the UAE,
            and we tailor our offerings to meet these specific needs.
          </p>
          <p>
            At Excel Trading, we pride ourselves on our commitment to excellence, our extensive product knowledge, and
            our dedication to customer satisfaction. Our team of experts is always ready to assist you in finding the
            right tools and equipment for your specific requirements.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Why Choose Excel Trading LLC?</h3>
            <ul>
              <li>Wide range of high-quality industrial products</li>
              <li>Competitive pricing and excellent value</li>
              <li>Expert advice and technical support</li>
              <li>Fast and reliable delivery across the UAE</li>
              <li>Comprehensive after-sales service</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Excel Trading LLC Office"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 mr-2"
                >
                  <path d="m22 8-6 6-6-6" />
                  <path d="M2 8l6 6 6-6" />
                </svg>
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to providing only the highest quality products that meet international standards and
                exceed customer expectations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 mr-2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our customers can depend on us for consistent service, timely delivery, and products that perform as
                promised, every time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 mr-2"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We continuously seek out the latest advancements in industrial tools and equipment to bring innovative
                solutions to our customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Team Member ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Position Title</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
