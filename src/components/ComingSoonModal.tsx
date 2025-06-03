"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Rocket, Sparkles, Code2, Zap, Terminal, Cpu, Database, X } from "lucide-react"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  feature: string
}

export function ComingSoonModal({ isOpen, onClose, feature }: ComingSoonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-arno-dark-800/95 via-arno-dark-700/95 to-arno-dark-800/95 backdrop-blur-xl border border-arno-blue-400/20 max-w-xs sm:max-w-md mx-auto shadow-2xl shadow-arno-blue-400/10">
        {/* Hidden title for accessibility */}
        <DialogTitle className="sr-only">Coming Soon: {feature}</DialogTitle>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Floating Tech Elements */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-1 h-1 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-400 rounded-full animate-ping" />
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse delay-300" />

          {/* Circuit patterns */}
          <div className="absolute top-6 left-6 sm:top-12 sm:left-12 text-arno-blue-400/20 animate-bounce">
            <Terminal size={10} className="sm:w-4 sm:h-4" />
          </div>
          <div className="absolute top-8 right-8 sm:top-16 sm:right-16 text-green-400/20 animate-bounce delay-200">
            <Database size={8} className="sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="absolute bottom-6 left-8 sm:bottom-12 sm:left-16 text-purple-400/20 animate-bounce delay-400">
            <Cpu size={8} className="sm:w-3 sm:h-3" />
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 text-gray-400 hover:text-white transition-all duration-300 bg-arno-dark-700/50 hover:bg-arno-dark-600/70 rounded-full p-1 sm:p-1.5 backdrop-blur-sm border border-arno-dark-500/50 hover:border-arno-blue-400/50 hover:scale-110"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 relative">
          {/* Animated Icon with holographic effect */}
          <div className="relative mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-arno-blue-400/20 via-purple-400/20 to-cyan-400/20 flex items-center justify-center backdrop-blur-sm border border-arno-blue-400/30 shadow-lg shadow-arno-blue-400/20">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-arno-blue-400 animate-bounce" />
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            {/* Orbital rings */}
            <div
              className="absolute inset-0 rounded-full border border-arno-blue-400/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="absolute inset-2 rounded-full border border-purple-400/20 animate-spin"
              style={{ animationDuration: "6s", animationDirection: "reverse" }}
            />
          </div>

          {/* Content */}
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-mono">Coming Soon!</h2>
          <h3 className="text-base sm:text-lg font-semibold text-arno-blue-400 mb-3 sm:mb-4 animate-pulse">
            {feature}
          </h3>

          <div className="bg-gradient-to-r from-arno-dark-700/50 via-arno-dark-600/50 to-arno-dark-700/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-arno-dark-500/50 w-full">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-arno-blue-400 mr-2" />
              <span className="text-white font-medium font-mono text-sm sm:text-base">We're working hard!</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-mono">
              Our team is developing amazing features to enhance your coding journey. Stay tuned for updates and be the
              first to experience the future of learning!
            </p>
          </div>

          {/* Features Preview - Responsive grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 w-full">
            <div className="bg-gradient-to-br from-arno-dark-700/50 to-arno-dark-600/50 rounded-lg p-2 sm:p-3 text-center border border-yellow-400/20">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mx-auto mb-1" />
              <span className="text-xs text-gray-300 font-mono">AI Powered</span>
            </div>
            <div className="bg-gradient-to-br from-arno-dark-700/50 to-arno-dark-600/50 rounded-lg p-2 sm:p-3 text-center border border-green-400/20">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1" />
              <span className="text-xs text-gray-300 font-mono">Interactive</span>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-arno-blue-400 to-arno-blue-500 hover:from-arno-blue-500 hover:to-arno-blue-600 text-white font-mono transition-all duration-300 hover:scale-105 shadow-lg shadow-arno-blue-400/20"
          >
            Got it! Keep me updated
          </Button>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-3 sm:mt-4 font-mono">
            Follow us on social media for the latest updates
          </p>
        </div>

        {/* Tech border effect */}
        <div className="absolute inset-0 rounded-lg border border-arno-blue-400/20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-6 h-px bg-gradient-to-r from-transparent via-arno-blue-400 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-6 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          <div className="absolute left-0 top-1/4 h-6 w-px bg-gradient-to-b from-transparent via-green-400 to-transparent" />
          <div className="absolute right-0 bottom-1/4 h-6 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
