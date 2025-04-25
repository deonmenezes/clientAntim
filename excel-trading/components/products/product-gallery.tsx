"use client"

import { useState } from "react"
import FallbackImage from "@/components/ui/fallback-image"

interface ProductGalleryProps {
  images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  // If no images are provided, use a placeholder
  const galleryImages = images.length > 0 ? images : ["/placeholder.jpg"]

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
        <FallbackImage
          src={galleryImages[activeImage] || "/placeholder.jpg"}
          alt="Product image"
          fill
          className="object-contain"
          priority={true}
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
              <FallbackImage
                src={image || "/placeholder.jpg"}
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
