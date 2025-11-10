import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="relative py-16">
      <div className="absolute top-90 md:top-90 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-48 lg:h-48 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute top-30 md:top-10 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-blue-700 rounded-full translate-x-1/2 -translate-y-1/2 hover:opacity-25 transition-all duration-700"></div>

      <div className="container mx-auto px-4 max-w-7xl ">
        <h2 className="text-3xl font-bold text-center mb-8">
          How Roader Works
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Download Roader driver app from playstore, create account use your car
          and drive by yourself. Get ride and earn more money.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Request a Trip</h3>
                <p className="text-gray-600">
                  Choose your pickup and drop-off location, and the trip type
                  that meets your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Match with a Driver</h3>
                <p className="text-gray-600">
                  Roader will match you with the nearest available driver.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Enjoy Your Trip</h3>
                <p className="text-gray-600">
                  Meet your driver with the help of our real-time GPS services
                  and enjoy your trip!
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-600 text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Pay and Rate</h3>
                <p className="text-gray-600">
                  Pay with cash or card and rate your driver.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-[800px] h-96 md:w-[800px] md:h-120">
              <Image
                src="/images/15.jpg"
                alt="Roader App Screenshot"
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
