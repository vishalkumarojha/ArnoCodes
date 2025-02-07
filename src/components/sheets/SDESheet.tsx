import { CourseContent } from "../course/content"
import { sdeContent } from "@/lib/sheet-data/sde-sheet"

export function SDESheet() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Arno's SDE Sheet</h1>
        <p className="text-gray-400">
          A structured and comprehensive sheet to prepare for software development engineer interviews at top tech
          companies.
        </p>
      </div>
      <CourseContent steps={sdeContent} />
    </div>
  )
}

