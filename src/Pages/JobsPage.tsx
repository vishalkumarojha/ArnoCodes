import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Calendar, DollarSign, TrendingUp, Briefcase, Code, Zap, Users } from "lucide-react"
import { Link } from "react-router-dom"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Web Development Internship",
    company: "ArnoCodes",
    locations: ["Remote"],
    salary: "Unpaid",
    duration: "3 Months",
    type: "Internship",
    isActive: true,
    logo: "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67bfcc89003628e0389f/view?project=67a074a3000f8ad60523&mode=admin",
    skills: ["React", "Node.js", "TypeScript"],
    applicants: 45,
  },
  {
    id: 2,
    title: "Content Curator",
    company: "ArnoCodes",
    locations: ["Remote"],
    salary: "Unpaid",
    duration: "3 Months",
    type: "Internship",
    isActive: true,
    logo: "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67bfcc89003628e0389f/view?project=67a074a3000f8ad60523&mode=admin",
    skills: ["Content Writing", "SEO", "Research"],
    applicants: 32,
  },
  {
    id: 3,
    title: "Growth & Marketing Specialist",
    company: "ArnoCodes",
    locations: ["Remote"],
    salary: "Unpaid",
    duration: "3 Months",
    type: "Internship",
    isActive: true,
    logo: "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67bfcc89003628e0389f/view?project=67a074a3000f8ad60523&mode=admin",
    skills: ["Digital Marketing", "Analytics", "Growth Hacking"],
    applicants: 28,
  },
]

export default function JobsPage() {
  const techIcons = [Briefcase, Code, Users, Zap]

  return (
    <div className="flex-1 bg-arno-dark-900 relative overflow-hidden min-h-screen">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 20}%`,
              animationDelay: `${index * 0.8}s`,
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>

      <div className="py-8 px-4 md:px-8 relative z-10">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
              <div className="w-2 h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
              <span className="text-arno-blue-400 font-mono text-sm">CAREER_PORTAL</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-arno-blue-400">&lt;</span>
              OPPORTUNITIES
              <span className="text-arno-blue-400">/&gt;</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-mono mb-8">
              // Launch your career with cutting-edge opportunities
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { label: "Active Positions", value: "3" },
                { label: "Total Applicants", value: "105+" },
                { label: "Success Rate", value: "85%" },
                { label: "Remote First", value: "100%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-arno-dark-800/50 backdrop-blur-lg px-4 py-2 rounded-lg border border-arno-blue-400/20"
                >
                  <div className="text-arno-blue-400 font-bold text-lg md:text-xl">{stat.value}</div>
                  <div className="text-gray-400 text-xs md:text-sm font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="bg-arno-dark-800/50 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 p-4">
              <div className="flex items-center gap-4">
                <button
                  className="w-10 h-10 rounded-full border border-arno-dark-600 flex items-center justify-center text-gray-400 hover:border-arno-blue-400 hover:text-white transition-colors"
                  title="Previous"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <div className="h-1 w-32 bg-arno-dark-600 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-arno-blue-400 rounded-full"></div>
                </div>
                <button
                  className="w-10 h-10 rounded-full border border-arno-dark-600 flex items-center justify-center text-gray-400 hover:border-arno-blue-400 hover:text-white transition-colors"
                  title="Next"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-arno-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

interface Job {
  id: number
  title: string
  company: string
  locations: string[]
  salary: string
  duration: string
  type: string
  isActive: boolean
  logo: string
  skills: string[]
  applicants: number
}

function JobCard({ job }: { job: Job }) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="bg-arno-dark-800/50 backdrop-blur-lg border-arno-blue-400/20 rounded-lg overflow-hidden transition-all duration-500 h-full flex flex-col group hover:border-arno-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
        {/* Card Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Tech Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

        <div className="p-5 flex-1 relative z-10">
          {/* Actively hiring badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-arno-blue-400/10 text-arno-blue-400 border border-arno-blue-400/20 font-mono">
              <TrendingUp className="w-3 h-3 mr-1" />
              ACTIVELY_HIRING
            </span>
          </div>

          {/* Job title and company */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-arno-blue-400 transition-colors font-mono">
                {job.title}
              </h3>
              <p className="text-sm text-gray-400 font-mono">{job.company}</p>
            </div>
            {job.logo && (
              <div className="w-12 h-12 bg-arno-dark-700/50 rounded-lg overflow-hidden border border-arno-blue-400/20">
                <img
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-arno-blue-400/10 text-arno-blue-400 text-xs rounded-full border border-arno-blue-400/20 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-3 mb-4">
            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-arno-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-400 font-mono">
                {job.locations.slice(0, 3).join(", ")}
                {job.locations.length > 3 && <span className="text-gray-500"> +{job.locations.length - 3} more</span>}
              </p>
            </div>

            {/* Salary */}
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-arno-blue-400" />
              <p className="text-sm text-gray-400 font-mono">{job.salary}</p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-arno-blue-400" />
              <p className="text-sm text-gray-400 font-mono">{job.duration}</p>
            </div>
          </div>

          {/* Applicants Count */}
          <div className="mb-4 p-3 bg-arno-dark-700/30 rounded-lg border border-arno-blue-400/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">APPLICANTS</span>
              <span className="text-arno-blue-400 font-bold font-mono">{job.applicants}</span>
            </div>
            <div className="w-full bg-arno-dark-600 rounded-full h-1 mt-2">
              <div
                className="bg-arno-blue-400 h-1 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((job.applicants / 100) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-arno-dark-700/30 backdrop-blur-sm flex justify-between items-center border-t border-arno-blue-400/20 relative z-10">
          <span className="text-xs text-gray-400 font-mono">{job.type.toUpperCase()}</span>
          <span className="text-sm text-arno-blue-400 font-medium flex items-center group-hover:text-white transition-colors font-mono">
            APPLY_NOW
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>

        {/* Bottom Tech Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
      </Card>
    </Link>
  )
}
