"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProductType } from "@/lib/products"

// Define products with IDs from 2011 to 3000
export default function ProductGrid3() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const categoryParam = searchParams?.get("category") || ""

  useEffect(() => {
    // Products with IDs from 2011 to 3000
    const allProducts: ProductType[] = [
      // More Mechanical Products
      {
        id: 2011,
        name: "Mechanical Tools Set",
        description: "Complete set of mechanical tools for professionals",
        price: 299.99,
        category: "mechanical",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },
      {
        id: 2012,
        name: "Industrial Clamps",
        description: "Heavy-duty industrial clamps for secure fastening",
        price: 45.75,
        category: "mechanical",
        imageSrc: "/Clamps.jpg",
        inStock: true
      },
      
      // Cutting Tools (2050-2100)
      {
        id: 2050,
        name: "Heavy-Duty Cut-Off Machine",
        description: "Industrial metal cutting machine with 14-inch abrasive disc",
        price: 389.99,
        category: "cutting-tools",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },
      {
        id: 2051,
        name: "Metal Cutting Circular Saw",
        description: "Professional grade circular saw for precise metal cutting",
        price: 279.99,
        category: "cutting-tools",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },
      {
        id: 2052,
        name: "Hydraulic Pipe Cutter",
        description: "High-pressure hydraulic pipe cutter for industrial applications",
        price: 449.99,
        category: "cutting-tools",
        imageSrc: "/Clamps.jpg",
        inStock: true
      },
      {
        id: 2053,
        name: "Plasma Cutting Consumables Kit",
        description: "Complete set of consumables for plasma cutting systems",
        price: 129.99,
        category: "cutting-tools",
        imageSrc: "/Welding_Accessories+.webp",
        inStock: true
      },

      // Pipe Fittings (2101-2200)
      {
        id: 2101,
        name: "Buttweld Pipe Fitting",
        description: "Professional buttweld pipe fittings",
        price: 18.99,
        category: "pipe-fittings",
        imageSrc: "/Buttweld_Pipe_Fitting.webp",
        inStock: true
      },
      {
        id: 2102,
        name: "Socketweld Pipe Fitting",
        description: "High-quality socketweld pipe fittings",
        price: 22.50,
        category: "pipe-fittings",
        imageSrc: "/Socketweld_Pipe_Fitting.webp",
        inStock: true
      },
      {
        id: 2103,
        name: "Threaded Pipe Fitting",
        description: "Precision threaded pipe fittings",
        price: 16.75,
        category: "pipe-fittings",
        imageSrc: "/Threaded_Pipe_Fitting.jpg",
        inStock: true
      },
      {
        id: 2104,
        name: "PVC Pipe - Schedule 40",
        description: "Standard PVC pipe for residential and commercial plumbing",
        price: 12.99,
        category: "pipe-fittings",
        imageSrc: "/PVC_Pipe.webp",
        inStock: true
      },
      {
        id: 2105,
        name: "GI Pipe - Medium",
        description: "Medium weight galvanized iron pipe for water distribution",
        price: 28.50,
        category: "pipe-fittings",
        imageSrc: "/GI_Pipe.webp",
        inStock: true
      },
      {
        id: 2106,
        name: "Carbon Steel Pipe - A53",
        description: "ASTM A53 carbon steel pipe for structural applications",
        price: 35.99,
        category: "pipe-fittings",
        imageSrc: "/CS_Pipe.jpg",
        inStock: true
      },
      {
        id: 2107,
        name: "Stainless Steel Tube - 304",
        description: "304 grade stainless steel tube for corrosion resistance",
        price: 45.75,
        category: "pipe-fittings",
        imageSrc: "/SS_Tube.webp",
        inStock: true
      },

      // Valves (2301-2400)
      {
        id: 2301,
        name: "Ball Valve - 2 inch",
        description: "2 inch ball valve for efficient flow control",
        price: 35.99,
        category: "valves",
        imageSrc: "/Ball_Valve.webp",
        inStock: true
      },
      {
        id: 2302,
        name: "Gate Valve - Cast Iron",
        description: "Cast iron gate valve for water systems",
        price: 42.50,
        category: "valves",
        imageSrc: "/Gate_Valve.jpg",
        inStock: true
      },
      {
        id: 2303,
        name: "Globe Valve - Bronze",
        description: "Bronze globe valve for precise flow regulation",
        price: 48.75,
        category: "valves",
        imageSrc: "/Globe_Valve.jpg",
        inStock: true
      },
      {
        id: 2304,
        name: "Butterfly Valve - Wafer",
        description: "Wafer type butterfly valve for industrial applications",
        price: 38.99,
        category: "valves",
        imageSrc: "/Butterfly_Valve.jpg",
        inStock: true
      },

      // Flanges (2401-2500)
      {
        id: 2401,
        name: "WNRF Flange - 150#",
        description: "150# weld neck raised face flange",
        price: 52.99,
        category: "flanges",
        imageSrc: "/WNRF_Flange.jpg",
        inStock: true
      },
      {
        id: 2402,
        name: "Blind Flange - 300#",
        description: "300# blind flange for pressure systems",
        price: 45.50,
        category: "flanges",
        imageSrc: "/Blind_Flange.jpg",
        inStock: true
      },
      {
        id: 2403,
        name: "SORF Flange - Stainless Steel",
        description: "Stainless steel slip on raised face flange",
        price: 48.25,
        category: "flanges",
        imageSrc: "/Sorf_Flange.jpg",
        inStock: true
      },
      {
        id: 2404,
        name: "Lap Joint Flange - Carbon Steel",
        description: "Carbon steel lap joint flange with ASA 150 rating",
        price: 54.99,
        category: "flanges",
        imageSrc: "/Lap-Joint-Flange.webp",
        inStock: true
      },

      // Safety Products (2501-2600)
      {
        id: 2501,
        name: "Industrial Safety Helmet - White",
        description: "White industrial safety helmet with ratchet suspension",
        price: 29.99,
        category: "safety-products",
        imageSrc: "/Helmet+.jpg",
        inStock: true
      },
      {
        id: 2502,
        name: "Leather Safety Gloves",
        description: "Heavy-duty leather safety gloves for construction",
        price: 19.50,
        category: "safety-products",
        imageSrc: "/Gloves+.webp",
        inStock: true
      },
      {
        id: 2503,
        name: "High-Visibility Safety Vest - Yellow",
        description: "Yellow high-visibility safety vest with reflective strips",
        price: 22.99,
        category: "safety-products",
        imageSrc: "/Safety_Vest+.jpg",
        inStock: true
      },
      {
        id: 2504,
        name: "Steel Toe Safety Boots",
        description: "Durable steel toe safety boots for industrial use",
        price: 85.99,
        category: "safety-products",
        imageSrc: "/Shoes+.jpeg",
        inStock: true
      },
      {
        id: 2505,
        name: "Safety Harness",
        description: "Full-body safety harness for fall protection",
        price: 115.99,
        category: "safety-products",
        imageSrc: "/safety.webp",
        inStock: true
      },

      // Fire Protection (2601-2700)
      {
        id: 2601,
        name: "Fire Extinguisher - ABC Type",
        description: "Multipurpose ABC dry chemical fire extinguisher",
        price: 65.99,
        category: "fire-protection",
        imageSrc: "/fp1.webp",
        inStock: true
      },
      {
        id: 2602,
        name: "Fire Alarm System",
        description: "Complete fire alarm system for commercial buildings",
        price: 799.99,
        category: "fire-protection",
        imageSrc: "/fp2.webp",
        inStock: true
      },
      {
        id: 2603,
        name: "Fire Hose Cabinet",
        description: "Wall-mounted fire hose cabinet with glass front",
        price: 245.50,
        category: "fire-protection",
        imageSrc: "/fp3.jpg",
        inStock: true
      },
      {
        id: 2604,
        name: "Sprinkler System Components",
        description: "Essential components for fire sprinkler systems",
        price: 375.75,
        category: "fire-protection",
        imageSrc: "/fp4.jpg",
        inStock: true
      },

      // Building Materials (2701-2800)
      {
        id: 2701,
        name: "Cement - 50kg Bag",
        description: "High-quality Portland cement for construction",
        price: 15.99,
        category: "building-materials",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 2702,
        name: "Steel Reinforcement Bar - 12mm",
        description: "12mm diameter steel reinforcement bar for concrete",
        price: 8.50,
        category: "building-materials",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 2703,
        name: "Plywood Sheet - 18mm",
        description: "18mm thickness plywood sheet for construction",
        price: 45.99,
        category: "building-materials",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },

      // Fasteners (2801-2900)
      {
        id: 2801,
        name: "Hex Bolts - Stainless Steel",
        description: "Stainless steel hex bolts in various sizes",
        price: 0.99,
        category: "fasteners",
        imageSrc: "/Bolts.jpg",
        inStock: true
      },
      {
        id: 2802,
        name: "Hex Nuts - Galvanized",
        description: "Galvanized hex nuts for corrosion resistance",
        price: 0.75,
        category: "fasteners",
        imageSrc: "/Nuts.jpg",
        inStock: true
      },
      {
        id: 2803,
        name: "Flat Washers - Pack of 100",
        description: "100-pack of flat washers for even load distribution",
        price: 12.50,
        category: "fasteners",
        imageSrc: "/Washers.jpg",
        inStock: true
      },
      {
        id: 2804,
        name: "Self-Tapping Screws",
        description: "Self-tapping screws for metal applications",
        price: 0.45,
        category: "fasteners",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },

      // Adhesives and Lubricants (2901-3000)
      {
        id: 2901,
        name: "Industrial Lubricant - 1L",
        description: "1-liter container of high-performance industrial lubricant",
        price: 28.99,
        category: "adhesive-and-lubricants",
        imageSrc: "/Lubricant+.webp",
        inStock: true
      },
      {
        id: 2902,
        name: "Silicone Sealant - Clear",
        description: "Clear silicone sealant for waterproofing",
        price: 18.75,
        category: "adhesive-and-lubricants",
        imageSrc: "/sealants.webp",
        inStock: true
      },
      {
        id: 2903,
        name: "Duct Tape - Heavy Duty",
        description: "Heavy-duty duct tape for industrial applications",
        price: 14.99,
        category: "adhesive-and-lubricants",
        imageSrc: "/tapes+.jpg",
        inStock: true
      },
      {
        id: 2904,
        name: "Epoxy Adhesive",
        description: "Two-part epoxy adhesive for strong bonds",
        price: 22.50,
        category: "adhesive-and-lubricants",
        imageSrc: "/placeholder.jpg",
        inStock: true
      }
    ]

    // Filter products by category if a category is selected
    const filteredProducts = categoryParam
      ? allProducts.filter(product => product.category === categoryParam)
      : allProducts

    setProducts(filteredProducts)
    setLoading(false)
  }, [categoryParam])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (products.length === 0) {
    return <></>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 pt-0">
              <p className="font-bold">AED {product.price.toFixed(2)}</p>
              <span className={`text-sm px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}