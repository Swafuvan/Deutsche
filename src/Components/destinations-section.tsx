import { DestinationCard } from "@/Components/destination-card"
import { Icon } from "./Icons"

const destinations = [
  {
    image: "/images/destination-2.png" ,
    title: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: "/images/destination.png",
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: "/images/destination-3.png",
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
]

export function DestinationsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <p className="text-slate-500 font-semibold font-poppins text-lg tracking-wide mb-4">Top Selling</p>
          <h2 className="text-3xl font-bold tracking-tight font-volkhov sm:text-4xl md:text-5xl md:mb-16 text-slate-900">Top Destinations</h2>
        </div>

        <div className="grid gap-8  md:grid-cols-2 md:px-32 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  )
}
