// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import clsx from "clsx";

// interface NavLinkProps {
//   href: string;
//   title: string;
// }

// export default function NavLink({ href, title }: NavLinkProps) {
//   const pathname = usePathname();

//   return (
//     <Link
//       href={href}
//       className={clsx(
//         "text-black hover:text-gray-300 transition relative",
//         pathname === href && "after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-500"
//       )}
//     >
//       {title}
//     </Link>
//   );
// }


"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({ href, title }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "text-black hover:text-green-700 transition relative",
        pathname === href &&
          "text-green-500"
      )}
    >
      {title}
    </Link>
  );
}
