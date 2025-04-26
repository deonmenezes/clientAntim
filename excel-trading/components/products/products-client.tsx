"use client"

import { Suspense } from "react"
import ProductGrid from "./product-grid"
import ProductGrid4 from "./product-grid4" // Import ProductGrid4 instead
import { ProductFilter } from "./product-filter"
import { Skeleton } from "@/components/ui/skeleton"

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}

function ProductFilterSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  )
}

export default function ProductsClient() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4">
        <Suspense fallback={<ProductFilterSkeleton />}>
          <ProductFilter />
        </Suspense>
      </div>
      <div className="w-full md:w-3/4">
        <Suspense fallback={<ProductGridSkeleton />}>
          <div className="space-y-12">
            {/* Use ProductGrid4 instead - it doesn't require products prop */}
            <ProductGrid4 />
          </div>
        </Suspense>
      </div>
    </div>
  )
}