"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProductType } from "@/lib/products"
import { addAdditionalProducts } from "@/lib/utils"

export default function ProductGrid4() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const categoryParam = searchParams?.get("category") || ""
  const searchQuery = searchParams?.get("q") || ""
  const inStockOnly = searchParams?.get("inStock") === "true"

  useEffect(() => {
    // Start with an empty array, then use addAdditionalProducts to generate products from image files
    const allProducts = addAdditionalProducts([])
    
    // Apply filters
    let filteredProducts = allProducts
    
    // Filter by category if provided
    if (categoryParam) {
      filteredProducts = filteredProducts.filter(product => product.category === categoryParam)
    }
    
    // Filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      )
    }
    
    // Filter by stock status if requested
    if (inStockOnly) {
      filteredProducts = filteredProducts.filter(product => product.inStock)
    }

    setProducts(filteredProducts)
    setLoading(false)
  }, [categoryParam, searchQuery, inStockOnly])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (products.length === 0) {
    return <p className="text-center py-8 text-gray-500">No products found matching your criteria.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 pt-0">
              <p className="font-bold">AED {product.price.toFixed(2)}</p>
              <span className={`text-sm px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}