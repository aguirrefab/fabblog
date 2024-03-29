import React from "react";

import NavbarLink from "./NavbarLink/NavbarLink";

import { NavLink } from "@/interfaces/NavLink";

export const Links = () => {
  const links: NavLink[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className="flex gap-5 text-sm text-white ">
      {links.map((link) => (
        <NavbarLink key={link.title} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavbarLink item={{ title: "Admin", path: "/admin" }} />}
          <button
            className="px-3 py-1 text-white bg-blue-700 hover:text-blue-800 hover:bg-white"
            type="button"
          >
            Logout
          </button>
        </>
      ) : (
        <NavbarLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};
