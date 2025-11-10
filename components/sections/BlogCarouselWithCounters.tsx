"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const blogs = [
  {
    title: "How SabiWorks Delivers Excellence",
    image: "/images/11.jpg",
    description:
      "Discover our process for top-notch service and customer satisfaction.",
  },
  {
    title: "Customer Success Stories",
    image: "/images/12.jpg",
    description: "Read how our customers achieved their goals with SabiWorks.",
  },
  {
    title: "Tips for Efficient Assembly",
    image: "/images/13.jpg",
    description: "Expert advice for smooth and quick furniture assembly.",
  },
];

const counters = [
  { label: "Customers", value: 1200 },
  { label: "Orders", value: 3500 },
  { label: "Projects", value: 150 },
  { label: "Cities Served", value: 25 },
];

export function BlogCarouselWithCounters() {
  const [current, setCurrent] = useState(0);
  const [timerWidth, setTimerWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) % 4000;
      setTimerWidth((elapsed / 4000) * 100);
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative py-16 bg-white">
      <div className="absolute -bottom-90 md:-bottom-60 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-48 lg:h-48 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute top-30 md:-top-10 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-blue-700 rounded-full translate-x-1/2 -translate-y-1/2 hover:opacity-25 transition-all duration-700"></div>

      <div className="container mx-auto px-4">
        {/* Carousel */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-7xl h-64 md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8">
            {blogs.map((blog, idx) => (
              <div
                key={blog.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-xl"
                  priority={current === idx}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-base">{blog.description}</p>
                </div>
              </div>
            ))}
            {/* Timer Bar */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-1000"
              style={{ width: `${timerWidth}%` }}
            />
          </div>
          {/* Carousel Controls */}
          <div className="flex gap-2 mb-6">
            {blogs.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {counters.map((counter) => (
            <div
              key={counter.label}
              className="bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow"
            >
              <span className="text-3xl md:text-4xl font-bold text-blue-700">
                {counter.value.toLocaleString()}
              </span>
              <span className="mt-2 text-lg text-gray-700 font-medium">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
