"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  scrolled: boolean;
}

const MainNav = ({ className, scrolled, ...props }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Menu",
      href: "/menu",
      active: pathname === "/menu",
    },
    {
      label: "Orders",
      href: "/orders",
      active: pathname === "/orders",
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      label: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className=" ml-auto">
      <nav className={cn("flex items-center space-x-4 lg:space-x-12 pl-6")}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              route.active
                ? `${scrolled ? "text-hero" : " text-black dark:text-white"}`
                : `${scrolled ? "text-black" : " text-white"}`
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
