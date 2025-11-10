"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PopularProjects } from "@/components/sections/PopularProjects";
import { Footer } from "@/components/layout/Footer";
import { categories, assemblyTypes } from "@/lib/constants";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BlogCarouselWithCounters } from "@/components/sections/BlogCarouselWithCounters";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("assembly");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="relative overflow-hidden pt-20">
        {/* Decorative Elements */}
        <div className="absolute top-90 md:top-90 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 hover:opacity-30 transition-all duration-500"></div>
        <div className="absolute top-30 md:top-10 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-96 lg:h-96 bg-blue-700 rounded-full translate-x-1/2 -translate-y-1/2 hover:opacity-25 transition-all duration-700"></div>
        {/* <div className="absolute bottom-0 left-1/4 w-32 h-32 border-l-8 border-purple-400 opacity-30"></div> */}

        {/* IKEA Logo */}
        {/* <div className="absolute left-12 top-20 p-3 border-2 border-gray-900 bg-white">
          <div className="text-xs font-bold text-gray-900 mb-1">
            Assembly service
            <br />
            provided for
          </div>
          <div className="bg-yellow-400 px-3 py-1 text-blue-900 font-bold text-sm">
            IKEA
          </div>
        </div> */}

        <Hero
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
          assemblyTypes={assemblyTypes}
        />

        <BlogCarouselWithCounters />

        <PopularProjects />

        <HowItWorks />

        {/* Bottom Image Section */}
        {/* <div className="bg-blue-100 h-64 w-full relative">
          <img
            src="/people-working-on-furniture-assembly.jpg"
            alt="Workers assembling furniture"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Decorative dots */}
        <div className="hidden sm:block absolute bottom-1/3 right-4 sm:right-12 space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${(i * 3 + j) * 0.1}s` }}
                ></div>
              ))}
            </div>
          ))}
        </div>

        {/* Decorative circle */}
        <div
          className="hidden md:block absolute top-1/3 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 border-2 lg:border-4 border-blue-600 rounded-full opacity-30 hover:opacity-50 transition-all duration-300 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </main>

      <Footer />
    </div>
  );
}
