"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FallbackImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  loading?: "eager" | "lazy"
  quality?: number
}

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = "/placeholder.jpg",
  fill = false,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  loading = "lazy",
  quality = 75,
  ...props
}: FallbackImageProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height" | "fill">) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    // Reset states when src changes
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={cn(
      "relative overflow-hidden", 
      isLoading ? "bg-gray-100 animate-pulse" : "",
      fill ? "w-full h-full" : "",
      className
    )}>
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={loading}
        className={cn(
          "object-contain transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  )
}