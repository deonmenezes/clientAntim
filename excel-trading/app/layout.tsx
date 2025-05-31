import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Excel Trading LLC (OPC) - Industrial Tools & Equipment Supplier in UAE",
  description:
    "Smooth Technical Trading and Service LLC is a premier industrial trading company based in Abu Dhabi, UAE. We specialize in sourcing, supplying, and distributing high-quality mechanical and electrical products to diverse sectors including oil & gas, manufacturing, construction, and logistics. Our mission is to be a trusted partner offering reliable, efficient, and cost-effective solutions tailored to our client's industrial needs. We strive for excellence in customer satisfaction, product quality, and service standards.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}