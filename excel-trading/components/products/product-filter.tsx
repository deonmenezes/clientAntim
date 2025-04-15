"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ProductFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categories = [
    { id: "hand-tools", name: "Hand Tools" },
    { id: "power-tools", name: "Power Tools" },
    { id: "safety-equipment", name: "Safety Equipment" },
    { id: "measuring-tools", name: "Measuring Tools" },
    { id: "machinery", name: "Machinery" },
  ]

  const brands = [
    { id: "brand1", name: "Brand 1" },
    { id: "brand2", name: "Brand 2" },
    { id: "brand3", name: "Brand 3" },
    { id: "brand4", name: "Brand 4" },
  ]

  const [priceRange, setPriceRange] = useState([0, 1000])

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/products?category=${categoryId}`)
  }

  const handleReset = () => {
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={searchParams.get("category") === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={`brand-${brand.id}`} />
              <Label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                {brand.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>AED {priceRange[0]}</span>
          <span>AED {priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Availability</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="out-of-stock" />
            <Label htmlFor="out-of-stock" className="text-sm cursor-pointer">
              Out of Stock
            </Label>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={handleReset}>
        Reset Filters
      </Button>
    </div>
  )
}
