"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Calendar as CalendarIcon, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { BookingData } from "@/app/book/[category]/page";
import "react-day-picker/dist/style.css";

const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Evening (4pm - 8pm)",
];

interface DateSelectionFormProps {
  initialData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function DateSelectionForm({
  initialData,
  onUpdate,
  onNext,
  onBack,
}: DateSelectionFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    initialData.date || undefined
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(
    initialData.timeSlot
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) return;
    onUpdate({ date: selectedDate, timeSlot: selectedTimeSlot });
    onNext();
  };

  const isComplete = selectedDate && selectedTimeSlot;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Date Picker Section */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-blue-600" />
            Pick a Date
          </h3>
          <div className="flex justify-center border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50 dark:bg-gray-900/50">
             {/* Note: In a real app we'd style react-day-picker to match Tailwind, but standard styles applied via CSS import for now */}
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={[{ before: new Date() }]} // Disable past dates
              className="bg-transparent"
              modifiersClassNames={{
                selected: "bg-blue-600 text-white font-bold rounded-full !important",
                today: "text-blue-600 font-bold",
              }}
            />
          </div>
        </section>

        {/* Time Slot Section */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Pick a Time
          </h3>
          <div className="flex flex-col gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTimeSlot(slot)}
                className={`text-left px-6 py-4 rounded-xl border-2 transition-all ${
                  selectedTimeSlot === slot
                    ? "border-blue-600 bg-blue-50/50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{slot}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedTimeSlot === slot
                        ? "border-blue-600"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {selectedTimeSlot === slot && (
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {selectedDate && selectedTimeSlot && (
            <div className="mt-8 p-4 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-lg text-sm flex gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <p>
                    You've selected <strong>{selectedTimeSlot}</strong> on <strong>{format(selectedDate, "EEEE, MMMM do")}</strong>. 
                </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
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
          disabled={!isComplete}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          See Available Taskers
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
