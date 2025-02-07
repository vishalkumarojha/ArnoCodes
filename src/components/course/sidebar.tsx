import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

interface SidebarProps {
  sheets: string[]
}

export function CourseSidebar({ sheets }: SidebarProps) {
  const location = useLocation()
  const currentSheetId = location.pathname.split("/")[2] || "0"

  return (
    <div className="w-64 bg-arno-dark-800 border-r border-arno-dark-600 p-4">
      <div className="mb-8">
        <h2 className="text-red-500 font-semibold mb-4 flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 mr-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          DSA Sheets
        </h2>
        <div className="relative">
          {/* Curved connecting line */}
          <div className="absolute left-[10px] top-2 bottom-2 w-px bg-arno-dark-600" />
          <div className="absolute left-[10px] top-[22px] w-3 h-px bg-arno-dark-600" />

          <ul className="space-y-2 relative">
            {sheets.map((sheet, index) => (
              <li key={index} className="relative">
                {index === Number.parseInt(currentSheetId) && (
                  <div
                    className="absolute left-[10px] top-1/2 w-3 h-3 rounded-full border-2 border-red-500"
                    style={{ transform: "translateY(-50%)" }}
                  />
                )}
                <Link
                  to={`/sheet/${index}`}
                  className={`block pl-8 py-2 rounded-md transition-colors relative ${
                    index === Number.parseInt(currentSheetId)
                      ? "text-red-500 font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {sheet}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

