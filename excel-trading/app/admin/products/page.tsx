import AdminProductTable from "@/components/admin/admin-product-table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manage Products - Admin",
    description: "Admin panel page for managing products.",
};

export default function AdminProductsPage() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
            <AdminProductTable />
            {/* Add button to navigate to a 'Create Product' page if needed */}
            {/* <Button asChild className="mt-4">
              <Link href="/admin/products/new">Add New Product</Link>
            </Button> */}
        </div>
    );
}
