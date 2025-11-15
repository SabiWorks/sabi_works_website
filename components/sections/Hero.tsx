import { Search } from "lucide-react";
import { Category } from "@/types/category";
import { useTranslation } from "@/components/i18n/useTranslation";

interface HeroProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categories: Category[];
  assemblyTypes: string[];
}

export function Hero({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  categories,
  assemblyTypes,
}: HeroProps) {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto px-8 py-20 relative z-10">
      <h1 className="text-6xl font-bold text-gray-900 text-center mb-16">
        {t("hero_title_1")}
        <br />
        {t("hero_title_2")}
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-20 justify-center">
        <input
          type="text"
          placeholder={t("hero_search_placeholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-xl px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-600"
        />
        <button className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors">
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Category Icons */}
      <div className="mb-20">
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-6 px-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 transition-all duration-200 shrink-0 ${
                  activeCategory === category.id
                    ? "text-blue-600 scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:scale-105"
                }`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-100 shadow-lg"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {category.icon === "🔧" ? (
                    <svg
                      className="w-6 h-6 text-blue-800"
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
                    <span className="text-2xl">{category.icon}</span>
                  )}
                </div>
                <span
                  className={`text-xs font-medium text-center whitespace-nowrap ${
                    activeCategory === category.id
                      ? "text-blue-800 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {t(category.label)}
                </span>
                {activeCategory === category.id && (
                  <div className="h-0.5 w-8 bg-blue-800 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:flex justify-center gap-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center gap-2 transition-colors ${
                activeCategory === category.id
                  ? "text-blue-600"
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
                    className="w-8 h-8 text-blue-800"
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
                    ? "text-blue-800 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {t(category.label)}
              </span>
              {activeCategory === category.id && (
                <div className="h-1 w-12 bg-blue-800 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Assembly Type Buttons */}
      <div className="mb-20">
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-3 px-4 min-w-max">
            {assemblyTypes.map((type) => (
              <button
                key={type}
                className="px-4 py-2 border-2 border-gray-400 text-gray-900 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium whitespace-nowrap shrink-0 hover:scale-105"
              >
                {t(type)}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Flex Wrap */}
        <div className="hidden md:flex flex-wrap gap-4 justify-center">
          {assemblyTypes.map((type) => (
            <button
              key={type}
              className="px-6 py-2 border-2 border-gray-400 text-gray-900 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
            >
              {t(type)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
