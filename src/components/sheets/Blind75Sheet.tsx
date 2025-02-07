import { CourseContent } from "../course/content"
import { blind75Content } from "@/lib/sheet-data/blind75-sheet"

export function Blind75Sheet() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Blind 75 Sheet</h1>
        <p className="text-gray-400">
          The famous list of 75 leetcode questions that cover all the concepts needed for technical interviews.
        </p>
      </div>
      <CourseContent steps={blind75Content} />
    </div>
  )
}

