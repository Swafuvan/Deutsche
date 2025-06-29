import { DestinationCard } from "@/Components/destination-card"
import { Icon } from "./Icons"

const destinations = [
  {
    image: "/images/destination-2.png",
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
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">Top Selling</p>
          <h2 className="text-4xl font-volkhov font-bold text-slate-900 mt-2">Top Destinations</h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-32 relative z-10">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>

      {/* Decorative Spiral on Right */}
      <div className="absolute top-85 right-0 lg:right-20 z-0 opacity-90">
        <Icon name="Decore" />
      </div>
    </section>
  )
}
