// src/lib/data/courses.ts
export interface Course {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export const courses: Course[] = [
    { 
      id: "dsa", 
      name: "Data Structures & Algorithms", 
      description: "Master fundamental algorithms and problem-solving techniques",
      image: "src/assets/dsa.png" 
    },
    { 
      id: "web-dev", 
      name: "Web Development", 
      description: "Build modern web applications with latest technologies",
      image: "src/assets/dsa.png" 
    },
    { 
      id: "aiml", 
      name: "AI/ML", 
      description: "Learn artificial intelligence and machine learning concepts",
      image: "src/assets/dsa.png" 
    },
  ];