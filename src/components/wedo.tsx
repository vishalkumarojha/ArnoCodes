import { Code2, Users, BookOpen, Trophy, Briefcase, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

const services = [
  {
    icon: Code2,
    title: "DSA & Coding",
    description: "Master Data Structures & Algorithms with our comprehensive curriculum and practice problems.",
    link: "/practice",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Get personalized guidance from experienced developers working at top tech companies.",
    link: "/mentorship",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access high-quality tutorials, articles, and video content to enhance your coding skills.",
    link: "/courses",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Participate in coding contests and hackathons to challenge yourself and win prizes.",
    link: "/competitions",
  },
  {
    icon: Briefcase,
    title: "Job Portal",
    description: "Find exciting career opportunities at leading tech companies and startups.",
    link: "/jobs",
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Join our vibrant community of developers to learn, share, and grow together.",
    link: "/blog",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Comprehensive solutions to help you excel in your programming journey
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link to={service.link} key={index} className="block group">
                <Card className="p-6 bg-arno-dark-800 border-arno-dark-600 hover:border-arno-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-arno-blue-400/10 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-arno-dark-700 group-hover:bg-arno-blue-400/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-arno-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-arno-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

