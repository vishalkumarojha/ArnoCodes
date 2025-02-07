import { CourseSidebar } from "@/components/course/sidebar";
import { A2ZSheet } from "@/components/sheets/A2ZSheet";
import { sheets } from "@/lib/course-data";

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen bg-arno-dark-900">
      {/* Sidebar: Hidden on small screens, appears on medium and above */}
      <div className="hidden md:block w-64">
        <CourseSidebar sheets={sheets} />
      </div>

      {/* Main content with padding to avoid overlap */}
      <div className="flex-1 p-4 md:p-8">
        <A2ZSheet />
      </div>
    </div>
  );
}
