// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";

// type MotionButtonProps = {
//   children: React.ReactNode;
//   onClickAction?: () => void; // renamed from onClick
//   className?: string;
//   muted?: boolean;
//   icon?: string | React.ReactNode; // can be a string path or a React node
//   iconPosition?: "left" | "right";
// };

// export default function StyledButton({
//   children,
//   onClickAction,
//   className,
//   muted,
//   icon,
//   iconPosition = "left",
// }: MotionButtonProps) {
//   // If icon is a string, render it as an Image. Otherwise, render the provided node.
//   const renderIcon = () => {
//     if (!icon) return null;
//     if (typeof icon === "string") {
//       return <Image src={icon} alt="Icon" width={16} height={16} />;
//     }
//     return icon;
//   };

//   return (
//     <motion.button
//       initial={{
//         backgroundColor: muted ? "#e5e7eb" : "#22c55e",
//         color: muted ? "#374151" : "#fff",
//       }}
//       whileHover={{
//         backgroundColor: muted ? "#d1d5db" : "#000",
//         color: muted ? "#4b5563" : "#fff",
//         transition: { duration: 0.2, ease: "easeIn" },
//       }}
//       whileTap={{ scale: 1.03 }}
//       onClick={onClickAction}
//       className={twMerge(
//         "px-4 py-2 rounded-full w-full xl:w-auto shadow-none inline-flex items-center justify-center",
//         muted ? "bg-gray-200 text-gray-700" : "bg-green-500 text-white",
//         className
//       )}
//     >
//       {/* If icon is on the left */}
//       {icon && iconPosition === "left" && (
//         <span className="flex items-center px-2 justify-center">
//           {renderIcon()}
//         </span>
//       )}

//       {children}

//       {/* If icon is on the right */}
//       {icon && iconPosition === "right" && (
//         <span className="ml-2 flex items-center justify-center">
//           {renderIcon()}
//         </span>
//       )}
//     </motion.button>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type MotionButtonProps = {
  children: React.ReactNode;
  onClickAction?: () => void; 
  className?: string;
  muted?: boolean;
  icon?: string | React.ReactNode;
  iconPosition?: "left" | "right";
};

export default function StyledButton({
  children,
  onClickAction,
  className,
  muted,
  icon,
  iconPosition = "left",
}: MotionButtonProps) {

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <Image src={icon} alt="Icon" width={16} height={16} />;
    }
    return icon;
  };

  return (
    <motion.button
      initial={{
        backgroundColor: muted ? "#e5e7eb" : "#22c55e",
        color: muted ? "#374151" : "#fff",
      }}
      whileHover={{
        backgroundColor: muted ? "#d1d5db" : "#000",
        color: muted ? "#4b5563" : "#fff",
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      whileTap={{ scale: 1.03 }}
      onClick={onClickAction}
      className={twMerge(

        "px-4 py-2 rounded-full shadow-none inline-flex items-center justify-center",
        muted ? "bg-gray-200 text-gray-700" : "bg-green-500 text-white",
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex items-center justify-center">{renderIcon()}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex items-center justify-center">{renderIcon()}</span>
      )}
    </motion.button>
  );
}
