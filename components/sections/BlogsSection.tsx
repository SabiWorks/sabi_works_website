"use client";
import Image from "next/image";
import { useTranslation } from "@/components/i18n/useTranslation";

export function BlogsSection() {
  const { t } = useTranslation();

  const blogs = [
    {
      titleKey: "blog_post_1_title",
      image: "/images/11.jpg",
      excerptKey: "blog_post_1_excerpt",
      link: "#",
    },
    {
      titleKey: "blog_post_2_title",
      image: "/images/12.jpg",
      excerptKey: "blog_post_2_excerpt",
      link: "#",
    },
    {
      titleKey: "blog_post_3_title",
      image: "/images/13.jpg",
      excerptKey: "blog_post_3_excerpt",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("latest_blogs")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.titleKey}
              className="bg-blue- rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={t(blog.titleKey)}
                  fill
                  className="object-cover overflow-hidden hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t(blog.titleKey)}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t(blog.excerptKey)}
                </p>
                <button className="inline-block hover:underline bg-blue-800 p-2 rounded-lg text-white">
                  {t("read_more")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
