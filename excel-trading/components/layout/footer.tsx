import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.jpg"
                alt="Excel Trading LLC"
                width={120}
                height={40}
                className="invert"
              />
            </Link>
            <p className="mb-6">
              Excel Trading LLC (OPC) is one of the main industrial product supplier for a wide range of industrial
              tools and equipment all over the UAE.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-green-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-green-500 transition-colors duration-300">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=tools" className="hover:text-green-500 transition-colors duration-300">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=power-tools"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Power Tools
                </Link>
              </li>
              <li>
                <Link href="/products?category=safety" className="hover:text-green-500 transition-colors duration-300">
                  Safety Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=machinery"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Machinery
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=measuring"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  Measuring Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition-colors duration-300">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <span>+971545417801</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <span>exceltrdguae@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="ml-2 bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Excel Trading LLC (OPC). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
