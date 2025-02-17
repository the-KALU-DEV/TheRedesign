"use client";

import { twMerge } from "tailwind-merge";

interface ContentProps {
    title?: string;
    subtitle?: string;
    description?: string;
    className?: string;
    centered?: boolean;
    leftAligned?: boolean;
  }

export default function TitleSubtitle({title, subtitle, description, centered,leftAligned, className}: ContentProps) {
    return (
        <div className={twMerge( "space-y-2 p-2 md:p-4 lg:p-6", leftAligned ? "text-start" : "", centered ? "items-center text-center" : "", className)}>
            { title && <h5 className="text-green-600 text-lg font-semibold"> {title} </h5> }
            { subtitle && <h2 className="text-3xl md:text-5xl font-bold"> {subtitle} </h2> }
            { description && <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 leading relaxed">{description}</p> }
        </div>
    );
}

{/* <div className="flex flex-col flex-1 justify-start space-y-2"> text-center
            {subtitle && (
              <h3 className="text-green-600 font-semibold text-lg">{subtitle}</h3>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-700 leading-relaxed mt-4 sm:mt-6 lg:mt-8">
              {description}
            </p>
          </div> */}