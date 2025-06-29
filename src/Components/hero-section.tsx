import { Button } from "@/Components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { Header } from "./header";
import { Icon } from "./Icons";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden ">
      {/* === Transparent Header on top === */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* === Right-side background decoration === */}
      <div className="absolute top-0 right-0 w-[45%] h-[81%] z-0">
        <Image
          src="/images/Decore.png"
          alt="Background curve"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 w-full pl-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] items-center lg:gap-6">
          {/* === Left Side: Text === */}
          <div className="flex flex-col w-full md:ml-10 justify-center space-y-6">
            <div className="space-y-2 ">
              <p className="text-orange-500 font-bold font-poppins text-lg uppercase">
                Best destinations around the world
              </p>
              <h1 className="text-[#151a48] w-full font-volkhov font-bold tracking-tighter sm:text-4xl lg:text-[75px]">
                Travel,{" "}
                <span className="relative inline-block">
                  enjoy
                  <span className="absolute -left-10 bottom-2 -z-10 rounded-full">
                    <Icon name="Sketch" />
                  </span>
                </span>{" "}
                and live a new and full life
              </h1>
              <p className="text-[#5E6282] max-w-lg font-poppins text-md leading-relaxed font-medium">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-6 py-6 rounded-xl shadow-md">
                Find out more
              </Button>
              <button className="flex items-center gap-3 text-[#5E6282] font-semibold hover:text-black">
                <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                Play Demo
              </button>
            </div>
          </div>

          {/* === Right Side: Image === */}
          <div className="relative flex md:mt-20 justify-center lg:justify-end">
            <Icon name="Main_image" />
          </div>
        </div>
      </div>
    </section>
  );
}
