"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("assembly");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "assembly", label: "Assembly", icon: "🔧" },
    { id: "mounting", label: "Mounting", icon: "📌" },
    { id: "moving", label: "Moving", icon: "📦" },
    { id: "cleaning", label: "Cleaning", icon: "🧹" },
    { id: "outdoor", label: "Outdoor Help", icon: "🌳" },
    { id: "repairs", label: "Home Repairs", icon: "🔨" },
    { id: "painting", label: "Painting", icon: "🎨" },
    { id: "trending", label: "Trending", icon: "🔥" },
  ];

  const assemblyTypes = [
    "General Furniture Assembly",
    "IKEA Assembly",
    "Crib Assembly",
    "PAX Assembly",
    "Bookshelf Assembly",
    "Desk Assembly",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-teal-600">
            <span className="text-teal-600">⟳</span> SabiWorks
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <button className="text-gray-900 font-medium hover:text-teal-600">
            Services
          </button>
          <button className="text-gray-900 font-medium hover:text-teal-600">
            Sign up / Log in
          </button>
          <button className="px-6 py-2 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50">
            Become a Tasker
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 border-l-8 border-purple-400 opacity-30"></div>

        {/* IKEA Logo */}
        <div className="absolute left-12 top-20 p-3 border-2 border-gray-900 bg-white">
          <div className="text-xs font-bold text-gray-900 mb-1">
            Assembly service
            <br />
            provided for
          </div>
          <div className="bg-yellow-400 px-3 py-1 text-blue-900 font-bold text-sm">
            IKEA
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-8 py-20 relative z-10">
          <h1 className="text-6xl font-bold text-gray-900 text-center mb-16">
            Book trusted help
            <br />
            for home tasks
          </h1>

          {/* Search Bar */}
          <div className="flex gap-2 mb-20 justify-center">
            <input
              type="text"
              placeholder="What do you need help with?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 max-w-xl px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-600"
            />
            <button className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>

          {/* Category Icons */}
          <div className="flex justify-center gap-12 mb-20 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 transition-colors ${
                  activeCategory === category.id
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${
                    activeCategory === category.id
                      ? "bg-blue-100 text-2xl"
                      : "text-3xl"
                  }`}
                >
                  {category.icon === "🔧" ? (
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  ) : (
                    category.icon
                  )}
                </div>
                <span
                  className={`text-sm font-medium ${
                    activeCategory === category.id
                      ? "text-teal-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {category.label}
                </span>
                {activeCategory === category.id && (
                  <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Assembly Type Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {assemblyTypes.map((type) => (
              <button
                key={type}
                className="px-6 py-2 border-2 border-gray-400 text-gray-900 rounded-full hover:border-teal-600 hover:text-teal-600 transition-colors font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="bg-blue-100 h-64 w-full relative">
          <img
            src="/people-working-on-furniture-assembly.jpg"
            alt="Workers assembling furniture"
            className="w-full h-full object-cover"
          />
        </div>

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
        <div className="absolute top-1/3 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
      </main>
    </div>
  );
}
