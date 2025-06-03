"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, Code, Zap, Rocket, Star, Terminal, Cpu, Database } from "lucide-react"
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
      }, 3000) // 3 seconds delay

      return () => clearTimeout(timer)
    }
  }, [isPreloaderComplete, showAfterDelay])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gradient-to-br from-arno-dark-800/95 via-arno-dark-700/95 to-arno-dark-800/95 backdrop-blur-xl border border-arno-blue-400/20 p-0 max-w-xs sm:max-w-md lg:max-w-lg mx-auto overflow-hidden shadow-2xl shadow-arno-blue-400/10">
        {/* Hidden title for accessibility */}
        <DialogTitle className="sr-only">Welcome to ArnoCodes</DialogTitle>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Floating Tech Elements */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-1 h-1 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-400 rounded-full animate-ping" />
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping delay-500" />

          {/* Floating Code Symbols - Responsive sizes */}
          <div className="absolute top-6 left-6 sm:top-12 sm:left-12 text-arno-blue-400/20 animate-bounce">
            <Code size={12} className="sm:w-4 sm:h-4" />
          </div>
          <div className="absolute top-8 right-8 sm:top-16 sm:right-16 text-green-400/20 animate-bounce delay-200">
            <Terminal size={10} className="sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="absolute bottom-6 left-8 sm:bottom-12 sm:left-16 text-purple-400/20 animate-bounce delay-400">
            <Database size={8} className="sm:w-3 sm:h-3" />
          </div>
          <div className="absolute bottom-8 right-6 text-cyan-400/20 animate-bounce delay-600">
            <Cpu size={10} className="sm:w-3.5 sm:h-3.5" />
          </div>

          {/* Matrix-like falling code effect */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-arno-blue-400/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse delay-1000" />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 text-gray-400 hover:text-white transition-all duration-300 bg-arno-dark-700/50 hover:bg-arno-dark-600/70 rounded-full p-1 sm:p-1.5 backdrop-blur-sm border border-arno-dark-500/50 hover:border-arno-blue-400/50 hover:scale-110"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative p-3 sm:p-6 lg:p-8">
          {/* Header with Logo and Status */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center mb-2 sm:mb-3 flex-wrap">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold font-mono">
                <span className="text-arno-blue-400">&lt;</span>ArnoCodes
                <span className="text-arno-blue-400">&gt;</span>
              </h2>
              <div className="ml-2 sm:ml-3 flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-400 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium border border-yellow-400/30">
                <Zap size={8} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3" />
                BETA
              </div>
            </div>

            {/* Development Status */}
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="bg-gradient-to-r from-arno-blue-400/20 via-purple-400/20 to-cyan-400/20 backdrop-blur-sm border border-arno-blue-400/30 rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-lg shadow-arno-blue-400/10">
                <div className="flex items-center text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse mr-1 sm:mr-2" />
                  <span className="text-gray-300 font-mono">Under Active Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Illustration - Responsive */}
          <div className="mb-4 sm:mb-6 relative flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 relative">
                {/* Holographic effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" />

                <svg
                  viewBox="0 0 200 150"
                  className="w-full h-full text-arno-blue-400 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Rocket with tech details */}
                  <path d="M100,75 L100,45 L85,60 L115,60 Z" className="fill-current opacity-80" />
                  <circle cx="100" cy="85" r="8" className="fill-current opacity-60" />
                  <path d="M92,93 L92,105 M108,93 L108,105" strokeWidth="2" />

                  {/* Circuit patterns */}
                  <path d="M70,40 L70,35 L75,35 M125,40 L125,35 L130,35" strokeWidth="1" className="text-green-400" />
                  <circle cx="75" cy="35" r="1" className="fill-current text-green-400" />
                  <circle cx="130" cy="35" r="1" className="fill-current text-green-400" />

                  {/* Code Brackets with circuit lines */}
                  <path d="M60,50 L50,60 L60,70" strokeWidth="2" />
                  <path d="M140,50 L150,60 L140,70" strokeWidth="2" />
                  <path d="M45,60 L40,60 M155,60 L160,60" strokeWidth="1" className="text-cyan-400" />

                  {/* Binary Matrix */}
                  <text x="70" y="120" fontSize="8" className="fill-current text-green-400 font-mono">
                    01
                  </text>
                  <text x="85" y="125" fontSize="6" className="fill-current text-arno-blue-400 font-mono">
                    10
                  </text>
                  <text x="115" y="120" fontSize="8" className="fill-current text-purple-400 font-mono">
                    11
                  </text>
                  <text x="130" y="125" fontSize="6" className="fill-current text-cyan-400 font-mono">
                    00
                  </text>
                </svg>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-green-400 animate-bounce">
                <Rocket size={10} className="sm:w-4 sm:h-4" />
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 text-purple-400 animate-pulse">
                <Star size={8} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="absolute top-1/2 -left-2 sm:-left-3 text-cyan-400 animate-bounce delay-300">
                <Terminal size={8} className="sm:w-3 sm:h-3" />
              </div>
            </div>
          </div>

          {/* Main Message - Responsive text */}
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 font-mono">
              🚀 Building the Future of <span className="text-arno-blue-400 animate-pulse">Code Learning</span>
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-1 sm:mb-2 leading-relaxed px-2">
              We're crafting cutting-edge features to revolutionize your DSA journey.
              <br className="hidden sm:block" />
              <span className="text-arno-blue-400 font-medium"> AI-powered tools</span>,
              <span className="text-green-400 font-medium"> interactive visualizations</span>, and
              <span className="text-purple-400 font-medium"> personalized learning paths</span> are coming soon!
            </p>
            <p className="text-xs sm:text-sm text-gray-400 italic font-mono">
              Join our <span className="text-green-400 font-semibold">WhatsApp Community</span> for exclusive updates &
              live coding sessions
            </p>
          </div>

          {/* Call to Action - Responsive */}
          <div className="bg-gradient-to-r from-arno-dark-700/50 via-arno-dark-600/50 to-arno-dark-700/50 backdrop-blur-sm rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 border border-arno-dark-500/50 shadow-inner">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2 font-mono">
                <span className="text-arno-blue-400 font-medium">Stay Connected</span> • Get Early Access • Shape the
                Platform
              </p>
              <div className="flex items-center justify-center text-xs text-gray-400 space-x-2 sm:space-x-4">
                <div className="flex items-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />
                  <span className="font-mono">Live Updates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-arno-blue-400 rounded-full mr-1 animate-pulse delay-300" />
                  <span className="font-mono">Beta Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links - Responsive */}
          <div className="flex justify-center space-x-3 sm:space-x-6">
            <a
              href="https://chat.whatsapp.com/JUr6pLKYcKi9GNyubGNd8v"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 rounded-full transition-all duration-300 hover:scale-110 border border-green-500/30 hover:border-green-400/50 shadow-lg shadow-green-500/10"
            >
              <FaWhatsapp size={14} className="sm:w-5 sm:h-5 text-green-400 group-hover:text-green-300" />
              <span className="sr-only">WhatsApp Community</span>
            </a>
            <a
              href="https://www.linkedin.com/company/arnocodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 rounded-full transition-all duration-300 hover:scale-110 border border-blue-500/30 hover:border-blue-400/50 shadow-lg shadow-blue-500/10"
            >
              <FaLinkedin size={14} className="sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/arnocodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 hover:from-pink-500/30 hover:to-pink-600/30 rounded-full transition-all duration-300 hover:scale-110 border border-pink-500/30 hover:border-pink-400/50 shadow-lg shadow-pink-500/10"
            >
              <FaInstagram size={14} className="sm:w-5 sm:h-5 text-pink-400 group-hover:text-pink-300" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          {/* Footer Note - Responsive */}
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-xs text-gray-500 font-mono px-2">
              Follow us for <span className="text-arno-blue-400">real-time updates</span> and be the first to experience
              new features
            </p>
          </div>
        </div>

        {/* Tech border effect */}
        <div className="absolute inset-0 rounded-lg border border-arno-blue-400/20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-8 h-px bg-gradient-to-r from-transparent via-arno-blue-400 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          <div className="absolute left-0 top-1/4 h-8 w-px bg-gradient-to-b from-transparent via-green-400 to-transparent" />
          <div className="absolute right-0 bottom-1/4 h-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
