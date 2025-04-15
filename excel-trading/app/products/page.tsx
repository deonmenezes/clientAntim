import type { Metadata } from "next"
import ProductGrid from "@/components/products/product-grid"
import ProductFilter from "@/components/products/product-filter"
import PageHeader from "@/components/ui/page-header"

export const metadata: Metadata = {
  title: "Products - Excel Trading LLC (OPC)",
  description:
    "Browse our wide range of industrial tools and equipment. Excel Trading LLC offers premium quality products for all your industrial needs.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Our Products" description="Browse our extensive range of industrial tools and equipment" />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
