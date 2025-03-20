"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/router";

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
//       setSearchQuery("");
//     }
//   };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (      
    <nav
      className= "z-50 py-4 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200" 
    >
      <div className=" px-4 mx-auto flex justify-between items-center">     
        <Link href="/" className="flex items-center">
          <span className="font-display text-2xl font-bold text-[#043455]">
            Orbi<span className="text-[#BD8939]">University</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-medium text-sm text-[#043455] hover:text-[#BD8939] transition-colors">
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-4">
            <Link href="/login" className="font-medium text-sm text-[#043455] hover:text-[#BD8939] transition-colors">
              Login
            </Link>
            <Link href="/signup" className="font-medium text-sm px-4 py-2 rounded-lg bg-[#043455] text-white hover:bg-[#BD8939]/90 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-[#043455]" /> : <Menu className="h-6 w-6 text-[#043455]" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-medium text-[#043455] hover:text-[#BD8939] py-2 transition-colors" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
              <Link href="/login" className="font-medium text-[#043455] hover:text-[#BD8939] py-2 transition-colors" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/signup" className="font-medium px-4 py-2 text-center rounded-lg bg-[#043455] text-white hover:bg-[#043455]/90 transition-colors" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
