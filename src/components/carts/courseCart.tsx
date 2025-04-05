"use client";

interface CourseCartProps {
  onSelectCourse: (course: string) => void;
}

const courses = [
  { id: "dsa", name: "Data Structures & Algorithms" },
  { id: "web-dev", name: "Web Development" },
  { id: "aiml", name: "AI/ML" },
];

export default function CourseCart({ onSelectCourse }: CourseCartProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        
        <div
          key={course.id}
          className="p-6 bg-arno-dark-700 rounded-xl shadow-md cursor-pointer hover:bg-arno-dark-600"
          onClick={() => {
            onSelectCourse(course.id);
            window.history.pushState(null, "", `/courses/${course.id}`); // Update URL without reloading
          }}
        >
          <h3 className="text-xl font-semibold text-white">{course.name}</h3>
        </div>
      ))}
    </div>
  );
}
