export interface Product {
  id: number
  name: string
  slug: string
  description: string
  category: string
  sku: string
  inStock: boolean
  features: string[]
  specifications: { name: string; value: string }[]
  applications: string
  documents: { name: string; url: string; size: string }[]
  images: string[]
}

// This is a mock function that would normally fetch data from a database
export async function getProducts(): Promise<Product[]> {
  // In a real application, this would fetch from a database
  return [
    {
      id: 1,
      name: "Heavy Duty Power Drill",
      slug: "heavy-duty-power-drill",
      description:
        "Professional-grade power drill for industrial applications. Features a high-torque motor and durable construction for demanding tasks.",
      category: "Power Tools",
      sku: "HD-DRILL-001",
      inStock: true,
      features: [
        "1200W high-torque motor",
        "Variable speed control",
        "Ergonomic grip for reduced fatigue",
        "Metal gear housing for durability",
        "Includes carrying case and accessories",
      ],
      specifications: [
        { name: "Power", value: "1200W" },
        { name: "Speed", value: "0-3000 RPM" },
        { name: "Chuck Size", value: "13mm" },
        { name: "Weight", value: "2.5kg" },
        { name: "Cord Length", value: "3m" },
      ],
      applications:
        "Ideal for drilling in metal, wood, and concrete. Suitable for construction sites, workshops, and industrial facilities.",
      documents: [
        { name: "User Manual", url: "#", size: "2.4 MB" },
        { name: "Technical Specifications", url: "#", size: "1.2 MB" },
        { name: "Warranty Information", url: "#", size: "0.8 MB" },
      ],
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    // Additional products would be listed here
  ]
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find((product) => product.slug === slug) || null
}

export async function getRelatedProducts(category: string, excludeId: number): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((product) => product.category === category && product.id !== excludeId).slice(0, 4)
}
