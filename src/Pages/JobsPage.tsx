import { Clock } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-arno-dark-900 p-4">
      <div className="text-center">
        <Clock className="w-16 h-16 text-arno-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-gray-400 max-w-md">
          Our job board is under construction. We'll help you find your dream tech job soon!
        </p>
      </div>
    </div>
  )
}

