import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductGallery from "@/components/products/product-gallery"
import RelatedProducts from "@/components/products/related-products"
import { getProductBySlug, getRelatedProducts } from "@/lib/products"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found - Excel Trading LLC",
    }
  }

  return {
    title: `${product.name} - Excel Trading LLC`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category, product.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} />

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-green-600 font-semibold mt-2">{product.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>

          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specifications" className="mt-12">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="p-6 border rounded-md mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{spec.name}:</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="applications" className="p-6 border rounded-md mt-2">
          <div className="prose max-w-none">
            <p>{product.applications}</p>
          </div>
        </TabsContent>
        <TabsContent value="documents" className="p-6 border rounded-md mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.documents.map((doc, index) => (
              <a key={index} href={doc.url} className="flex items-center p-3 border rounded-md hover:bg-gray-50">
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.size}</p>
                </div>
              </a>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
