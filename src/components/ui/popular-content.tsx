"use client";

import { Product } from "@/types-db";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PopularContentProps {
  data: Product;
}

function PopularContent({ data }: PopularContentProps) {
  const [isLiked, setIsLiked] = useState(false);

  const IsLikedIcon = isLiked ? Heart : HeartCrack;

  return (
    <div>
      <Card className=" w-full max-h-[400px] rounded-md bg-white shadow-lg border-none flex flex-col items-center justify-center relative py-6 pt-24 md:pt-28">
        <div className="absolute -top-[15%] md:-top-[15%] overflow-hidden w-24 md:w-40 md:h-40 rounded-full bg-hero flex items-center justify-center p-1 md:p-2">
          <div className=" w-full h-full rounded-full bg-white relative ">
            <Image
              className=" w-full h-full object-contain"
              fill
              alt={data.name}
              src={data.images[0].url}
            />
          </div>
        </div>
        <Link href={`/menu/${data.id}`} className=" w-full px-2 text-center">
          <CardTitle className=" text-neutral-700  w-full mb-3 z-50">
            {data.name}
          </CardTitle>
        </Link>
        <div className=" w-full flex items-center justify-center gap-2 flex-wrap px-2 mt-4">
          {data.cuisine && (
            <div className=" rounded-md bg-emerald-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {data.cuisine}
            </div>
          )}

          {data.category && (
            <div className=" rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {data.category}
            </div>
          )}

          {data.kitchen && (
            <div className=" rounded-md bg-red-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {data.kitchen == "Vegetarian" ? "Veg" : "Non-Veg"}
            </div>
          )}

          {data.size && (
            <div className=" rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {data.size.slice(0, 1)}
            </div>
          )}
        </div>
        <CardDescription className=" text-justify px-3 my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo totam
          ea accusamus unde expedita, voluptas odio accusantium velit nam et
          veritatis nulla possimus, deserunt pariatur fuga ab commodi ut eum.
        </CardDescription>

        <div className=" w-full flex items-center justify-between px-5 mt-4">
          <Button
            className=" rounded-full font-bold text-lg text-muted-foreground "
            variant="outline"
          >
            ${data.price}
          </Button>
          <Link href={`/menu/${data.id}`}>
            <Button className=" rounded-full w-full  bg-hero">Buy Now</Button>
          </Link>
        </div>

        <Button
          onClick={() => {}}
          className=" absolute top-0 right-0 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none p-2 px-3"
        >
          <ShoppingCart className=" w-4 h-4" />
        </Button>

        <Button
          className=" absolute top-0 left-0 hover:bg-transparent"
          variant={"ghost"}
        >
          <IsLikedIcon
            className={`w-5 ${isLiked ? "text-red-600" : "text-black"}`}
          />
        </Button>
      </Card>
    </div>
  );
}

export default PopularContent;
