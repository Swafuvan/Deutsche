import type { LucideIcon } from "lucide-react"
import { JSX } from "react"

interface BookingStepProps {
  icon: JSX.Element
  title: string
  description: string
  color: string
}

export function BookingStep({ icon, title, description, color }: BookingStepProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
