import { useParams } from "react-router-dom"
import { CourseSidebar } from "@/components/course/sidebar"
import { A2ZSheet } from "@/components/sheets/A2ZSheet"
import { ComingSoonSheet } from "@/components/sheets/ComingSoonSheet"
import { sheets } from "@/lib/course-data"

export default function SheetPage() {
  const { sheetId } = useParams()

  const renderSheet = () => {
    switch (sheetId) {
      case "0":
        return <A2ZSheet />
      case "1":
        return <ComingSoonSheet title={sheets[1]} />
      case "2":
        return <ComingSoonSheet title={sheets[2]} />
      case "3":
        return <ComingSoonSheet title={sheets[3]} />
      default:
        return <A2ZSheet />
    }
  }

  return (
    <div className="flex min-h-screen bg-arno-dark-900">
      <CourseSidebar sheets={sheets} />
      <div className="flex-1 p-8">{renderSheet()}</div>
    </div>
  )
}

