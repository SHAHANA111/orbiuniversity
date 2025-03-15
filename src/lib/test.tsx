import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Book, Clock, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      // Sample course data - in a real app, this would be fetched from an API
      const courseData = {
        id: id,
        title: "Dropshipping 101: Getting Started",
        description:
          "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.",
        longDescription:
          "This comprehensive course covers everything you need to know to start a successful dropshipping business on Orbi.pk. From selecting profitable products to setting up your store, managing orders, and scaling your business, you'll learn the proven strategies used by successful dropshippers. By the end of this course, you'll have a fully operational dropshipping business ready to make sales.",
        image:
          "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        category: "dropshipping",
        instructor: "Ahmed Khan",
        duration: "6 weeks",
        lessons: 24,
        students: 1240,
        rating: 4.8,
        price: "Free",
        curriculum: [
          {
            title: "Getting Started with Dropshipping",
            lessons: [
              "Introduction to E-commerce & Dropshipping",
              "How Dropshipping Works on Orbi.pk",
              "Setting Up Your Orbi Seller Account",
            ],
          },
          {
            title: "Finding Profitable Products",
            lessons: [
              "Market Research Fundamentals",
              "Product Selection Criteria",
              "Analyzing Competition",
              "Validating Product Ideas",
            ],
          },
          {
            title: "Setting Up Your Store",
            lessons: [
              "Store Design Principles",
              "Creating Compelling Product Listings",
              "Pricing Strategies",
              "Payment Processing",
            ],
          },
          {
            title: "Managing Operations",
            lessons: [
              "Order Fulfillment Process",
              "Customer Service Best Practices",
              "Returns & Refunds Handling",
              "Scaling Your Business",
            ],
          },
        ],
      };

      setCourse(courseData);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-orbi-blue/20 rounded mb-4"></div>
            <div className="h-4 w-40 bg-orbi-blue/10 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-orbi-blue mb-4">
              Course Not Found
            </h1>
            <p className="text-orbi-blue/70 mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-orbi-blue text-white hover:bg-orbi-blue/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 bg-orbi-blue text-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="mb-4">
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-orbi-light hover:text-orbi-gold transition-colors"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Courses
                  </Link>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {course.title}
                </h1>

                <p className="text-white/80 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge className="bg-orbi-gold text-white border-none">
                    {course.category}
                  </Badge>
                  <div className="flex items-center text-orbi-light">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-orbi-light">
                    <Book className="h-4 w-4 mr-2" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center text-orbi-light">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{course.students.toLocaleString()} enrolled</span>
                  </div>
                  <div className="flex items-center text-orbi-light">
                    <Star className="h-4 w-4 mr-2 fill-orbi-gold" />
                    <span>{course.rating}/5</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-orbi-gold hover:bg-orbi-gold/90 text-white">
                    Enroll Now - {course.price}
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-orbi-blue mb-6">
                  About This Course
                </h2>
                <p className="text-orbi-blue/80 mb-8">
                  {course.longDescription}
                </p>

                <h2 className="text-2xl font-bold text-orbi-blue mb-6">
                  Curriculum
                </h2>
                <div className="space-y-4 mb-8">
                  {course.curriculum.map((section: any, index: number) => (
                    <div
                      key={index}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <div className="bg-orbi-blue/5 p-4">
                        <h3 className="font-semibold text-orbi-blue">
                          {section.title}
                        </h3>
                      </div>
                      <Separator />
                      <div className="p-4">
                        <ul className="space-y-2">
                          {section.lessons.map(
                            (lesson: string, lessonIndex: number) => (
                              <li
                                key={lessonIndex}
                                className="flex items-start"
                              >
                                <Book className="h-5 w-5 text-orbi-gold mr-3 mt-0.5" />
                                <span>{lesson}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-orbi-blue/5 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-orbi-blue mb-4">
                    Course Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-orbi-blue/70">
                        Instructor
                      </h4>
                      <p className="text-orbi-blue">{course.instructor}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-orbi-blue/70">
                        Duration
                      </h4>
                      <p className="text-orbi-blue">{course.duration}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-orbi-blue/70">
                        Lessons
                      </h4>
                      <p className="text-orbi-blue">{course.lessons} lessons</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-orbi-blue/70">
                        Enrolled
                      </h4>
                      <p className="text-orbi-blue">
                        {course.students.toLocaleString()} students
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-orbi-blue/70">
                        Language
                      </h4>
                      <p className="text-orbi-blue">English</p>
                    </div>

                    <Separator />

                    <div>
                      <Button className="w-full bg-orbi-gold hover:bg-orbi-gold/90 text-white">
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

export default CourseDetail;
