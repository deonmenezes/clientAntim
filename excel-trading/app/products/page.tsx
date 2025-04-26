import React from 'react'
import ProductsClient from '@/components/products/products-client'

export const metadata = {
  title: 'Products - Excel Trading',
  description: 'Browse our wide range of industrial products and equipment',
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductsClient />
    </div>
  )
}