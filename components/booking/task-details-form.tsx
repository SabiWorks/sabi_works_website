"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Truck, Home, Briefcase } from "lucide-react";
import { BookingData } from "@/app/book/[category]/page";

// Example mock sizes, might normally come from category configurations
const taskSizes = [
  {
    id: "small",
    title: "Small - Est. 1 hr",
    description: "Item fits in a car. e.g. Nightstand, chair",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: "medium",
    title: "Medium - Est. 2-3 hrs",
    description: "Item fits in a SUV. e.g. Desk, dresser",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "large",
    title: "Large - Est. 4+ hrs",
    description: "Item requires a truck. e.g. Bed frame, wardrobe",
    icon: <Truck className="h-5 w-5" />,
  },
];

interface TaskDetailsFormProps {
  initialData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

export function TaskDetailsForm({
  initialData,
  onUpdate,
  onNext,
}: TaskDetailsFormProps) {
  const [description, setDescription] = useState(initialData.description);
  const [size, setSize] = useState(initialData.size);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim().length < 10) return; // Basic validation
    onUpdate({ description, size });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-6 md:p-8">
      {/* Location Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Task Location
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your street address or zip code"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            defaultValue="123 Main St, Anytown" // Mock default for demo
          />
          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </section>

      {/* Task Size Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">How big is your task?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {taskSizes.map((tz) => (
            <div
              key={tz.id}
              onClick={() => setSize(tz.id)}
              className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                size === tz.id
                  ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div
                  className={`p-2 w-fit rounded-lg ${
                    size === tz.id
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {tz.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {tz.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {tz.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Tell us the details</h3>
        <p className="text-sm text-gray-500">
          Be as specific as possible so Taskers can give you an accurate estimate and know what tools to bring.
        </p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., I need a new IKEA MALM bed frame assembled. Please bring your own drill."
          className="w-full p-4 min-h-[150px] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-y"
          required
        />
        {description.length > 0 && description.length < 10 && (
          <p className="text-sm text-red-500">Please provide a longer description (min 10 characters).</p>
        )}
      </section>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
        <button
          type="submit"
          disabled={description.trim().length < 10}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          See Available Taskers
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
