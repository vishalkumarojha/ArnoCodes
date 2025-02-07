import { Clock } from "lucide-react"

interface ComingSoonSheetProps {
  title: string
}

export function ComingSoonSheet({ title }: ComingSoonSheetProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      </div>
      <div className="flex flex-col items-center justify-center py-20">
        <Clock className="w-16 h-16 text-red-500 mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-400 text-center max-w-md">
          We're working hard to bring you this content. Stay tuned for updates!
        </p>
      </div>
    </div>
  )
}

