"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { WizardLayout } from "@/components/booking/wizard-layout";
import { TaskDetailsForm } from "@/components/booking/task-details-form";
import { DateSelectionForm } from "@/components/booking/date-selection-form";
import { TaskerSelection } from "@/components/booking/tasker-selection";
import { ReviewBooking } from "@/components/booking/review-booking";
import { toast } from "sonner"; // If you're using sonner, it's in package.json

// Mock data types
export type BookingData = {
  description: string;
  size: string;
  date: Date | null;
  timeSlot: string;
  taskerId: string | null;
};

const initialData: BookingData = {
  description: "",
  size: "medium",
  date: null,
  timeSlot: "",
  taskerId: null,
};

export default function BookCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>(initialData);

  const totalSteps = 4;

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateData = (fields: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...fields }));
  };

  const handleConfirm = () => {
    toast.success("Booking Confirmed!", {
      description: "Check your dashboard for updates.",
    });
    // Redirect to dashboard or success page after brief delay
    setTimeout(() => {
      router.push("/"); // Back to home for demo
    }, 2000);
  };

  // Determine title based on step
  const getStepData = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Tell us about your task",
          subtitle: "Help us understand what you need done so we can match you with the right Tasker."
        };
      case 2:
        return {
          title: "When do you need it?",
          subtitle: "Choose a date and time that works for you."
        };
      case 3:
        return {
          title: "Choose a Tasker",
          subtitle: "Browse available Taskers in your area and select the best fit."
        };
      case 4:
        return {
          title: "Review & Confirm",
          subtitle: "Please review your task details before confirming your booking."
        };
      default:
        return { title: "", subtitle: "" };
    }
  };

  const stepMeta = getStepData();

  return (
    <WizardLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      title={stepMeta.title}
      subtitle={stepMeta.subtitle}
      category={category}
    >
        {/* Step Content routing */}
        {currentStep === 1 && (
          <TaskDetailsForm
            initialData={bookingData}
            onUpdate={updateData}
            onNext={handleNext}
          />
        )}
        
        {currentStep === 2 && (
          <DateSelectionForm
            initialData={bookingData}
            onUpdate={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <TaskerSelection
             initialData={bookingData}
             onUpdate={updateData}
             onNext={handleNext}
             onBack={handleBack}
          />
        )}

        {currentStep === 4 && (
          <ReviewBooking
             data={bookingData}
             category={category}
             onConfirm={handleConfirm}
             onBack={handleBack}
          />
        )}
    </WizardLayout>
  );
}
