// import React from 'react';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Category1 from "@/components/Category1";

// const categoriesArr = ["Web Development", "Design", "Marketing", "Business"];

// const categories = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//           <Header />
//           <Category1 />
//           <Footer />
//         </div>
//       );
// }

// export default categories
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import  Navbar  from "@/components/Navbar";
import  Footer1  from "@/components/Footer1";
import { CourseCardMaster } from "@/components/CourseCardMaster";
import { Filter, Search } from "lucide-react";

// Sample course data
const allCourses = [
  { id: "dropship-101", title: "Dropshipping 101: Getting Started", description: "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", category: "dropshipping" },
  { id: "vendor-negotiation", title: "Vendor Negotiation Mastery", description: "Develop your negotiation skills and build better relationships with suppliers.", image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ290aWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", category: "vendor" },
  { id: "import-essentials", title: "Import Essentials: From Source to Warehouse", description: "Navigate international sourcing, shipping, customs, and local logistics.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1wb3J0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", category: "importing" },
  { id: "orbi-selling", title: "Mastering the Orbi.pk Marketplace", description: "Learn how to optimize your product listings, manage inventory, and increase sales on Orbi.pk.", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", category: "selling" },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "dropshipping", name: "Dropshipping" },
  { id: "vendor", name: "Vendor Relations" },
  { id: "importing", name: "Importing" },
  { id: "selling", name: "Direct Selling" },
];

const Courses = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [query, setQuery] = useState(searchQuery);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam);
    setQuery(searchQuery);
  }, [categoryParam, searchQuery]);

  useEffect(() => {
    let filtered = allCourses;
    if (activeCategory !== "all") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    if (query) {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(course => course.title.toLowerCase().includes(searchLower) || course.description.toLowerCase().includes(searchLower));
    }
    setFilteredCourses(filtered);
  }, [activeCategory, query]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(params => {
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      return params;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-[#043455]/10 to-white">
          <div className=" px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#043455] mb-6">Explore Our Courses</h1>
              <p className="text-lg text-[#043455]/80">Discover specialized courses to help you succeed in every aspect of e-commerce.</p>
            </div>

            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)} className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#043455]/20 rounded-lg">
                <Filter className="h-4 w-4" />
                <span>Categories</span>
              </button>

              <form onSubmit={handleSearch} className="flex w-full max-w-md ml-auto">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-[#043455]/50" />
                  </div>
                  <input type="text" placeholder="Search courses..." className="w-full pl-10 pr-4 py-2 border border-[#043455]/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#BD8939]" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
              </form>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {isMobileFilterOpen && (
                <div className="lg:hidden bg-white p-4 rounded-lg border border-border mb-6">
                  <h3 className="font-semibold text-[#043455] mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button key={category.id} onClick={() => handleCategoryChange(category.id)} className={`px-3 py-1.5 rounded-md text-sm ${activeCategory === category.id ? "bg-[#043455] text-white" : "bg-[#043455]/10 text-[#043455] hover:bg-[#043455]/20"}`}>{category.name}</button>
                    ))}
                  </div>
                </div>
              )}

              <div className="hidden lg:block w-64 bg-white p-6 rounded-lg border border-border self-start sticky top-24">
                <h3 className="font-semibold text-[#043455] mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button key={category.id} onClick={() => handleCategoryChange(category.id)} className={`px-4 py-2 rounded-md text-left ${activeCategory === category.id ? "bg-[#043455] text-white" : "hover:bg-[#043455]/10 text-[#043455]"}`}>{category.name}</button>
                  ))}
                </div>
              </div>

              <div className="flex-grow">
                {filteredCourses.length === 0 ? <p className="text-center">No courses found.</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredCourses.map(course => <CourseCardMaster key={course.id} {...course} />)}</div>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Courses;
