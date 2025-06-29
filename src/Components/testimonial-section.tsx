import Image from "next/image";
import { Icon } from "./Icons";

export function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid lg:grid-cols-2 ">
          {/* Left side - Text */}
          <div className="top-0">
            <p className="text-[#5E6282] font-poppins text-sm font-semibold uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="text-[#14183E] font-volkhov text-4xl md:text-5xl font-bold leading-tight mb-8">
              What People Say <br /> About Us.
            </h2>

            {/* Dots */}
            <div className="flex space-x-5 mt-8">
              <span className="w-3 h-3 rounded-full bg-[#39425D]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
            </div>
          </div>

          {/* Right side - Card */}
          <div className="relative mt-10 font-poppins text-[#5E6282]">
            {/* Bottom Layer (shadow layer) */}
            <div className="absolute left-6 w-full h-full rounded-2xl border border-[#D7D7D7] opacity-70 z-0" />

            {/* Testimonial Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-lg max-w-xl">
              {/* Overlapping Profile Image */}
              <div className="absolute -top-14 -left-7">
                <Image
                  src="/images/image.png"
                  alt="Mike Taylor"
                  width={70}
                  height={70}
                  className="rounded-full border-4 border-white shadow-sm"
                />
              </div>

              {/* Text Content */}
              <div className="p-4">
                <p className=" font-medium mb-6">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <p className=" font-bold text-md">Mike taylor</p>
                <p className=" text-sm mb-6">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="mb-3 pl-16 pt-2">
              <p className=" font-bold">Chris Thomas</p>
              <p className=" text-sm">CEO of Red Button</p>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -right-18 top-24 flex flex-col gap-8">
              <button className="bg-white p-2">
                <Icon name="AngleTop" />
              </button>
              <button className="bg-white p-2">
                <Icon name="AngleBottom" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
