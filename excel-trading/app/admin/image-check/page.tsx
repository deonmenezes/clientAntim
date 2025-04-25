"use client"

import CheckMissingImages from "@/components/products/check-missing-images"

export default function TestImagePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Image Checker Tool</h1>
      <p className="mb-6 text-gray-600">
        Use this tool to check if all product images referenced in the product grid are available in the public directory.
      </p>
      
      <CheckMissingImages />
    </div>
  )
}