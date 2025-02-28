"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa"
import { useLoading } from "./LoadingContext"

interface WelcomeModalProps {
  showAfterDelay: boolean
}

export function WelcomeModal({ showAfterDelay }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { isPreloaderComplete } = useLoading()

  useEffect(() => {
    if (isPreloaderComplete && showAfterDelay) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 6000) // 6 seconds delay

      return () => clearTimeout(timer)
    }
  }, [isPreloaderComplete, showAfterDelay])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-arno-dark-800 border-arno-dark-600 p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col items-center">
          {/* Company Logo */}
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="text-arno-blue-400">&lt;</span>ArnoCodes
              <span className="text-arno-blue-400">&gt;</span>
            </h2>
          </div>

          {/* Illustration */}
          <div className="mb-4 sm:mb-6 relative">
            <svg
              viewBox="0 0 400 300"
              className="w-36 h-36 sm:w-48 sm:h-48 text-arno-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M200,150 C200,80 280,80 280,150" />
              <circle cx="240" cy="100" r="20" />
              <path d="M220,180 C220,140 260,140 260,180" />
              <line x1="120" y1="200" x2="280" y2="200" />
              <line x1="140" y1="220" x2="260" y2="220" />
              <line x1="160" y1="240" x2="240" y2="240" />
            </svg>
            {/* Stars/sparkles */}
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-arno-blue-400 rounded-full animate-pulse" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-arno-blue-400 rounded-full animate-pulse delay-100" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-arno-blue-400 rounded-full animate-pulse delay-200" />
          </div>

          {/* Text content */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-white mb-2">
              Topic-2<span className="text-red-500 font-bold"> is Live</span> in Courses Section,
            </p>
            <p className="text-base sm:text-lg text-white">Intern opportunities at ArnoCodes is available!!!!</p>
          </div>

          {/* Social media links */}
          <div className="flex space-x-6">
            <a
              href="https://chat.whatsapp.com/JUr6pLKYcKi9GNyubGNd8v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/company/arnocodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/arnocodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

