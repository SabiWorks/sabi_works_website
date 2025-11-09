"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PopularProjects } from "@/components/sections/PopularProjects";
import { categories, assemblyTypes } from "@/lib/constants";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("assembly");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="relative overflow-hidden pt-20">
        {/* Decorative Elements */}
        <div className="absolute top-70 left-0 w-96 h-96 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full  translate-x-1/2 -translate-y-1/2"></div>
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

        <PopularProjects />

        {/* Bottom Image Section */}
        {/* <div className="bg-blue-100 h-64 w-full relative">
          <img
            src="/people-working-on-furniture-assembly.jpg"
            alt="Workers assembling furniture"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Decorative dots */}
        <div className="absolute bottom-1/3 right-12 space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-2 h-2 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Decorative circle */}
        <div className="absolute top-1/3 right-20 w-24 h-24 border-4 border-blue-800 rounded-full"></div>
      </main>
    </div>
  );
}
