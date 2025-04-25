import Link from "next/link"
import FallbackImage from "@/components/ui/fallback-image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Mechanial Products",
    image: "/Mechanical.jpg",
    slug: "hand-tools",
  },
  {
    id: 2,
    name: "Electrical Products",
    image: "/electrical2.jpg",
    slug: "power-tools",
  },
  {
    id: 3,
    name: "Industrial General Equipment",
    image: "/safety.webp",
    slug: "safety-equipment",
  },
  {
    id: 4,
    name: "Measuring Tools",
    image: "/placeholder.jpg",
    slug: "measuring-tools",
  },
  {
    id: 5,
    name: "Machinery",
    image: "/placeholder.jpg",
    slug: "machinery",
  },
  {
    id: 6,
    name: "Hardware",
    image: "/Bolts.jpg?height=300&width=300",
    slug: "hardware",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of industrial products and supplies, categorized for easy navigation. Find exactly what you need for your business or project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <div className="p-3">
                  <div className="relative w-full aspect-square rounded-md overflow-hidden mb-3">
                    <FallbackImage
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-0 text-center">
                    <h3 className="font-medium text-sm md:text-base">{category.name}</h3>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
