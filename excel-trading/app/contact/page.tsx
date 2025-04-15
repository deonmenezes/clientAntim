import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import Map from "@/components/contact/map"

export const metadata: Metadata = {
  title: "Contact Us - Excel Trading LLC (OPC)",
  description:
    "Get in touch with Excel Trading LLC. We're here to answer your questions and provide the industrial solutions you need.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Contact Us" description="Get in touch with our team for any inquiries or support" />

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Our Location</h2>
        <Map />
      </div>
    </div>
  )
}
