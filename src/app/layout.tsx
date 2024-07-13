import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "Foodied",
  description: "Have food and share love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(" bg-background antialiased", urbanist.variable)}>
          <img
            src="/img/hero.svg"
            className=" absolute -z-10 top-0 right-0 w-full md:w-[60%]"
            alt=""
          />
          <Header userId={userId} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
