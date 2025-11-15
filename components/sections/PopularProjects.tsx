import { Star, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/components/i18n/useTranslation";

interface PopularProject {
  id: string;
  providerName: string;
  role: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  isFavorite: boolean;
  image?: string;
}

const popularProjects: PopularProject[] = [
  {
    id: "1",
    providerName: "Bereket Melese",
    role: "Furniture Assembly Specialist",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 127,
    description:
      "Expert in IKEA and custom furniture assembly. Fast, reliable, and meticulous work...",
    isFavorite: false,
    image: "/images/11.jpg",
  },
  {
    id: "2",
    providerName: "Mulualem Tarekegn",
    role: "Home Cleaning Pro",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 89,
    description:
      "Deep cleaning specialist with 5+ years experience. Eco-friendly products and attention to detail...",
    isFavorite: true,
    image: "/images/12.jpg",
  },
  {
    id: "3",
    providerName: "Bereket Alemayehu",
    role: "Moving & Mounting Expert",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 156,
    description:
      "Professional mover and TV mounting specialist. Safe handling of all your belongings...",
    isFavorite: false,
    image: "/images/13.jpg",
  },
  {
    id: "4",
    providerName: "Yohannes Alemu",
    role: "Outdoor Help Specialist",
    location: "Austin, TX",
    rating: 4.9,
    reviewCount: 73,
    description:
      "Gardening and outdoor maintenance expert. From lawn care to seasonal cleanups...",
    isFavorite: true,
    image: "/images/14.jpg",
  },
];

export function PopularProjects() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("popular_projects")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("popular_projects_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Provider Image/Avatar */}
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-48 bg-cover bg-center hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart
                    className={`w-5 h-5 ${
                      project.isFavorite
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {project.providerName}
                    </h3>
                    <p className="text-sm text-blue-800 font-medium">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(project.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {project.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({project.reviewCount} {t("reviews")})
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {project.location}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <Link href={`/profile/${project.id}`}>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium">
                    {t("view_profile")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors font-medium">
            {t("view_all_professionals")}
          </button>
        </div>
      </div>
    </section>
  );
}
