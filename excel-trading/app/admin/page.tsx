import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminStats from "@/components/admin/admin-stats"
import RecentOrders from "@/components/admin/recent-orders"
import RecentInquiries from "@/components/admin/recent-inquiries"
import InventoryStatus from "@/components/admin/inventory-status"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your store's performance and recent activities</p>
      </div>

      <AdminStats />

      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="inquiries">Recent Inquiries</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Status</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="space-y-4">
          <RecentOrders />
        </TabsContent>
        <TabsContent value="inquiries" className="space-y-4">
          <RecentInquiries />
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4">
          <InventoryStatus />
        </TabsContent>
      </Tabs>
    </div>
  )
}
