"use client"

import { useRef, ReactNode } from "react";

interface ContainerProps {
  cols?: "1" | "2" | "3" | "4";
  header?: ReactNode;
  children: ReactNode;
}

export default function Container({ cols = "1", header, children }: ContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Tailwind grid classes based on the cols prop
  const gridCols: Record<string, string> = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
  };

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      {header && <div className="mb-6">{header}</div>}

      {/* Dynamic Grid Layout */}
      <div className={`grid ${gridCols[cols] || "grid-cols-1"} gap-6`}>{children}</div>
    </div>
  );
}
