"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/lib/products";
import { toast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";
import { getApiUrl } from "@/lib/api-config";

export default function AdminProductTable() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch products using the configured API URL with port 5000
        const response = await fetch(getApiUrl("/api/products"));
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (e: any) {
        console.error("Failed to fetch products:", e);
        setError("Failed to load products. Please try again later.");
        toast({
          title: "Error",
          description: "Could not fetch products from the backend.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId: number | string) => {
    // Confirmation dialog
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      // Use the configured API URL for delete operations
      const response = await fetch(getApiUrl(`/api/products/${productId}`), {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove product from state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );

      toast({
        title: "Success",
        description: "Product deleted successfully.",
      });
    } catch (e: any) {
      console.error("Failed to delete product:", e);
      setError(`Failed to delete product ${productId}. Please try again.`);
      toast({
        title: "Error",
        description: "Could not delete product.",
        variant: "destructive",
      });
    }
  };

  // Add sorting logic here if needed
  // const sortedProducts = useMemo(() => { ... }, [products, sortConfig]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead> {/* Add sorting button here */}
            <TableHead>Category</TableHead> {/* Add sorting button here */}
            <TableHead>Price</TableHead> {/* Add sorting button here */}
            <TableHead>In Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Use sortedProducts if implementing sorting */}
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {/* Consider adding placeholder if imageSrc is missing */}
                <img
                  src={product.imageSrc || '/placeholder.jpg'} // Use placeholder if no image
                  alt={product.name}
                  width={50}
                  height={50}
                  className="object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>AED {product.price.toFixed(2)}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'Yes' : 'No'}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  aria-label={`Delete ${product.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                {/* Add Edit button here if needed */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
