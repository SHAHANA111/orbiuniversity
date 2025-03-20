import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Badge } from "./ui/Badge";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export function CourseCardMaster({
  id,
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  lessons,
  instructor,
  rating,
  price,
  featured = false,
  className,
  style,
}) {
  // Generate level color based on difficulty
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  }[level];

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl transition-all duration-300",
        "bg-white border border-border shadow-sm hover:shadow-md",
        "hover:translate-y-[-4px] hover:border-orbi-200",
        featured ? "lg:col-span-2" : "",
        className
      )}
      style={style}
    >
      <div className="overflow-hidden relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <Image
          src={image}
          width={400}
          height={300}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 image-shine"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="bg-[#043455] text-white group-hover:bg-[#BD8939]"
          >
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground group-hover:text-[#E5B161]">
            By {instructor}
            <span>id : {id}</span>
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight mb-1 group-hover:text-[#043455] transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm text-balance line-clamp-2 group-hover:text-[#043455]">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 group-hover:text-[#043455]">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>

        <div className="pt-2 mt-auto">
          <Link
            href={{
              pathname: "/courseDetails",
              query: {
                mainId: id,
                title: title,
                description: description,
                image: image,
                category: category,
                level: level,
                duration: duration,
                students: students,
                lessons: lessons,
                instructor: instructor,
                rating: rating,
                price: price,
              },
            }}
          >
            <button className="inline-flex items-center text-sm font-medium text-orbi-700 group-hover:text-[#BD8939]">
              View Course
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// PropTypes for validation
CourseCardMaster.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  level: PropTypes.oneOf(["Beginner", "Intermediate", "Advanced"]).isRequired,
  duration: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
  lessons: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CourseCardMaster;
