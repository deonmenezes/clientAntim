export interface Inquiry {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  date: string
  status: "new" | "in-progress" | "resolved"
}

// This is a mock function that would normally fetch data from a database
export async function getInquiries(): Promise<Inquiry[]> {
  // In a real application, this would fetch from a database
  return [
    {
      id: "INQ-001",
      name: "Khalid Rahman",
      email: "khalid.r@example.com",
      phone: "+971 50 1234567",
      subject: "Product Information Request",
      message: "I would like to get more information about your power tools range, specifically the industrial drills.",
      date: "2023-04-12",
      status: "new",
    },
    {
      id: "INQ-002",
      name: "Aisha Mahmoud",
      email: "aisha.m@example.com",
      phone: "+971 55 9876543",
      subject: "Quote Request",
      message:
        "We are looking for safety equipment for our construction site. Can you provide a quote for 50 safety helmets and 50 pairs of safety gloves?",
      date: "2023-04-11",
      status: "in-progress",
    },
    {
      id: "INQ-003",
      name: "Tariq Zayed",
      email: "tariq.z@example.com",
      subject: "Technical Support",
      message:
        "I recently purchased a power drill from your company and I'm having issues with the chuck. Can you provide technical support?",
      date: "2023-04-10",
      status: "resolved",
    },
    {
      id: "INQ-004",
      name: "Layla Nasser",
      email: "layla.n@example.com",
      phone: "+971 52 4567890",
      subject: "Bulk Order Inquiry",
      message:
        "Our company is interested in placing a bulk order for various tools. Can someone from your sales team contact me to discuss?",
      date: "2023-04-09",
      status: "new",
    },
    {
      id: "INQ-005",
      name: "Hamad Al Falasi",
      email: "hamad.f@example.com",
      phone: "+971 54 3216547",
      subject: "Product Availability",
      message: "I'm looking for the Industrial Wrench Set that is shown on your website. Is it currently in stock?",
      date: "2023-04-08",
      status: "in-progress",
    },
  ]
}
