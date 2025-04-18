import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Mechanial Products",
    image: "/Mechanical.jpg?height=300&width=300",
    slug: "hand-tools",
  },
  {
    id: 2,
    name: "Electrical Products",
    image: "/electrical2.jpg?height=300&width=300",
    slug: "power-tools",
  },
  {
    id: 3,
    name: "Industrial General Equipment",
    image: "/safety.webp?height=300&width=300",
    slug: "safety-equipment",
  },
  {
    id: 4,
    name: "Measuring Tools",
    image: "/placeholder.svg?height=300&width=300",
    slug: "measuring-tools",
  },
  {
    id: 5,
    name: "Machinery",
    image: "/placeholder.svg?height=300&width=300",
    slug: "machinery",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Experience Excellence in Industrial Procurement and Safety Solutions
          </h2>
          <p className="text-xl font-semibold text-gray-600">Dive Into Our Top Categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
