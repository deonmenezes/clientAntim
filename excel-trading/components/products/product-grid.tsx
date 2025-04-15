"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  // This would normally be fetched from the server
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Heavy Duty Power Drill",
      image: "/placeholder.svg?height=300&width=300",
      category: "power-tools",
      slug: "heavy-duty-power-drill",
      isNew: true,
    },
    {
      id: 2,
      name: "Professional Safety Helmet",
      image: "/placeholder.svg?height=300&width=300",
      category: "safety-equipment",
      slug: "professional-safety-helmet",
      isNew: false,
    },
    {
      id: 3,
      name: "Precision Measuring Tape",
      image: "/placeholder.svg?height=300&width=300",
      category: "measuring-tools",
      slug: "precision-measuring-tape",
      isNew: false,
    },
    {
      id: 4,
      name: "Industrial Wrench Set",
      image: "/placeholder.svg?height=300&width=300",
      category: "hand-tools",
      slug: "industrial-wrench-set",
      isNew: true,
    },
    {
      id: 5,
      name: "Cordless Impact Driver",
      image: "/placeholder.svg?height=300&width=300",
      category: "power-tools",
      slug: "cordless-impact-driver",
      isNew: false,
    },
    {
      id: 6,
      name: "Safety Goggles",
      image: "/placeholder.svg?height=300&width=300",
      category: "safety-equipment",
      slug: "safety-goggles",
      isNew: false,
    },
    {
      id: 7,
      name: "Digital Caliper",
      image: "/placeholder.svg?height=300&width=300",
      category: "measuring-tools",
      slug: "digital-caliper",
      isNew: true,
    },
    {
      id: 8,
      name: "Screwdriver Set",
      image: "/placeholder.svg?height=300&width=300",
      category: "hand-tools",
      slug: "screwdriver-set",
      isNew: false,
    },
  ])

  const filteredProducts = category ? products.filter((product) => product.category === category) : products

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="relative">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              {product.isNew && <Badge className="absolute top-2 right-2 bg-green-600">New</Badge>}
            </div>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                {product.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-red-600 hover:bg-red-700">View Details</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
