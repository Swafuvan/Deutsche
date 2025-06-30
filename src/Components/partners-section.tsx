import { Icon } from "./Icons";

const partners = [
  {
    name: "Axon Airlines",
    logo: <Icon name="SubBrand_1" className="w-32 h-32" />,
  },
  { name: "Jetstar", logo: <Icon name="SubBrand_2" className="w-32 h-32" /> },
  { name: "Expedia", logo: <Icon name="SubBrand_3" className="w-36 h-36" /> },
  { name: "Qantas", logo: <Icon name="SubBrand_4" className="w-32 h-32" /> },
  { name: "Alitalia", logo: <Icon name="SubBrand_5" className="w-32 h-32" /> },
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 md:mx-20 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === 2 ? "" : "grayscale hover:grayscale-0"
              }`}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
