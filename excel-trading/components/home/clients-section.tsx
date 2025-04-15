import Image from "next/image"

const clients = [
  { id: 1, name: "Client 1", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Client 2", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Client 3", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Client 4", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Client 5", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Client 6", logo: "/placeholder.svg?height=100&width=200" },
]

export default function ClientsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work with leading companies across various industries in the UAE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={150}
                height={75}
                className="object-contain h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
