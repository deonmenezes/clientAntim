import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function InventoryStatus() {
  const inventory = [
    {
      id: "PRD-001",
      name: "Heavy Duty Power Drill",
      sku: "HD-DRILL-001",
      stock: 24,
      stockLevel: 60,
      status: "in-stock",
    },
    {
      id: "PRD-002",
      name: "Professional Safety Helmet",
      sku: "SAFETY-HLM-002",
      stock: 45,
      stockLevel: 75,
      status: "in-stock",
    },
    {
      id: "PRD-003",
      name: "Precision Measuring Tape",
      sku: "MEAS-TAPE-003",
      stock: 8,
      stockLevel: 20,
      status: "low-stock",
    },
    {
      id: "PRD-004",
      name: "Industrial Wrench Set",
      sku: "WRENCH-SET-004",
      stock: 0,
      stockLevel: 0,
      status: "out-of-stock",
    },
    {
      id: "PRD-005",
      name: "Cordless Impact Driver",
      sku: "IMPACT-DRV-005",
      stock: 12,
      stockLevel: 40,
      status: "in-stock",
    },
  ]

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs">
                    <span>{item.stock} units</span>
                    <span>{item.stockLevel}%</span>
                  </div>
                  <Progress value={item.stockLevel} className="h-2" />
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "in-stock" ? "default" : item.status === "low-stock" ? "outline" : "destructive"
                  }
                >
                  {item.status.replace("-", " ")}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
