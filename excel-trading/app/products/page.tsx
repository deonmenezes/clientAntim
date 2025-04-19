import type { Metadata } from "next"
import ProductsClient from "@/components/products/products-client"
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
      <div className="mt-8">
        <ProductsClient />
      </div>
    </div>
  )
}
