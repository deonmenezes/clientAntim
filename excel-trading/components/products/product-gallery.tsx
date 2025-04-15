"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  // If no images are provided, use a placeholder
  const galleryImages = images.length > 0 ? images : ["/placeholder.svg?height=600&width=600"]

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
        <Image
          src={galleryImages[activeImage] || "/placeholder.svg"}
          alt="Product image"
          fill
          className="object-contain"
        />
      </div>

      {galleryImages.length > 1 && (
        <div className="flex space-x-2 overflow-auto pb-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                activeImage === index ? "ring-2 ring-green-600" : ""
              }`}
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
