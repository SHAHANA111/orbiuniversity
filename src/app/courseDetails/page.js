"use client";

import {Suspense , useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { ArrowLeft, Book, Clock, Star, Users } from "lucide-react";
import Header from "../../components/Header";  // Adjust path as needed
import Footer from "../../components/Footer";  // Adjust path as needed
import { Badge } from "../../components/ui/Badge";
import { Separator } from "../../components/ui/Separator";
import { Button } from "../../components/ui/Button";



const CourseDetailContent = ({
    // id,
    // mainId,
    // title,
    // description,
    // image,
    // category,
    // level,
    // duration,
    // students,
    // lessons,
    // instructor,
}) => {
    const searchParams = useSearchParams();
    const mainId = searchParams.get("mainId");
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const image = searchParams.get("image");
    const category = searchParams.get("category");
    const lessons = searchParams.get("lessons");
    const duration = searchParams.get("duration");
    const instructor = searchParams.get("instructor");
    const price = searchParams.get("price");
    const rating = searchParams.get("rating");







//   const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const courseData = {
        // id :mainId ,
        // id: params.id,
        // title: "Dropshipping 101: Getting Started",
        // description: "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.",
        longDescription: "This comprehensive course covers everything you need to know to start a successful dropshipping business on Orbi.pk. From selecting profitable products to setting up your store, managing orders, and scaling your business, you'll learn the proven strategies used by successful dropshippers. By the end of this course, you'll have a fully operational dropshipping business ready to make sales.",
        // image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=60",
        // category: "dropshipping",
        // instructor: "Ahmed Khan",
        // duration: "6 weeks",    
        // lessons: 24,
        students: 1240,
        // rating: 4.8,
        // price: "Free",
        curriculum: [
          {
            title: "Getting Started with Dropshipping",
            lessons: ["Introduction to E-commerce", "How Dropshipping Works", "Setting Up Your Account"]
          },
          {
            title: "Finding Profitable Products",
            lessons: ["Market Research", "Product Selection", "Analyzing Competition"]
          },
          {
            title: "Setting Up Your Store",
            lessons: [
              "Store Design Principles",
              "Creating Compelling Product Listings",
              "Pricing Strategies",
              "Payment Processing"
            ]
          },
          {
            title: "Managing Operations",
            lessons: [
              "Order Fulfillment Process",
              "Customer Service Best Practices",
              "Returns & Refunds Handling",
              "Scaling Your Business"
            ]
          }
        ]
      };
      
      setCourse(courseData);
      setLoading(false);
    }, 1000);
  }, []);
  

  console.log(mainId);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-100 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/courses" className="px-4 py-2 rounded bg-blue-600 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses 
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    
    <div className="min-h-screen flex flex-col">
     
      <Header />
      <main className="flex-grow pt-4">
      <section className="py-12 bg-[#043455] text-white">
      <div className="px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-4">
              <Link
                href="/"
                className="inline-flex items-center text-[#E5B161] hover:text-[#BD8939] transition-colors"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Courses <span>{mainId}</span>
              </Link>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h1>

            <p className="text-white/80 mb-6">{description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#BD8939] text-white border-none px-3 py-1 rounded">
                {category}
              </span>
              <div className="flex items-center text-[#E5B161]">
                <Clock className="h-4 w-4 mr-2" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-[#E5B161]">
                <Book className="h-4 w-4 mr-2" />
                <span>{lessons} lessons</span>
              </div>
              <div className="flex items-center text-[#E5B161]">
                <Users className="h-4 w-4 mr-2" />
                <span>{course.students.toLocaleString()} enrolled</span>
              </div>
              <div className="flex items-center text-[#E5B161]">
                <Star className="h-4 w-4 mr-2 fill-[#BD8939]" />
                <span>{rating}/5</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#BD8939] hover:bg-[#BD8939]/90 text-white">
                Enroll Now - {price}
              </Button>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src={image} width={400} height={300} alt={title} className="w-full h-64 object-cover rounded-lg" />

            </div>
          </div>
        </div>
      </div>
    </section>

        {/* <div className="md:w-1/3">
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-lg" />
            </div> */}

<section className="py-16 bg-white">
      <div className="px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#043455] mb-6">About This Course</h2>
            <p className="text-[#043455]/80 mb-8">{course.longDescription}</p>

            <h2 className="text-2xl font-bold text-[#043455] mb-6">Curriculum</h2>
            <div className="space-y-4 mb-8">
              {course.curriculum.map((section, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-[#043455]/5 p-4">
                    <h3 className="font-semibold text-[#043455]">{section.title}</h3>
                  </div>
                  <Separator />
                  <div className="p-4">
                    <ul className="space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start">
                          <Book className="h-5 w-5 text-[#BD8939] mr-3 mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#043455]/5 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#043455] mb-4">Course Details</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[#043455]/70">Instructor</h4>
                  <p className="text-[#043455]">{instructor}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#043455]/70">Duration</h4>
                  <p className="text-[#043455]">{duration}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#043455]/70">Lessons</h4>
                  <p className="text-[#043455]">{lessons} lessons</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#043455]/70">Enrolled</h4>
                  <p className="text-[#043455]">{course.students.toLocaleString()} students</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#043455]/70">Language</h4>
                  <p className="text-[#043455]">English</p>
                </div>

                <Separator />

                <div>
                  <Button className="w-full bg-[#BD8939] hover:bg-[#BD8939]/90 text-white">
                    Enroll Now - {course.price}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </div>
  );
};

const CourseDetail = () => {
  return (
      <Suspense fallback={<div>Loading course details...</div>}>
          <CourseDetailContent />
      </Suspense>
  );
};

export default CourseDetail;
