"use client";

import Box from "@/components/Box";
import { cn } from "@/lib/utils";
import { Cuisine } from "@/types-db";
import { query } from "firebase/firestore";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CuisineFiltersProps {
  cuisines: Cuisine[];
}

const CuisineFilters = ({ cuisines }: CuisineFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCLick = (cuisine: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.cuisine === cuisine) {
      delete currentParams.cuisine;
    } else {
      currentParams.cuisine = cuisine;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });
    router.push(href);
  };
  return (
    <Box className=" flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className=" text-xl font-semibold text-neutral-700">Cuisine</h2>
      <Box className=" flex-col gap-2 mt-2">
        {cuisines?.map((cuisine) => (
          <div
            onClick={() => handleCLick(cuisine.value)}
            key={cuisine.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              cuisine.value === searchParams.get("cuisine") && "text-hero"
            )}
          >
            <p>{cuisine.name}</p>
            {cuisine.value === searchParams.get("cuisine") && (
              <Check className="w-4 h-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CuisineFilters;
