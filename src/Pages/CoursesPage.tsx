"use client";

// import { CourseSidebar } from "@/components/course/sidebar";
import { A2ZSheet } from "@/components/sheets/A2ZSheet";
// import { sheets } from "@/lib/course-data";
import { useEffect, useState } from "react";
import CourseCart from "@/components/carts/courseCart";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Handle browser back button to go back to CourseCart
  useEffect(() => {
    const handlePopState = () => {
      setSelectedCourse(null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Handle going back to CourseCart
  const handleBackToCourses = () => {
    setSelectedCourse(null);
    window.history.pushState(null, "", "/courses"); // Maintain correct URL for CourseCart
  };

  return (
    <div className="flex min-h-screen bg-arno-dark-900">
      {/* Sidebar: Hidden on small screens, appears on medium and above */}
      {/* <div className="hidden md:block w-64">
        <CourseSidebar sheets={sheets} />
      </div> */}

      {/* Main content with conditional routing */}
      <div className="flex-1 p-4 md:p-8">
        {selectedCourse ? (
          <div>
            {/* Back to Courses Button */}
            <button
              onClick={handleBackToCourses}
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Back to Courses
            </button>
            
            {/* Render Selected Course */}
            {selectedCourse === "dsa" ? (
              <A2ZSheet />
            ) : selectedCourse === "web-dev" ? (
              <div className="text-white text-2xl">Welcome to Web Development Course!</div>
            ) : selectedCourse === "aiml" ? (
              <div className="text-white text-2xl">Welcome to AI/ML Course Content!</div>
            ) : (
              <div className="text-white text-2xl">Invalid Course</div>
            )}
          </div>
        ) : (
          <CourseCart onSelectCourse={setSelectedCourse} />
        )}
      </div>
    </div>
  );
}
