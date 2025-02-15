import { cn } from "../../../src/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
}

export default function FlipCard({ image, title, className, ...props }: FlipCardProps) {
  return (
    <div className={cn("group relative h-72 w-56 overflow-hidden rounded-2xl", className)} {...props}>
      {/* Image fades out on hover */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Title starts at bottom-left and moves to center on hover */}
      <div
        className={cn(
          "absolute left-4 bottom-4 text-xl font-bold text-white transition-all duration-500",
          "group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
        )}
      >
        {title}
      </div>
    </div>
  );
}
