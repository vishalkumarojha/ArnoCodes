import { Clock } from "lucide-react"

const PracticePage = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-arno-dark-900 p-4">
      <div className="text-center">
        <Clock className="w-16 h-16 text-arno-blue-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-gray-400 max-w-md">
          Our custom compiler is under development. We're working hard to bring you a powerful coding environment. Stay
          tuned!
        </p>
      </div>
    </div>
  )
}

export default PracticePage
