"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProductType } from "@/lib/products"

// Define products with IDs from 3001 to 3820
export default function ProductGrid4() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const categoryParam = searchParams?.get("category") || ""

  useEffect(() => {
    // Products with IDs from 3001 to 3820
    const allProducts: ProductType[] = [
      // Paints and Coatings (3001-3100)
      {
        id: 3001,
        name: "Industrial Enamel Paint - White",
        description: "White industrial enamel paint for metal surfaces",
        price: 45.99,
        category: "paints",
        imageSrc: "/industrial-paints+.jpg",
        inStock: true
      },
      
      // Advanced Cutting Tools (3050-3080)
      {
        id: 3050,
        name: "Industrial Metal Cut-Off Saw",
        description: "Heavy-duty metal cutting saw with precision alignment guides",
        price: 579.99,
        category: "cutting-tools",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },
      {
        id: 3051,
        name: "CNC Plasma Cutter",
        description: "Computer-controlled plasma cutting system for industrial use",
        price: 5499.99,
        category: "cutting-tools",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },
      {
        id: 3052,
        name: "Laser Cutting Machine",
        description: "Precision laser cutting machine for metal fabrication",
        price: 12999.99,
        category: "cutting-tools",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3053,
        name: "Abrasive Cut-Off Wheels - Pack of 10",
        description: "High-quality abrasive cut-off wheels for metal cutting",
        price: 79.99,
        category: "cutting-tools",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3054,
        name: "Diamond Blade Concrete Saw",
        description: "Heavy-duty concrete cutting saw with diamond blade",
        price: 899.99,
        category: "cutting-tools",
        imageSrc: "/Mechanical.jpg",
        inStock: true
      },

      {
        id: 3002,
        name: "Anti-Corrosion Primer - Red Oxide",
        description: "Red oxide anti-corrosion primer for metal protection",
        price: 38.75,
        category: "paints",
        imageSrc: "/industrial-paints+.jpg",
        inStock: true
      },
      {
        id: 3003,
        name: "Marine Paint - Blue",
        description: "Blue marine paint for underwater applications",
        price: 55.99,
        category: "paints",
        imageSrc: "/industrial-paints+.jpg",
        inStock: true
      },
      {
        id: 3004,
        name: "Heat Resistant Paint - Silver",
        description: "Silver heat resistant paint for high-temperature surfaces",
        price: 49.50,
        category: "paints",
        imageSrc: "/industrial-paints+.jpg",
        inStock: true
      },

      // Corrosion and Rust Removers (3101-3200)
      {
        id: 3101,
        name: "Industrial Rust Remover - 1L",
        description: "Powerful rust remover for industrial applications",
        price: 32.99,
        category: "corrosion-and-rust-removers",
        imageSrc: "/Industrial_Brushes+.jpg",
        inStock: true
      },
      {
        id: 3102,
        name: "Wire Brush Set",
        description: "Set of wire brushes for rust removal",
        price: 18.50,
        category: "corrosion-and-rust-removers",
        imageSrc: "/Industrial_Brushes+.jpg",
        inStock: true
      },
      {
        id: 3103,
        name: "Rust Converter - 500ml",
        description: "Chemical rust converter that transforms rust into stable compound",
        price: 27.75,
        category: "corrosion-and-rust-removers",
        imageSrc: "/industrial-rollers+.webp",
        inStock: true
      },
      {
        id: 3104,
        name: "Sandpaper Roll - Fine Grit",
        description: "Fine grit sandpaper roll for surface preparation",
        price: 14.99,
        category: "corrosion-and-rust-removers",
        imageSrc: "/industrial-rollers+.webp",
        inStock: true
      },

      // Welding Products (3201-3300)
      {
        id: 3201,
        name: "Welding Electrodes - E6013",
        description: "E6013 welding electrodes for general purpose welding",
        price: 45.99,
        category: "welding-products",
        imageSrc: "/Electrodes+.jpg",
        inStock: true
      },
      {
        id: 3202,
        name: "Welding Helmet - Auto Darkening",
        description: "Auto-darkening welding helmet for eye protection",
        price: 89.99,
        category: "welding-products",
        imageSrc: "/Welding_Accessories+.webp",
        inStock: true
      },
      {
        id: 3203,
        name: "Welding Gloves - Leather",
        description: "Heat-resistant leather welding gloves",
        price: 32.50,
        category: "welding-products",
        imageSrc: "/Welding_Accessories+.webp",
        inStock: true
      },
      {
        id: 3204,
        name: "Welding Wire - ER70S-6",
        description: "ER70S-6 mild steel welding wire for MIG welding",
        price: 55.75,
        category: "welding-products",
        imageSrc: "/Electrodes+.jpg",
        inStock: true
      },

      // Hand Tools (3301-3400)
      {
        id: 3301,
        name: "Adjustable Wrench Set",
        description: "Set of adjustable wrenches in various sizes",
        price: 65.99,
        category: "hand-tools",
        imageSrc: "/Clamps.jpg",
        inStock: true
      },
      {
        id: 3302,
        name: "Screwdriver Set - Phillips",
        description: "Set of Phillips head screwdrivers",
        price: 28.50,
        category: "hand-tools",
        imageSrc: "/Tester.jpg",
        inStock: true
      },
      {
        id: 3303,
        name: "Hex Key Set - Metric",
        description: "Metric hex key set for precision applications",
        price: 18.99,
        category: "hand-tools",
        imageSrc: "/Clamps.jpg",
        inStock: true
      },
      {
        id: 3304,
        name: "Pipe Wrench - 18 inch",
        description: "18-inch heavy-duty pipe wrench for plumbing",
        price: 42.75,
        category: "hand-tools",
        imageSrc: "/Clamps.jpg",
        inStock: true
      },

      // Power Tools (3401-3500)
      {
        id: 3401,
        name: "Cordless Drill - 18V",
        description: "18V cordless drill with lithium-ion battery",
        price: 129.99,
        category: "power-tools",
        imageSrc: "/Contactor.webp",
        inStock: true
      },
      {
        id: 3402,
        name: "Angle Grinder - 4.5 inch",
        description: "4.5-inch angle grinder for cutting and grinding",
        price: 85.50,
        category: "power-tools",
        imageSrc: "/Clamp_Meter.jpg",
        inStock: true
      },
      {
        id: 3403,
        name: "Circular Saw - 7.25 inch",
        description: "7.25-inch circular saw for woodworking",
        price: 149.99,
        category: "power-tools",
        imageSrc: "/Contactor.webp",
        inStock: true
      },
      {
        id: 3404,
        name: "Electric Hammer Drill",
        description: "Heavy-duty electric hammer drill for concrete",
        price: 175.75,
        category: "power-tools",
        imageSrc: "/Contactor.webp",
        inStock: true
      },

      // Services Industry Products (3501-3600)
      {
        id: 3501,
        name: "Industrial Service Kit 1",
        description: "Complete industrial service kit for maintenance",
        price: 299.99,
        category: "services",
        imageSrc: "/s1.jpg",
        inStock: true
      },
      {
        id: 3502,
        name: "Industrial Service Kit 2",
        description: "Advanced industrial service kit with specialized tools",
        price: 399.99,
        category: "services",
        imageSrc: "/s2.jpg",
        inStock: true
      },
      {
        id: 3503,
        name: "Maintenance Service Package",
        description: "Comprehensive maintenance service package for industrial equipment",
        price: 599.99,
        category: "services",
        imageSrc: "/s3.webp",
        inStock: true
      },
      {
        id: 3504,
        name: "Safety Inspection Kit",
        description: "Complete safety inspection kit for industrial sites",
        price: 249.99,
        category: "services",
        imageSrc: "/s4.png",
        inStock: true
      },
      {
        id: 3505,
        name: "Equipment Calibration Service",
        description: "Professional equipment calibration service package",
        price: 349.99,
        category: "services",
        imageSrc: "/s5.jpg",
        inStock: true
      },

      // Testing Equipment (3701-3800)
      {
        id: 3701,
        name: "Digital Multimeter - Professional",
        description: "Professional-grade digital multimeter for electrical testing",
        price: 85.99,
        category: "testing-equipment",
        imageSrc: "/Multimeter.jpeg",
        inStock: true
      },
      {
        id: 3702,
        name: "Clamp Meter - AC/DC",
        description: "AC/DC clamp meter for current measurement",
        price: 95.75,
        category: "testing-equipment",
        imageSrc: "/Clamp_Meter.jpg",
        inStock: true
      },
      {
        id: 3703,
        name: "Voltage Tester - Non-Contact",
        description: "Non-contact voltage tester for electrical safety",
        price: 25.50,
        category: "testing-equipment",
        imageSrc: "/Tester.jpg",
        inStock: true
      },
      {
        id: 3704,
        name: "Insulation Resistance Tester",
        description: "Insulation resistance tester for electrical insulation testing",
        price: 189.99,
        category: "testing-equipment",
        imageSrc: "/Multimeter.jpeg",
        inStock: true
      },

      // Special Products (3801-3820)
      {
        id: 3801,
        name: "Specialized Industrial Tool Set",
        description: "Comprehensive set of specialized industrial tools",
        price: 499.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3802,
        name: "Advanced Equipment Maintenance Kit",
        description: "Complete kit for advanced equipment maintenance",
        price: 599.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3803,
        name: "Industrial Safety Training Package",
        description: "Comprehensive industrial safety training materials and equipment",
        price: 799.99,
        category: "special-products",
        imageSrc: "/safety.webp",
        inStock: true
      },
      {
        id: 3804,
        name: "Precision Measurement Tool Set",
        description: "Set of precision measurement tools for industrial applications",
        price: 349.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3805,
        name: "Heavy Machinery Maintenance Kit",
        description: "Specialized kit for heavy machinery maintenance",
        price: 699.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3806,
        name: "Industrial Automation Components",
        description: "Essential components for industrial automation systems",
        price: 899.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3807,
        name: "Hydraulic System Testing Kit",
        description: "Complete kit for hydraulic system testing and maintenance",
        price: 549.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3808,
        name: "Pneumatic System Maintenance Kit",
        description: "Specialized kit for pneumatic system maintenance",
        price: 469.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3809,
        name: "Electrical Troubleshooting Kit",
        description: "Professional kit for electrical troubleshooting",
        price: 399.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3810,
        name: "Industrial Equipment Diagnostic Set",
        description: "Advanced diagnostic set for industrial equipment",
        price: 749.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3811,
        name: "Specialized Welding Equipment",
        description: "High-end specialized welding equipment for industrial applications",
        price: 1299.99,
        category: "special-products",
        imageSrc: "/Electrodes+.jpg",
        inStock: true
      },
      {
        id: 3812,
        name: "Industrial HVAC Maintenance Kit",
        description: "Complete kit for industrial HVAC system maintenance",
        price: 599.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3813,
        name: "Energy Efficiency Audit Kit",
        description: "Professional kit for conducting industrial energy efficiency audits",
        price: 849.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3814,
        name: "Industrial Water Treatment Chemicals",
        description: "Specialized chemicals for industrial water treatment systems",
        price: 399.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3815,
        name: "Advanced Material Testing Kit",
        description: "Professional kit for industrial material testing",
        price: 699.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3816,
        name: "Industrial Floor Coatings",
        description: "Specialized coatings for industrial flooring applications",
        price: 499.99,
        category: "special-products",
        imageSrc: "/industrial-paints+.jpg",
        inStock: true
      },
      {
        id: 3817,
        name: "Advanced Pipe Fitting Tool Set",
        description: "Comprehensive set of advanced pipe fitting tools",
        price: 599.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3818,
        name: "Industrial Precision Alignment Kit",
        description: "Professional kit for industrial equipment alignment",
        price: 1499.99,
        category: "special-products",
        imageSrc: "/placeholder.jpg",
        inStock: true
      },
      {
        id: 3819,
        name: "Complete Industrial Safety System",
        description: "Comprehensive industrial safety system for facilities",
        price: 2499.99,
        category: "special-products",
        imageSrc: "/safety.webp",
        inStock: true
      },
      {
        id: 3820,
        name: "Industrial Master Tool Collection",
        description: "Ultimate collection of industrial tools and equipment",
        price: 4999.99,
        category: "special-products",
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