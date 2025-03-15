import React from "react";
import './styles.css';
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import logo from "../../public/assets/orbi-logo.jpg";


const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 blue-color rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">OrbiUniversity</span> */}
            <Image className="w-50 h-10 " src={logo} alt="logo" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="ml-3 links-pointer mr-5 text-xl hover:text-gray-900">Home</Link>
            <Link href="/categories" className="ml-3 links-pointer mr-5 text-xl hover:text-gray-900">Categories</Link>
            {/* <a className="links-pointer mr-5 hover:text-gray-900">Third Link</a>
            <a className="links-pointer mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <div className="flex items-center bg-white border-2 border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:border-[#043455] transition">
      <input
        type="text"
        placeholder="Search courses..."
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
      />
      <button className="links-pointer bg-[#043455] text-white p-2 rounded-full">
        <FaSearch />
      </button>
    </div>

          <button className="buttons-col inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
