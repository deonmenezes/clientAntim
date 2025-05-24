"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { ProductType } from "@/lib/products"
import { getApiUrl } from "@/lib/api-config"

export default function AdminPage() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageSrc: "",
    inStock: true
  })
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Check authentication on page load
  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    const user = localStorage.getItem("adminUser")
    
    if (!token) {
      router.push("/admin/login")
    } else {
      // Try to parse the user data
      try {
        const userData = user ? JSON.parse(user) : null
        
        // Check if the user has admin role
        if (userData && userData.role === "admin") {
          setIsAuthenticated(true)
          fetchProducts()
        } else {
          // Not an admin, redirect to login
          localStorage.removeItem("adminToken")
          localStorage.removeItem("adminUser")
          router.push("/admin/login")
        }
      } catch (error) {
        console.error("Error parsing user data:", error)
        localStorage.removeItem("adminToken")
        localStorage.removeItem("adminUser")
        router.push("/admin/login")
      }
    }
  }, [router])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(getApiUrl("/api/products"))
      const data = await response.json()
      
      if (data.success) {
        setProducts(data.products)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch products",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching products:", error)
      toast({
        title: "Error",
        description: "An error occurred while fetching products",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "price" ? value.replace(/[^0-9.]/g, "") : value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    })
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      inStock: checked
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.name || !formData.description || !formData.price || !formData.category || !formData.imageSrc) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      })
      return
    }

    try {
      setIsUploading(true)
      const response = await fetch(getApiUrl("/api/products"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success",
          description: "Product added successfully",
        })
        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          imageSrc: "",
          inStock: true
        })
        // Refresh product list
        fetchProducts()
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to add product",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error adding product:", error)
      toast({
        title: "Error",
        description: "An error occurred while adding the product",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return
    }

    try {
      const response = await fetch(getApiUrl(`/api/products?id=${id}`), {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        }
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success",
          description: "Product deleted successfully",
        })
        // Refresh product list
        fetchProducts()
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to delete product",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting product:", error)
      toast({
        title: "Error",
        description: "An error occurred while deleting the product",
        variant: "destructive",
      })
    }
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>
  }

  const categories = [
    { value: "hand-tools", label: "Hand Tools" },
    { value: "power-tools", label: "Power Tools" },
    { value: "cutting-tools", label: "Cutting Tools" },
    { value: "welding-products", label: "Welding Products" },
    { value: "safety-products", label: "Safety Products" },
    { value: "building-materials", label: "Building Materials" },
    { value: "adhesive-and-lubricants", label: "Adhesive and Lubricants" },
    { value: "fasteners", label: "Fasteners" },
    { value: "paints", label: "Paints" },
    { value: "hardwares-and-sanitarys", label: "Hardware and Sanitary" },
    { value: "corrosion-and-rust-removers", label: "Corrosion and Rust Removers" },
    { value: "electrical", label: "Electrical Products" },
    { value: "mechanical", label: "Mechanical Products" },
    { value: "pipe-fittings", label: "Pipe Fittings" },
    { value: "testing-equipment", label: "Testing Equipment" },
    { value: "machinery", label: "Machinery" },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Add Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>
                Fill in the details to add a new product to the catalog
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleAddProduct}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price (AED)</Label>
                  <Input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageSrc">Image Path</Label>
                  <Input
                    id="imageSrc"
                    name="imageSrc"
                    value={formData.imageSrc}
                    onChange={handleInputChange}
                    placeholder="/products/image-file.jpg"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Enter the path to the product image (e.g., /products/image.jpg)
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="inStock"
                    checked={formData.inStock}
                    onCheckedChange={handleSwitchChange}
                  />
                  <Label htmlFor="inStock">In Stock</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isUploading}>
                  {isUploading ? "Adding Product..." : "Add Product"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Product List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product List</CardTitle>
              <CardDescription>
                Manage your existing products
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center py-4">Loading products...</p>
              ) : products.length === 0 ? (
                <p className="text-center py-4">No products found</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div className="relative w-10 h-10">
                              <Image
                                src={product.imageSrc}
                                alt={product.name}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>AED {product.price.toFixed(2)}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}