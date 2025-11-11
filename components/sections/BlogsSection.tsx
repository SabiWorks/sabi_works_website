import Image from "next/image";

const blogs = [
  {
    title: "5 Tips for Hassle-Free Furniture Assembly",
    image: "/images/11.jpg",
    excerpt:
      "Learn how to make your next furniture assembly project smooth and stress-free with these expert tips.",
    link: "#",
  },
  {
    title: "Moving Made Easy: SabiWorks Success Stories",
    image: "/images/12.jpg",
    excerpt:
      "Discover how SabiWorks helped customers move with ease and confidence in cities across the country.",
    link: "#",
  },
  {
    title: "Why Professional Help Matters",
    image: "/images/13.jpg",
    excerpt:
      "Find out why hiring professionals for home tasks can save you time, money, and headaches.",
    link: "#",
  },
];

export function BlogsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="bg-blue- rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover overflow-hidden hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <button
                  //   href={blog.link}
                  className="inline-block hover:underline bg-blue-800 p-2 rounded-lg text-white"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
