import { CourseSidebar } from "@/components/course/sidebar"
import { A2ZSheet } from "@/components/sheets/A2ZSheet"
import { sheets } from "@/lib/course-data"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen bg-arno-dark-900">
      <CourseSidebar sheets={sheets} />
      <div className="flex-1 p-8">
        <A2ZSheet />
      </div>
    </div>
  )
}

