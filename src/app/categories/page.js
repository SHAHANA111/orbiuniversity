import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category1 from "@/components/Category1";

const categoriesArr = ["Web Development", "Design", "Marketing", "Business"];

const categories = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
          <Header />
          <Category1 />
          <Footer />
        </div>
      );
}

export default categories
