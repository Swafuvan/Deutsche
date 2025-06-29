import { JSX } from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  highlight?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  color,
  highlight,
}: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="relative">
        {highlight ? (
          <div className="relative text-center z-10 font-poppins group shadow-lg transition-shadow duration-300 p-6 bg-white rounded-3xl">
            <div
              className={`h-20 w-auto rounded-lg flex items-center justify-center mx-auto mb-6`}
            >
              {icon}
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        ) : (
          <div className="text-center font-poppins group p-6 bg-white rounded-lg">
            <div
              className={`h-20 w-auto rounded-lg flex items-center justify-center mx-auto mb-6`}
            >
              {icon}
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        )}
        {highlight && (
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#DF6951] rounded-br-lg rounded-tl-4xl"></div>
        )}
      </div>
    </div>
  );
}
