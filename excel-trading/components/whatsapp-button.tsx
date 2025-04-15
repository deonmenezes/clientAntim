"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const phoneNumber = "971503838194"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94L4 21l5.23-1.36A8 8 0 0 0 12.05 20a7.95 7.95 0 0 0 5.55-13.68ZM12.05 18.5a6.61 6.61 0 0 1-3.38-.92l-.24-.15-2.54.67.68-2.46-.16-.25a6.6 6.6 0 0 1-1-3.45 6.53 6.53 0 0 1 6.64-6.41c1.76 0 3.41.68 4.65 1.93a6.55 6.55 0 0 1 1.95 4.65 6.52 6.52 0 0 1-6.6 6.39Zm3.57-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.5 5.5 0 0 1-1.6-.99 6.03 6.03 0 0 1-1.11-1.38c-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.24-.02-.33-.05-.1-.45-1.08-.62-1.47-.16-.39-.33-.33-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66 0 .98.72 1.92.82 2.05.1.13 1.4 2.13 3.39 2.99.47.2.84.33 1.13.42.48.15.91.13 1.25.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.4-.23Z" />
          </svg>
        </Button>
      </div>

      <div
        className={`fixed bottom-6 right-6 z-50 w-80 bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Chat with Us</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-white hover:bg-green-600 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            Hello! How can we help you today? Send us a message and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
              required
            />

            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              Start Chat
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
