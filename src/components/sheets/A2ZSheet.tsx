// Updated A2ZSheet.tsx
import { CourseContent } from "../course/content";
import { a2zContent } from "@/lib/sheet-data/a2z-sheet";
import { CourseSidebar } from "@/components/course/sidebar";
import { sheets } from "@/lib/course-data";

export function A2ZSheet() {
  return (
    <div className="flex min-h-screen bg-arno-dark-900">
      {/* Sidebar: Hidden on small screens, visible on medium and above */}
      <div className="hidden md:block w-64 bg-arno-dark-800 border-r border-arno-dark-600">
        <CourseSidebar sheets={sheets} />
      </div>

      {/* Main content with padding and max width */}
      <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Arno's DSA Course/Sheet
          </h1>
          <p className="text-gray-400">
            This comprehensive course covers 25 essential steps in Data
            Structures and Algorithms, from basic programming concepts to
            advanced topics. Each step includes 3 lectures, with each lecture
            containing 3 in-depth lessons to ensure a thorough understanding of
            the subject matter. This structure allows for a total of 225
            lessons across the entire course.
          </p>
        </div>

        {/* Render Course Content */}
        <CourseContent steps={a2zContent} sheetId="0" />
      </div>
    </div>
  );
}
