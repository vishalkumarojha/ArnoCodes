"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { WhatWeDo } from "@/components/wedo"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { WelcomeModal } from "@/components/WelcomeModal"
import { PreLoader } from "@/components/PreLoader"
import { LoadingProvider, useLoading } from "@/components/LoadingContext"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { Code, Terminal, Cpu, Database, Zap, Rocket } from "lucide-react"

function HomePageContent() {
  const { currentUser, loading } = useAuth()
  const { isPreloaderComplete } = useLoading()
  const navigate = useNavigate()

  useEffect(() => {
    // After preloader completes, check if user is authenticated
    if (isPreloaderComplete && !loading) {
      if (!currentUser) {
        // Redirect to auth page if not authenticated
        navigate("/auth")
      }
    }
  }, [isPreloaderComplete, currentUser, loading, navigate])

  // Don't render main content if user is not authenticated
  if (!currentUser && isPreloaderComplete) {
    return null
  }

  return (
    <main className="text-white relative overflow-hidden">
      <WelcomeModal showAfterDelay={true} />

      {/* Hero Section with Tech Elements */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2942]/20 via-[#111827] to-[#0f172a]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          {/* Circuit board elements */}
          <div className="absolute inset-0 circuit-pattern opacity-5"></div>

          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-10 sm:top-32 sm:left-20 animate-float">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-arno-blue-400/30" />
          </div>
          <div className="absolute top-40 right-20 sm:top-60 sm:right-32 animate-float-delayed">
            <Database className="w-8 h-8 sm:w-10 sm:h-10 text-green-400/20" />
          </div>
          <div className="absolute bottom-40 left-20 sm:bottom-60 sm:left-32 animate-float">
            <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400/25" />
          </div>
          <div className="absolute bottom-20 right-10 sm:bottom-32 sm:right-20 animate-float-delayed">
            <Terminal className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-400/30" />
          </div>

          {/* Matrix-like lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-arno-blue-400/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse delay-1000" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-2000" />

          {/* Digital nodes */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-arno-blue-400/30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-green-400/30 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-1 h-1 rounded-full bg-purple-400/30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Tech-style header */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-arno-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-arno-blue-400/30 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm text-gray-300 font-mono">NEXT-GEN CODING PLATFORM</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight font-mono">
            <span className="text-arno-blue-400 animate-pulse">&lt;</span>
            <span className="bg-gradient-to-r from-white via-arno-blue-400 to-white bg-clip-text text-transparent">
              ArnoCodes
            </span>
            <span className="text-arno-blue-400 animate-pulse">&gt;</span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-4xl mx-auto text-gray-300 font-mono leading-relaxed">
              <span className="text-green-400">$</span> Empowering developers to master{" "}
              <span className="text-arno-blue-400 font-semibold">Data Structures</span>,{" "}
              <span className="text-purple-400 font-semibold">Algorithms</span>, and advance their{" "}
              <span className="text-cyan-400 font-semibold">coding careers</span>
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-mono">
              <span className="text-green-400">// </span>Expert-led learning • Interactive practice • Real-world
              projects
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-arno-blue-400 to-arno-blue-500 hover:from-arno-blue-500 hover:to-arno-blue-600 text-white font-mono text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto transition-all duration-300 hover:scale-105 shadow-lg shadow-arno-blue-400/20 w-full sm:w-auto"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link to="/practice">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-arno-blue-400/50 text-arno-blue-400 hover:bg-arno-blue-400/10 hover:border-arno-blue-400 font-mono text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Try IDE
              </Button>
            </Link>
          </div>

          {/* Tech Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Learners", value: "10K+", icon: Code },
              { label: "Problems Solved", value: "50K+", icon: Database },
              { label: "Success Rate", value: "95%", icon: Zap },
              { label: "Companies", value: "100+", icon: Rocket },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-arno-dark-700/50 to-arno-dark-600/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-arno-dark-500/50 hover:border-arno-blue-400/30 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-arno-blue-400 mx-auto mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-arno-dark-900 to-transparent" />
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQSection />

      {/* Still Have Questions Section */}
      <ContactSection />
    </main>
  )
}

export default function HomePage() {
  return (
    <LoadingProvider>
      <PreLoader />
      <HomePageContent />
    </LoadingProvider>
  )
}
