import { FileText, Play, Code2 } from "lucide-react"
import { Link } from "react-router-dom"

interface Lesson {
  name: string
  hasArticle: boolean
  hasVideo: boolean
  hasPractice: boolean
  difficulty: string
  practiceLink?: string
  articleLink?: string
}

interface LectureTableProps {
  lessons: Lesson[]
  stepIndex: number
  lectureIndex: number
  sheetId: string
}

export function LectureTable({ lessons, stepIndex, lectureIndex, sheetId }: LectureTableProps) {
  return (
    <div className="mt-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 border-b border-arno-dark-600">
            <th className="pb-2">Status</th>
            <th className="pb-2">Lesson</th>
            <th className="pb-2">Article</th>
            <th className="pb-2">Video</th>
            <th className="pb-2">Practice</th>
            <th className="pb-2">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, lessonIndex) => (
            <tr key={lessonIndex} className="border-b border-arno-dark-600 text-gray-300 hover:bg-arno-dark-700">
              <td className="py-4">
                <input
                  type="checkbox"
                  className="rounded border-arno-dark-600 bg-arno-dark-700 text-red-500 focus:ring-red-500"
                />
              </td>
              <td className="py-4">{lesson.name}</td>
              <td className="py-4">
                {lesson.hasArticle && lesson.articleLink && (
                  <Link to={lesson.articleLink} className="inline-block">
                    <FileText
                      className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                      aria-label="Read article"
                    />
                  </Link>
                )}
              </td>
              <td className="py-4">
                {lesson.hasVideo && (
                  <Play className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" aria-label="Watch video" />
                )}
              </td>
              <td className="py-4">
                {lesson.hasPractice && (
                  <Link to={lesson.practiceLink || `/practice/${sheetId}/${stepIndex}/${lectureIndex}/${lessonIndex}`}>
                    <Code2 className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" aria-label="Practice" />
                  </Link>
                )}
              </td>
              <td className="py-4">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs ${
                    lesson.difficulty === "Easy"
                      ? "bg-green-500/20 text-green-500"
                      : lesson.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                  }`}
                >
                  {lesson.difficulty}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

