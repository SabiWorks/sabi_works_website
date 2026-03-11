"use client";
import Image from "next/image";
import { useTranslation } from "@/components/i18n/useTranslation";

export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quoteKey: "testimonial_1_quote",
      nameKey: "testimonial_1_name",
      roleKey: "testimonial_1_role",
      image: "/images/11.jpg",
    },
    {
      quoteKey: "testimonial_2_quote",
      nameKey: "testimonial_2_name",
      roleKey: "testimonial_2_role",
      image: "/images/12.jpg",
    },
    {
      quoteKey: "testimonial_3_quote",
      nameKey: "testimonial_3_name",
      roleKey: "testimonial_3_role",
      image: "/images/13.jpg",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("testimonials_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.nameKey}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-36 h-36 mb-4 relative">
                <Image
                  src={item.image}
                  alt={t(item.nameKey)}
                  fill
                  className="object-cover rounded-3xl border-blue-200 dark:border-gray-700 shadow-blue-400 dark:shadow-gray-700 shadow-lg"
                />
              </div>
              <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4">
                "{t(item.quoteKey)}"
              </blockquote>
              <div className="font-semibold text-blue-800 dark:text-blue-400">
                {t(item.nameKey)}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t(item.roleKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
