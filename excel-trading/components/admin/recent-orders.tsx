import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RecentOrders() {
  const orders = [
    {
      id: "ORD-001",
      customer: "Ahmed Al Mansouri",
      date: "2023-04-12",
      amount: "AED 1,250.00",
      status: "completed",
    },
    {
      id: "ORD-002",
      customer: "Sara Khan",
      date: "2023-04-11",
      amount: "AED 890.50",
      status: "processing",
    },
    {
      id: "ORD-003",
      customer: "Mohammed Ali",
      date: "2023-04-10",
      amount: "AED 2,340.00",
      status: "completed",
    },
    {
      id: "ORD-004",
      customer: "Fatima Hassan",
      date: "2023-04-09",
      amount: "AED 450.75",
      status: "pending",
    },
    {
      id: "ORD-005",
      customer: "Omar Saeed",
      date: "2023-04-08",
      amount: "AED 1,780.25",
      status: "completed",
    },
  ]

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "completed" ? "default" : order.status === "processing" ? "outline" : "secondary"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
