"use client";

import { useState } from "react";
import { Star, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { BookingData } from "@/app/book/[category]/page";
import Image from "next/image";

// Mock data for Taskers
const MOCK_TASKERS = [
  {
    id: "t1",
    name: "Michael R.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    rate: 45,
    rating: 4.9,
    reviews: 124,
    completedTasks: 342,
    skills: ["Furniture Assembly", "Mounting", "Moving Help"],
    bio: "I have my own tools and a truck. I work fast and make sure everything is perfect before I leave.",
    badge: "Elite Tasker",
  },
  {
    id: "t2",
    name: "Sarah L.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rate: 38,
    rating: 4.8,
    reviews: 89,
    completedTasks: 156,
    skills: ["Cleaning", "Organization", "Yard Work"],
    bio: "Detail-oriented and efficient. I treat your home with the same care I treat mine.",
    badge: "Great Value",
  },
  {
    id: "t3",
    name: "David K.",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    rate: 55,
    rating: 5.0,
    reviews: 210,
    completedTasks: 512,
    skills: ["Plumbing", "Electrical", "Carpentry"],
    bio: "Licensed handyman with 15+ years of experience. No job is too complex.",
    badge: "Highly Requested",
  },
];

interface TaskerSelectionProps {
  initialData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TaskerSelection({
  initialData,
  onUpdate,
  onNext,
  onBack,
}: TaskerSelectionProps) {
  const [selectedTasker, setSelectedTasker] = useState<string | null>(
    initialData.taskerId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTasker) return;
    onUpdate({ taskerId: selectedTasker });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Available Taskers</h3>
          <span className="text-sm text-gray-500">
            Showing {MOCK_TASKERS.length} results
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {MOCK_TASKERS.map((tasker) => (
            <div
              key={tasker.id}
              onClick={() => setSelectedTasker(tasker.id)}
              className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all ${
                selectedTasker === tasker.id
                  ? "border-blue-600 bg-blue-50/30 dark:bg-blue-900/10 shadow-md"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {/* Badge */}
              {tasker.badge && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {tasker.badge}
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar & Rate */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-sm">
                    <Image
                      src={tasker.avatar}
                      alt={tasker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${tasker.rate}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      / hour
                    </p>
                  </div>
                  
                  {/* Select button for mobile */}
                  <button
                    type="button"
                    className={`md:hidden w-full py-2 rounded-lg font-medium text-sm transition-colors ${
                       selectedTasker === tasker.id
                         ? "bg-blue-600 text-white"
                         : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                     {selectedTasker === tasker.id ? "Selected" : "Select"}
                  </button>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {tasker.name}
                        {selectedTasker === tasker.id && (
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        )}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {tasker.rating}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            ({tasker.reviews})
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                           <CheckCircle2 className="h-4 w-4" />
                           {tasker.completedTasks} tasks
                        </div>
                      </div>
                    </div>
                    {/* Select button for desktop */}
                    <button
                        type="button"
                        className={`hidden md:block px-6 py-2 rounded-lg font-medium transition-colors ${
                        selectedTasker === tasker.id
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        {selectedTasker === tasker.id ? "Selected" : "Select"}
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                    "{tasker.bio}"
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {tasker.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 md:p-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition flex items-center gap-2 px-4 py-2"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <button
          type="submit"
          disabled={!selectedTasker}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Review Task
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
