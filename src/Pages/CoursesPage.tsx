"use client"

import { CourseSidebar } from "@/components/course/sidebar"
import { A2ZSheet } from "@/components/sheets/A2ZSheet"
import { sheets } from "@/lib/course-data"
import { Code, Database, Cpu, Terminal, Zap, CircuitBoardIcon as Circuit } from "lucide-react"

export default function CoursesPage() {
  const techIcons = [
    { icon: Code, delay: "0s" },
    { icon: Database, delay: "0.5s" },
    { icon: Cpu, delay: "1s" },
    { icon: Terminal, delay: "1.5s" },
    { icon: Zap, delay: "2s" },
    { icon: Circuit, delay: "2.5s" },
  ]

  return (
    <div className="min-h-screen bg-arno-dark-900 relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="absolute animate-float opacity-10"
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + index * 10}%`,
                animationDelay: item.delay,
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12 text-arno-blue-400" />
            </div>
          )
        })}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>

      <div className="flex relative z-10">
        {/* Enhanced Sidebar */}
        <div className="hidden md:block w-64 lg:w-80">
          <div className="h-screen bg-arno-dark-800/50 backdrop-blur-lg border-r border-arno-blue-400/20 relative">
            {/* Sidebar Glow Effect */}
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-arno-blue-400/50 to-transparent"></div>

            {/* Terminal Header */}
            <div className="p-4 border-b border-arno-blue-400/20 bg-arno-dark-900/50">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-arno-blue-400 font-mono text-sm">
                <span className="text-green-400">user@arnocodes:~$</span> ls courses/
              </div>
            </div>

            <CourseSidebar sheets={sheets} />

            {/* Holographic Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-arno-blue-400/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Content Header */}
          <div className="p-4 md:p-8 border-b border-arno-blue-400/20 bg-arno-dark-800/30 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-2 h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
              <h1 className="text-2xl md:text-4xl font-bold text-white font-mono">
                <span className="text-arno-blue-400">&lt;</span>
                DSA_MASTERY
                <span className="text-arno-blue-400">/&gt;</span>
              </h1>
            </div>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              // Initializing advanced data structures and algorithms training...
            </p>
          </div>

          {/* Course Content */}
          <div className="p-4 md:p-8">
            <div className="bg-arno-dark-800/50 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 relative overflow-hidden">
              {/* Content Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <A2ZSheet />
              </div>

              {/* Bottom Tech Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
            </div>
          </div>

          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden fixed bottom-4 right-4 z-50">
            <button className="w-14 h-14 bg-arno-blue-400 rounded-full shadow-lg flex items-center justify-center hover:bg-arno-blue-500 transition-colors">
              <Terminal className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-arno-blue-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
