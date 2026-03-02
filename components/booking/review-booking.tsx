"use client";

import { CheckCircle2, MapPin, Calendar, Clock, CreditCard, ArrowLeft } from "lucide-react";
import { BookingData } from "@/app/book/[category]/page";
import { format } from "date-fns";
import Image from "next/image";

// Mock data (same as Step 3 to resolve details, ideally this would come from a context/API)
const MOCK_TASKERS = [
  {
    id: "t1",
    name: "Michael R.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    rate: 45,
  },
  {
    id: "t2",
    name: "Sarah L.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rate: 38,
  },
  {
    id: "t3",
    name: "David K.",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    rate: 55,
  },
];

interface ReviewBookingProps {
  data: BookingData;
  category: string;
  onBack: () => void;
  onConfirm: () => void;
}

export function ReviewBooking({
  data,
  category,
  onBack,
  onConfirm,
}: ReviewBookingProps) {
  const selectedTasker = MOCK_TASKERS.find((t) => t.id === data.taskerId);
  const estimatedHours = data.size === "small" ? 1 : data.size === "medium" ? 2.5 : 4;
  const subtotal = selectedTasker ? selectedTasker.rate * estimatedHours : 0;
  const trustAndSupportFee = subtotal * 0.15; // Mock 15% fee
  const total = subtotal + trustAndSupportFee;

  return (
    <div className="flex flex-col h-full bg-gray-50/50 dark:bg-gray-900/20">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-xl">
        
        {/* Left Col: Task Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Location & Time */}
          <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 border-b pb-4 dark:border-gray-800">Task Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">123 Main St, Anytown</p>
                  <p className="text-sm text-gray-500">MOCK LOCATION</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {data.date ? format(data.date, "EEEE, MMMM do, yyyy") : "Date not set"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{data.timeSlot || "Time not set"}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 border-b pb-4 dark:border-gray-800">Task Description</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap flex items-start gap-4">
               {data.description}
            </p>
          </section>

          {/* Payment */}
          <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4 border-b pb-4 dark:border-gray-800">
               <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  Payment Method
               </h3>
               <button className="text-blue-600 text-sm font-medium hover:underline">Edit</button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-gray-500">VISA</div>
                  <div>
                     <p className="font-medium text-gray-900 dark:text-white">Visa ending in 4242</p>
                     <p className="text-xs text-gray-500">Expires 12/26</p>
                  </div>
               </div>
               <CheckCircle2 className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
               You won't be charged until the task is complete.
            </p>
          </section>
        </div>

        {/* Right Col: Summary & Tasker */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
            
            {selectedTasker && (
               <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                     <Image
                        src={selectedTasker.avatar}
                        alt={selectedTasker.name}
                        fill
                        className="object-cover"
                     />
                  </div>
                  <div>
                     <p className="font-medium text-gray-900 dark:text-white text-sm">Selected Tasker</p>
                     <p className="font-bold">{selectedTasker.name}</p>
                  </div>
               </div>
            )}

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
               <div className="flex justify-between">
                  <span>Hourly Rate</span>
                  <span className="font-medium text-gray-900 dark:text-white">${selectedTasker?.rate.toFixed(2)}/hr</span>
               </div>
               <div className="flex justify-between">
                  <span>Estimated Duration</span>
                  <span className="font-medium text-gray-900 dark:text-white">{estimatedHours} hrs</span>
               </div>
               <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-gray-500">
                  <span>Trust & Support Fee (15%)</span>
                  <span>${trustAndSupportFee.toFixed(2)}</span>
               </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Estimated Total</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
               </div>
               
               <button
                  onClick={onConfirm}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
               >
                  <CheckCircle2 className="h-5 w-5" />
                  Confirm Booking
               </button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 md:p-8 flex justify-between items-center bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition flex items-center gap-2 px-4 py-2"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>
    </div>
  );
}
