import React from 'react'

const CAtegory1 = () => {
  return (
      <div>
      {/* {courses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#BD8939]">
          <h3 className="text-xl font-bold text-[#043455]">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.category}</p>
        </div>
      ))} */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-[#043455] text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {['Web Development', 'Design', 'Marketing', 'Business'].map((category) => (
            <div key={category} className="bg-white  p-6 rounded-lg shadow-lg border-l-4 border-[#BD8939]">
              <h3 className="text-xl font-bold text-[#043455]">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CAtegory1
