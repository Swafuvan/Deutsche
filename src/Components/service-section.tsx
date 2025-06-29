import { ServiceCard } from "@/Components/service-card"
import { Icon } from "./Icons"

const services = [
  {
    icon: <Icon name="Wheather" />,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Icon name="Flight" className="w-40 h-40" />,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    color: "bg-blue-100 text-blue-600",
    highlight:true
  },
  {
    icon: <Icon name="Mike" className="w-20 h-20" />,
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <Icon name="Settings" />,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
    color: "bg-gray-100 text-gray-600",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 ">
      <div className="absolute top-10 right-0 z-0">
        <Icon name="Plus_Decore" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-slate-500 font-semibold text-lg uppercase tracking-wide mb-4">Category</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid mx-20 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
