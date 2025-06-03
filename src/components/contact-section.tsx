"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ClipboardList, X } from "lucide-react"

export function ContactSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-16 relative overflow-hidden bg-arno-dark-900">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Circuit-like lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-arno-blue-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-arno-blue-400/20 to-transparent"></div>

        {/* Tech nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-arno-blue-400/30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-arno-blue-400/30"></div>
        <div className="absolute top-2/3 left-3/4 w-1 h-1 rounded-full bg-arno-blue-400/30"></div>

        {/* Horizontal connections */}
        <div className="absolute top-1/4 left-1/4 w-1/4 h-px bg-gradient-to-r from-arno-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/5 h-px bg-gradient-to-l from-arno-blue-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Still have questions?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-arno-blue-400 hover:bg-arno-blue-500 text-white font-medium px-8 py-2 rounded-md"
        >
          Get in Touch
        </Button>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#111827] border-none max-w-md mx-auto">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-arno-blue-400/20 flex items-center justify-center mb-6">
              <ClipboardList className="h-8 w-8 text-arno-blue-400" />
            </div>

            <h3 className="text-xl font-medium text-white mb-4">Drop your question/query at</h3>

            <a href="mailto:info.arnocodes26@gmail.com" className="text-arno-blue-400 hover:text-arno-blue-300 mb-4">
              info.arnocodes26@gmail.com
            </a>

            <p className="text-gray-400">We will get back to you soon.</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
