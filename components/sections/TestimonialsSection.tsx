import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Homeowner",
    image: "/images/11.jpg",
    quote:
      "SabiWorks made my furniture assembly so easy! The team was professional and quick. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Business Owner",
    image: "/images/12.jpg",
    quote:
      "Excellent service and attention to detail. My office move was stress-free thanks to SabiWorks.",
  },
  {
    name: "Amina Bello",
    role: "Designer",
    image: "/images/13.jpg",
    quote:
      "I love how reliable and friendly the SabiWorks team is. They always deliver top-notch results!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-linear-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover rounded-full border-4 border-blue-200"
                />
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                “{t.quote}”
              </blockquote>
              <div className="font-semibold text-blue-800">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
