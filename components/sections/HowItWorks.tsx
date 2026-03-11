"use client";
import Image from "next/image";
import { useTranslation } from "@/components/i18n/useTranslation";

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      key: "request_trip",
      descKey: "request_trip_desc",
    },
    {
      key: "match_driver",
      descKey: "match_driver_desc",
    },
    {
      key: "enjoy_trip",
      descKey: "enjoy_trip_desc",
    },
    {
      key: "pay_and_rate",
      descKey: "pay_and_rate_desc",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute top-90 md:top-90 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-48 lg:h-48 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute top-30 md:top-10 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-blue-700 rounded-full translate-x-1/2 -translate-y-1/2 hover:opacity-25 transition-all duration-700"></div>

      <div className="container mx-auto px-4 max-w-7xl ">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("how_it_works")}
        </h2>
        <p className="text-center dark:text-gray-300 mb-12">
          {t("how_it_works_desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.key} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full shrink-0">
                  <span className="text-blue-600 text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t(step.key)}</h3>
                  <p className="dark:text-gray-300">{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-[800px] h-96 md:w-[800px] md:h-120">
              <Image
                src="/images/15.jpg"
                alt="SabiWorks App Screenshot"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
