"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProductType } from "@/lib/products"
import { toast } from "@/hooks/use-toast"
import { getApiUrl } from "@/lib/api-config"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const categoryParam = searchParams?.get("category") || ""

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch products from the backend API using the configured URL
        const response = await fetch(getApiUrl("/api/products"));
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allProducts: ProductType[] = await response.json();

        // Filter products by category if a category is selected
        const filteredProducts = categoryParam
          ? allProducts.filter(product => product.category === categoryParam)
          : allProducts;

        setProducts(filteredProducts);
      } catch (e: any) {
        console.error("Failed to fetch products:", e);
        setError("Failed to load products. Please try again later.");
        toast({
          title: "Error",
          description: "Could not fetch products from the backend.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryParam]);

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found{categoryParam ? ` in the '${categoryParam}' category` : ''}.</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {categoryParam
          ? `${categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
          : 'All Products'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                  <Image
                    src={product.imageSrc || '/placeholder.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                    onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
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
    </div>
  )
}