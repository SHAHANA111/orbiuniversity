"use client"; // Required for client-side rendering

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category1 from "../components/Category1";
import CourseCards1 from "../components/CourseCards1";
import CourseCardMaster from "../components/CourseCardMaster";
import { useCourses } from "./hooks/CourseContext";

const courses = [
  {
    id: "1",
    title: "Foundations of Machine Learning",
    description:
      "Learn the core principles and algorithms behind machine learning with practical applications and real-world examples.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Master the latest frontend frameworks and build responsive, high-performance web applications.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Develop comprehensive marketing strategies and learn how to effectively position brands in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Learn the principles of user-centered design and create intuitive, engaging user experiences.",
    longDescription: "",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Master financial modeling techniques and learn to make data-driven business decisions.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Build a solid foundation in data analysis, visualization, and statistical methods for making data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
    description:
      "Elevate your photography skills with advanced techniques in composition, lighting, and post-processing.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9yYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Arts",
    level: "Advanced",
    duration: "8 weeks",
    students: 2890,
    lessons: 36,
    instructor: "Isabella Martinez",
    rating: 4.8,
    price: "Free",
  },
];

// console.log(courses);
const page = () => {
  const { courses1 } = useCourses();
  console.log(courses1);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#043455] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Orbi University</h1>
        <p className="text-lg mt-4">
          Explore free courses and enhance your skills
        </p>
      </section>

      {/* <Category1 /> */}

      {/* Categories Section */}
      {/* <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-[#043455] text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {['Web Development', 'Design', 'Marketing', 'Business'].map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#BD8939]">
              <h3 className="text-xl font-bold text-[#043455]">{category}</h3>
              </div>
          ))}
        </div>
      </section> */}

      {/* Course Listings */}
      {/* <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-[#043455] text-center">Featured Courses</h2>
        <Category />
      </section> */}

      {/* <CourseCards1 /> */}

      {/* Courses Section */}
      <section
        id="courses"
        className="py-20 bg-gradient-to-b from-white to-orbi-50"
      >
        <div className=" px-4 mx-auto">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-orbi-900 mb-4 animate-fade-in-up">
              Explore Our Featured Courses
            </h2>
            {/* <p className="text-orbi-600 text-balance animate-fade-in-up">
                Discover our most popular courses designed to help you master new skills and advance your career.
              </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCardMaster
                key={course.id}
                {...course}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/categories"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-orbi-600 text-orbi-700 font-medium hover:bg-orbi-50 transition-colors"
            >
              View All Courses
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
