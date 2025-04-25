import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Globe Valve",
    image: "/Globe_Valve.jpg",
    category: "Mechanical Products",
    slug: "globe-valve",
    isNew: true,
  },
  {
    id: 2,
    name: "Professional Safety Helmet",
    image: "/Helmet+.jpg",
    category: "Safety Equipment",
    slug: "safety-helmet",
    isNew: false,
  },
  {
    id: 3,
    name: "Digital Multimeter",
    image: "/Multimeter.jpeg",
    category: "Testing Equipment",
    slug: "digital-multimeter",
    isNew: false,
  },
  {
    id: 4,
    name: "Industrial Power Distribution Box",
    image: "/Distribution_Panel.webp",
    category: "Electrical Equipment",
    slug: "power-distribution-box",
    isNew: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our selection of premium industrial tools</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative">
                  <div className="relative h-64">
                    <Image src={product.image || "/placeholder.jpg"} alt={product.name} fill className="object-cover" />
                  </div>
                  {product.isNew && <Badge className="absolute top-2 right-2 bg-green-600">New</Badge>}
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Details</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
