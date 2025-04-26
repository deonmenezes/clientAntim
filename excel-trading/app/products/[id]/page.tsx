'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, ShoppingCart, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProductType } from '@/lib/products'

// Import product data from different product grid components
// In a real application, this would come from an API or database
const findProductById = (id: number): ProductType | null => {
  // In a real application, we would fetch the product from an API
  // For now, we'll handle some common product IDs from our product grids
  
  // Simplified way to get some product info based on ID ranges
  if (id >= 3001 && id <= 3820) {
    // This is from ProductGrid4
    const categoryMap: Record<number, string> = {
      3050: "cutting-tools",
      3101: "corrosion-and-rust-removers",
      3201: "welding-products",
      3301: "hand-tools",
      3401: "power-tools",
      3501: "services",
      3701: "testing-equipment",
      3801: "special-products",
    }
    
    // Determine category based on ID range
    const categoryKey = Object.keys(categoryMap)
      .map(Number)
      .sort((a, b) => b - a)
      .find(key => id >= key) || 3001
    
    const category = categoryMap[categoryKey] || "paints"
    
    // Create imagery based on category
    let imageSrc = '/placeholder.jpg'
    
    switch(category) {
      case 'cutting-tools':
        imageSrc = '/Mechanical.jpg'
        break
      case 'welding-products':
        imageSrc = '/Electrodes+.jpg'
        break
      case 'paints':
        imageSrc = '/industrial-paints+.jpg'
        break
      case 'corrosion-and-rust-removers':
        imageSrc = '/Industrial_Brushes+.jpg'
        break
      case 'hand-tools':
        imageSrc = '/Clamps.jpg'
        break
      case 'power-tools':
        imageSrc = '/Contactor.webp'
        break
      case 'services':
        imageSrc = '/s1.jpg'
        break
      case 'testing-equipment':
        imageSrc = '/Multimeter.jpeg'
        break
      case 'special-products':
        imageSrc = '/safety.webp'
        break
      default:
        imageSrc = '/placeholder.jpg'
    }
    
    return {
      id,
      name: `${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} #${id}`,
      description: `This is a detailed description of the product #${id} in the ${category} category. It includes specifications, features, and usage instructions. 
        \n\nSpecifications:\n- Material: Industrial grade materials\n- Standard: ISO certified\n- Warranty: 1 year\n- Origin: UAE`,
      price: Math.floor((id % 100) * 10) + 99.99,
      category,
      imageSrc,
      inStock: true
    }
  } else if (id >= 100 && id <= 1000) {
    // This is from other product grids
    const imageSrc = `/products/file_${Math.floor(id / 10)}_${id % 100}_${id * 2}.jpg`
    
    return {
      id,
      name: `Industrial Product #${id}`,
      description: `High-quality industrial product designed for professional use in demanding environments. This product meets all industry standards and is built to last.
        \n\nFeatures:\n- Durable construction\n- Professional grade\n- Easy maintenance\n- Long service life`,
      price: (id % 10) * 100 + 99.99,
      category: "industrial",
      imageSrc,
      inStock: id % 5 !== 0 // 80% in stock
    }
  }
  
  // If all else fails, create a generic product
  // In a real app, you would return null here or show an error
  return {
    id,
    name: `Product #${id}`,
    description: "This is a detailed description of the product. In a real application, this would contain all the specifications and features of the product.",
    price: Math.floor(Math.random() * 900) + 100,
    category: "category",
    imageSrc: `/products/file_${Math.floor(Math.random() * 9000) + 1000}_${Math.floor(Math.random() * 9000) + 1000}_${Math.floor(Math.random() * 9000) + 1000}.jpg`,
    inStock: true
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Correctly unwrap params using React.use() to avoid the warning
  const unwrappedParams = React.use(params as any);
  const productId = parseInt(unwrappedParams.id);
  
  const router = useRouter()
  const [product, setProduct] = useState<ProductType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Find product data using the already parsed productId
      const productData = findProductById(productId)
      
      setProduct(productData)
      setIsLoading(false)
    }, 300)
  }, [productId]) // Changed dependency from params.id to productId
  
  const handleAddToCart = () => {
    // In a real application, this would add the product to the cart
    // For now, we'll just show a success message
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }
  
  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }
  
  const goBack = () => {
    router.back()
  }
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  
  if (!product) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium mt-2">Product not found</h3>
        <p className="text-gray-500 mt-1">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={goBack} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
    )
  }
  
  const imageSrc = product.imageSrc || '/placeholder.jpg'
  
  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="outline" onClick={goBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg border shadow-md">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Product Details */}
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-4">
              <p className="text-3xl font-bold text-primary">AED {product.price.toFixed(2)}</p>
              <span className={`text-sm px-3 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>
            
            <div className="my-4">
              <h3 className="font-semibold text-lg mb-2">Specifications</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Category: {product.category.replace(/-/g, ' ')}</li>
                <li>Product ID: {product.id}</li>
                <li>Warranty: 1 Year</li>
                <li>Delivery: 3-5 Business Days</li>
                <li>Installation: Available on request</li>
              </ul>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center w-full">
              <p className="font-medium mr-4">Quantity:</p>
              <div className="flex border rounded">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border-r"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 border-l"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart} 
              className="w-full" 
              size="lg"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </Button>
            
            {!product.inStock && (
              <p className="text-red-500 text-sm text-center">
                This product is currently out of stock
              </p>
            )}
          </CardFooter>
        </Card>
      </div>

      {/* We could add a related products section here */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <p className="text-gray-500">
          Related products would be displayed here in a real application.
        </p>
      </div>
    </div>
  )
}