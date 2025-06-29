import { BookingStep } from "@/Components/booking-step";
import Image from "next/image";
import { Icon } from "./Icons";

const steps = [
  {
    icon: <Icon name="Destination" />,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-yellow-500",
  },
  {
    icon: <Icon name="Payment" />,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-orange-500",
  },
  {
    icon: <Icon name="Airport" />,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-blue-500",
  },
];

export function BookingStepsSection() {
  return (
    <section className="py-12 md:py-18 lg:py-20 overflow-hidden bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT SIDE */}
          <div className="lg:ml-20">
            <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-4">
              Easy and Fast
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#14183E] mb-10">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <BookingStep key={index} {...step} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative font-poppins">
            {/* Main Card */}
            <div  className="bg-white rounded-3xl md:ml-16 p-6 w-90 mx-auto relative z-10">
              <Image
                src="/images/booking-side.png"
                alt="Trip to Greece"
                width={320}
                height={200}
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-bold text-[#14183E]">
                Trip To Greece
              </h3>
              <p className="text-[#5E6282] text-sm mt-1 mb-4">
                14-29 June &nbsp;|&nbsp; by Robbin joe
              </p>

              <div className="flex flex-col gap-6 ">
                {/* Icons */}
                <div className="flex gap-3 text-gray-400">
                  <Icon name="Leaf" />
                  <Icon name="Map" />
                  <Icon name="Send" />
                </div>
                <div className="text-[#5E6282] text-sm flex items-center justify-between gap-1">
                  <div className="flex gap-1">
                    <Icon name="Building" />
                    24 people going
                  </div>
                  <Icon name="Love" className="text-[#8A79DF]" />
                </div>
              </div>
            </div>

            {/* Floating Progress Card */}
            <div className="absolute right-16 bottom-12 bg-white rounded-2xl shadow-lg p-4 w-64 z-20">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Mosque" />
                <div>
                  <p className="text-[#5E6282] text-sm">Ongoing</p>
                  <h4 className="text-[#14183E] font-bold">Trip to rome</h4>
                </div>
              </div>

              <div className="ml-13">
                <p className="text-sm text-[#8A79DF] font-semibold mb-1">
                  40% completed
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-[#8A79DF] h-2 rounded-full w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
