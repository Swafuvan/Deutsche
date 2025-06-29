import Image from "next/image"
import { Icon } from "./Icons"

interface DestinationCardProps {
  image: string
  title: string
  price: string
  duration: string
}

export function DestinationCard({ image, title, price, duration }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-80 object-cover object-top"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-slate-600">{title}</h3>
          <span className="text-lg font-bold text-slate-600">{price}</span>
        </div>
        <div className="flex items-center gap-2 mb-4 text-slate-600">
          <Icon name="Navigation" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}
