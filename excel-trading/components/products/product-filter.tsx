"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { productCategories } from "@/lib/products"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get("category") || ""
  const currentQuery = searchParams?.get("q") || ""
  const [selectedCategory, setSelectedCategory] = useState(currentCategory)
  const [searchQuery, setSearchQuery] = useState(currentQuery)
  const [inStockOnly, setInStockOnly] = useState(false)

  // Update the selected category when the URL changes
  useEffect(() => {
    setSelectedCategory(currentCategory)
    setSearchQuery(currentQuery)
  }, [currentCategory, currentQuery])

  const handleCategoryChange = (category: string) => {
    // Update URL with selected category
    const params = new URLSearchParams(searchParams?.toString() || "")
    
    if (category) {
      params.set("category", category)
    } else {
      params.delete("category")
    }
    
    router.push(`/products?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    const params = new URLSearchParams(searchParams?.toString() || "")
    
    if (searchQuery.trim()) {
      params.set("q", searchQuery)
    } else {
      params.delete("q")
    }
    
    router.push(`/products?${params.toString()}`)
  }

  const handleInStockChange = (checked: boolean) => {
    setInStockOnly(checked)
    
    const params = new URLSearchParams(searchParams?.toString() || "")
    
    if (checked) {
      params.set("inStock", "true")
    } else {
      params.delete("inStock")
    }
    
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-6 bg-gray-50 p-4 rounded-lg">
      <div>
        <h2 className="text-xl font-bold mb-4">Filter Products</h2>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white"
            />
            <Button type="submit" variant="default">Search</Button>
          </div>
        </form>
        
        <Accordion type="single" collapsible defaultValue="categories">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-lg font-semibold">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 mt-2">
                <div 
                  className={`cursor-pointer hover:text-blue-600 p-2 rounded transition-colors ${!selectedCategory ? 'font-semibold text-blue-600 bg-blue-50' : ''}`}
                  onClick={() => handleCategoryChange("")}
                >
                  All Products
                </div>
                {productCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`cursor-pointer hover:text-blue-600 p-2 rounded transition-colors ${selectedCategory === category.id ? 'font-semibold text-blue-600 bg-blue-50' : ''}`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="availability">
            <AccordionTrigger className="text-lg font-semibold">Availability</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox 
                  id="inStock" 
                  checked={inStockOnly}
                  onCheckedChange={(checked) => handleInStockChange(checked as boolean)}
                />
                <label
                  htmlFor="inStock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock Only
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
