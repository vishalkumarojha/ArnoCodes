"use client";

import { Clock } from "lucide-react";
// import dsaImg from "../../assets/codes-arno.png";


// import Image from "next/image";

interface CourseCartProps {
  onSelectCourse: (course: string) => void;
}

const courses = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    image: "/images/dsa-course.jpg", // <- your uploaded one
  },
  {
    id: "web-dev",
    name: "Web Development",
    image: "/images/web-dev-img.jpeg",
    comingSoon: true,
  },
  {
    id: "aiml",
    name: "AI/ML",
    image: "/images/ai-course.jpg",
    comingSoon: true,
  },
];



export default function CourseCart({ onSelectCourse }: CourseCartProps) {
  const handleCourseClick = (courseId: string, isComingSoon: boolean) => {
    if (isComingSoon) {
      // Don't navigate if it's a coming soon course
      return;
    }
    onSelectCourse(courseId);
    window.history.pushState(null, "", `/courses/${courseId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course) => (
  <div
    key={course.id}
    className={`p-6 bg-arno-dark-700 rounded-xl shadow-md ${
      course.comingSoon ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:bg-arno-dark-600"
    } relative`}
    onClick={() => handleCourseClick(course.id, course.comingSoon || false)}
  >
    {course.image && (
      <div className="relative w-full h-40 mb-4">
        {course.comingSoon && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-arno-dark-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
            <Clock className="w-3 h-3" />
            Coming Soon
          </div>
        )}
        <img
          src={course.image}
          alt={`${course.name} Cover`}
          className="rounded-md object-cover w-full h-full"
        />
      </div>
    )}

    <h3 className="text-xl font-semibold text-white">{course.name}</h3>

    {course.comingSoon && (
      <p className="text-arno-dark-300 text-sm mt-2">
        Content will be available soon
      </p>
    )}
  </div>
))}


    </div>
  );
}

  // done but coming soon sholud show above the image and not below the image