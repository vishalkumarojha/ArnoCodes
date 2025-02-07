import { CourseContent } from "../course/content"
import { sheet79Content } from "@/lib/sheet-data/79-sheet"

export function Sheet79() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Arno's 79 Sheet</h1>
        <p className="text-gray-400">
          A curated list of 79 most important coding problems to master algorithmic problem solving.
        </p>
      </div>
      <CourseContent steps={sheet79Content} />
    </div>
  )
}

