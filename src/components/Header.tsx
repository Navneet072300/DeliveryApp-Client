"use client";

import { cn } from "@/lib/utils";
import Container from "./container";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import MainNav from "./MainNav";

interface HeaderProps {
  userId: string | null;
}

const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header
        className={cn(
          " w-full z-50 transition",
          scrolled ? " fixed top-0 left-0 bg-white shadow-lg" : "bg-transparent"
        )}
      >
        <Container>
          <div className=" relative px-4 sm:px-6 lg:px-12 flex h-1/6 items-center">
            <Link
              href={"/"}
              className=" uppercase flex gap-x-2 font-bold text-neutral-700 text-lg md:text-xl"
            >
              Foodied
            </Link>

            {/*Main Navigation Bar*/}
            <MainNav scrolled={scrolled} />

            {userId ? (
              <div className=" ml-4 flex items-center space-x-4">
                <UserButton />
              </div>
            ) : (
              <div className=" ml-4 flex items-center space-x-4">
                <Link href={"/sign-in"}>
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button className=" bg-green-500 text-black hover:bg-green-600">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
