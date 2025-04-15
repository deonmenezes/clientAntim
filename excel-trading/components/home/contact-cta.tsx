import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Industrial Operations?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and discover how our premium tools and equipment can enhance
          your productivity
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
