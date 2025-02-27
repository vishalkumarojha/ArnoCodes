import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Calendar, DollarSign, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Web Devlopment Internship",
    company: "ArnoCodes",
    locations: ["Remote"],
    salary: "Unpaid",
    duration: "3 Months",
    type: "Internship",
    isActive: true,
    logo: "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67bfcc89003628e0389f/view?project=67a074a3000f8ad60523&mode=admin",
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
  },
]

export default function JobsPage() {
  return (
    <div className="flex-1 bg-arno-dark-900 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Job Opportunities</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-arno-dark-600 flex items-center justify-center text-gray-400 hover:border-arno-blue-400 hover:text-white transition-colors" title="Previous">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <div className="h-1 w-32 bg-arno-dark-600 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-arno-blue-400 rounded-full"></div>
            </div>
            <button className="w-10 h-10 rounded-full border border-arno-dark-600 flex items-center justify-center text-gray-400 hover:border-arno-blue-400 hover:text-white transition-colors" title="Next">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Job {
  id: number;
  title: string;
  company: string;
  locations: string[];
  salary: string;
  duration: string;
  type: string;
  isActive: boolean;
  logo: string;
}

function JobCard({ job }: { job: Job }) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="bg-arno-dark-800 border-arno-dark-600 rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col group hover:border-arno-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
        <div className="p-5 flex-1">
          {/* Actively hiring badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-400/10 text-blue-400">
              <TrendingUp className="w-3 h-3 mr-1" />
              Actively hiring
            </span>
          </div>

          {/* Job title and company */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-arno-blue-400 transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-gray-400">{job.company}</p>
            </div>
            {job.logo && (
              <div className="w-10 h-10 bg-arno-dark-700 rounded overflow-hidden">
                <img
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-400">
              {job.locations.slice(0, 3).join(", ")}
              {job.locations.length > 3 && <span className="text-gray-500"> +{job.locations.length - 3} more</span>}
            </p>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-400">{job.salary}</p>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-400">{job.duration}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-arno-dark-700 flex justify-between items-center border-t border-arno-dark-600">
          <span className="text-xs text-gray-400">{job.type}</span>
          <span className="text-sm text-arno-blue-400 font-medium flex items-center group-hover:text-white transition-colors">
            View details
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-arno-blue-400/10 to-transparent opacity-50" />
        </div>
      </Card>
    </Link>
  )
}

