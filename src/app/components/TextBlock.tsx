import { twMerge } from "tailwind-merge";

interface TextBlockProps {
    subtitle?: string;
    title?: string;
    description?: string;
    className?: string;
    justifyStart?: boolean;
    justifyCenter?: boolean;
}

export default function TextBlock({ subtitle, title, description, className, justifyStart, justifyCenter} : TextBlockProps) {
    return(
        <div className={twMerge("flex flex-col flex-1 justify-center space-y-2 sm:space-y-3 lg:space-y-4", justifyStart ? "justify-start" : "", justifyCenter ? "justify-center" : "", className)} >
            {subtitle && (
              <h3 className="text-green-600 font-semibold text-lg">{subtitle}</h3>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
    );
}