import { Code2, Users, BookOpen, Trophy, Briefcase, MessageSquare, Terminal, Database, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

const services = [
  {
    icon: Code2,
    title: "DSA & Coding",
    description: "Master Data Structures & Algorithms with our comprehensive curriculum and practice problems.",
    link: "/practice",
    color: "arno-blue-400",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Get personalized guidance from experienced developers working at top tech companies.",
    link: "/mentorship",
    color: "green-400",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access high-quality tutorials, articles, and video content to enhance your coding skills.",
    link: "/courses",
    color: "purple-400",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Participate in coding contests and hackathons to challenge yourself and win prizes.",
    link: "/competitions",
    color: "yellow-400",
  },
  {
    icon: Briefcase,
    title: "Job Portal",
    description: "Find exciting career opportunities at leading tech companies and startups.",
    link: "/jobs",
    color: "cyan-400",
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Join our vibrant community of developers to learn, share, and grow together.",
    link: "/blog",
    color: "pink-400",
  },
]

const floatingIcons = [Terminal, Database, Zap]

export function WhatWeDo() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${20 + index * 30}%`,
              top: `${15 + index * 20}%`,
              animationDelay: `${index * 1.2}s`,
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">SERVICES_ARRAY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            What We Do
            <span className="text-arno-blue-400">/&gt;</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-mono">
            // Comprehensive solutions to help you excel in your programming journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link to={service.link} key={index} className="block group">
                <Card className="p-4 sm:p-6 bg-arno-dark-800/50 backdrop-blur-lg border-arno-blue-400/20 hover:border-arno-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-arno-blue-400/10 h-full relative overflow-hidden">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Tech Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg bg-arno-dark-700/50 group-hover:bg-${service.color}/10 transition-colors duration-300 border border-arno-dark-600 group-hover:border-${service.color}/30`}
                      >
                        <Icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-${service.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-arno-blue-400 transition-colors duration-300 font-mono">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tech Footer */}
                    <div className="mt-4 pt-3 sm:pt-4 border-t border-arno-blue-400/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-500">// EXPLORE_MODULE</span>
                        <div className="w-2 h-2 bg-arno-blue-400 rounded-full group-hover:animate-ping"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Bottom Circuit Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-arno-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
