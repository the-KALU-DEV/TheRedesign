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
//         "text-black hover:text-green-700 transition relative",
//         pathname === href &&
//           "text-green-500"
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

  if (!href) return null; // Ensures `href` is always valid

  return (
    <Link
      href={href}
      className={clsx(
        "text-black hover:text-green-600 hover:font-semibold transition relative",
        pathname === href && "text-green-500 font-semibold"
      )}
    >
      {title}
    </Link>
  );
}
