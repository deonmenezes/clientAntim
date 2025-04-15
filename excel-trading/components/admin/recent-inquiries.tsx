import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RecentInquiries() {
  const inquiries = [
    {
      id: "INQ-001",
      name: "Khalid Rahman",
      subject: "Product Information Request",
      date: "2023-04-12",
      status: "new",
    },
    {
      id: "INQ-002",
      name: "Aisha Mahmoud",
      subject: "Quote Request",
      date: "2023-04-11",
      status: "in-progress",
    },
    {
      id: "INQ-003",
      name: "Tariq Zayed",
      subject: "Technical Support",
      date: "2023-04-10",
      status: "resolved",
    },
    {
      id: "INQ-004",
      name: "Layla Nasser",
      subject: "Bulk Order Inquiry",
      date: "2023-04-09",
      status: "new",
    },
    {
      id: "INQ-005",
      name: "Hamad Al Falasi",
      subject: "Product Availability",
      date: "2023-04-08",
      status: "in-progress",
    },
  ]

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id}>
              <TableCell className="font-medium">{inquiry.id}</TableCell>
              <TableCell>{inquiry.name}</TableCell>
              <TableCell>{inquiry.subject}</TableCell>
              <TableCell>{inquiry.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    inquiry.status === "new" ? "default" : inquiry.status === "in-progress" ? "outline" : "secondary"
                  }
                >
                  {inquiry.status}
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
