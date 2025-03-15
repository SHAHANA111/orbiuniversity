import React from 'react';
import Image from "next/image";
import img1 from '../../public/assets/orbi-logo.jpg';

const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "March 1, 2025",
      category: "Development",
      image: {img1},
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      date: "Feb 20, 2025",
      category: "Design",
      image: {img1},
    },
    {
      id: 3,
      title: "Digital Marketing 101",
      date: "Feb 15, 2025",
      category: "Marketing",
      image: {img1},
    },
    {
      id: 4,
      title: "Python for Beginners",
      date: "Jan 30, 2025",
      category: "Programming",
      image: {img1},
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      date: "Jan 25, 2025",
      category: "Artificial Intelligence",
      image: {img1},
    },
    {
      id: 6,
      title: "Photography Essentials",
      date: "Jan 10, 2025",
      category: "Photography",
      image: {img1},
    },
    {
      id: 7,
      title: "Business & Entrepreneurship",
      date: "Dec 20, 2024",
      category: "Business",
      image: {img1},
    },
    {
      id: 8,
      title: "UI/UX Design Fundamentals",
      date: "Dec 10, 2024",
      category: "Design",
      image: {img1},
    },
  ];

const CardsDesign = ({ course }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <Image src={img1} alt={course.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#043455]">{course.title}</h3>
          <p className="text-sm text-gray-500">Uploaded: {course.date}</p>
          <span className="inline-block mt-2 text-sm font-medium bg-[#E5B161] text-white px-3 py-1 rounded-full">
            {course.category}
          </span>
        </div>
      </div>
    );
  };
    
    const CourseCards1 = () => {
      return (
        <div className=" mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#043455] mb-6">Explore Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CardsDesign key={course.id} course={course} />
            ))}
          </div>
        </div>
      );
}

export default CourseCards1
