"use client"; // Required for Next.js Client Components
import { createContext, useContext, useState } from "react";

// Create Context
const CourseContext = createContext();

// Context Provider Component
export const CourseProvider = ({ children }) => {
  const [courses] = useState([
    {
      id: "1",
      title: "Foundations of Machine Learning",
      description: "Learn the core principles and algorithms behind machine learning with practical applications and real-world examples.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: "Technology",
      level: "Intermediate",
      duration: "10 weeks",
      students: 2435,
      lessons: 42,
      instructor: "Dr. Sarah Chen",
      rating: 5,
      price: "Free",
      // featured: true
    },
    {
      id: "2",
      title: "Modern Web Development",
      description: "Master the latest frontend frameworks and build responsive, high-performance web applications.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Technology",
      level: "Beginner",
      duration: "8 weeks",
      students: 3870,
      lessons: 36,
      instructor: "Alex Rodriguez",
      rating: 4.9,
      price: "Free",
    },
    {
      id: "3",
      title: "Strategic Marketing Management",
      description: "Develop comprehensive marketing strategies and learn how to effectively position brands in competitive markets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Business",
      level: "Advanced",
      duration: "12 weeks",
      students: 1895,
      lessons: 48,
      instructor: "Maya Johnson",
      rating: 4.7,
      price: "Free",
    },
    {
      id: "4",
      title: "UX/UI Design Fundamentals",
      description: "Learn the principles of user-centered design and create intuitive, engaging user experiences.",
      longDescription: "",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Design",
      level: "Beginner",
      duration: "6 weeks",
      students: 4210,
      lessons: 30,
      instructor: "Leo Park",
      rating: 4.5,
      price: "Free",
    },
    {
      id: "5",
      title: "Financial Analysis & Modeling",
      description: "Master financial modeling techniques and learn to make data-driven business decisions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: "Business",
      level: "Intermediate",
      duration: "9 weeks",
      students: 1750,
      lessons: 38,
      instructor: "Emma Sinclair",
      rating: 4.6,
      price: "Free",
    },
    {
      id: "6",
      title: "Data Science Essentials",
      description: "Build a solid foundation in data analysis, visualization, and statistical methods for making data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Technology",
      level: "Intermediate",
      duration: "11 weeks",
      students: 3120,
      lessons: 45,
      instructor: "Dr. Michael Roberts",
      rating: 4.4,
      price: "Free",
    },
    {
      id: "7",
      title: "Digital Photography Masterclass",
      description: "Elevate your photography skills with advanced techniques in composition, lighting, and post-processing.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9yYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: "Arts",
      level: "Advanced",
      duration: "8 weeks",
      students: 2890,
      lessons: 36,
      instructor: "Isabella Martinez",
      rating: 4.8,
      price: "Free",
    },
  ]);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom Hook to use the context
export const useCourses = () => useContext(CourseContext);
