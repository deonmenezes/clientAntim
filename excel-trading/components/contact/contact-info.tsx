import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          We're here to help! Reach out to us with any questions or inquiries about our products and services.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Our Location</h3>
            <p className="text-gray-600">Dubai, United Arab Emirates</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone Number</h3>
            <p className="text-gray-600">+971545417801</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email Address</h3>
            <p className="text-gray-600">exceltrdguae@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <h3 className="font-semibold mb-3">Business Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>9:00 AM - 1:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
