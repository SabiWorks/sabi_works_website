"use client";

import { useMemo } from "react";
import { BookingHeader } from "./booking-header";

interface WizardLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  category?: string;
}

export function WizardLayout({
  children,
  currentStep,
  totalSteps,
  title,
  subtitle,
  category,
}: WizardLayoutProps) {
  const progress = useMemo(() => {
    return (currentStep / totalSteps) * 100;
  }, [currentStep, totalSteps]);

  // Format category name (e.g., "furniture-assembly" -> "Furniture Assembly")
  const formattedCategory = useMemo(() => {
    if (!category) return "";
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 flex flex-col">
      <BookingHeader />

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 h-2">
        <div
          className="bg-blue-600 h-2 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-8 max-w-4xl py-8 md:py-12 flex flex-col gap-6">
        <div className="space-y-2 text-center md:text-left">
          {formattedCategory && (
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {formattedCategory}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-950 border rounded-xl shadow-sm overflow-hidden mt-4">
          {children}
        </div>
      </main>
    </div>
  );
}
