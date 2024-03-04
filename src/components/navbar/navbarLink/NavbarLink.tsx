"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/interfaces/NavLink";

export default function NavbarLink({ item }: { item: NavLink }) {
  const pathName = usePathname();

  return (
    <Link
      className={clsx("font-medium px-3 py-1  hover:text-orange-500 ", {
        "rounded-xl  bg-white text-blue-900": pathName === item.path
      })}
      href={item.path}
    >
      {item.title}
    </Link>
  );
}
