import React from 'react'


const courses = [
  { title: "React for Beginners", category: "Web Development" },
  { title: "UI/UX Design Basics", category: "Design" },
  { title: "Digital Marketing 101", category: "Marketing" },
  { title: "Business Growth Strategies", category: "Business" },
];

const Category = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#BD8939]">
          <h3 className="text-xl font-bold text-[#043455]">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Category
