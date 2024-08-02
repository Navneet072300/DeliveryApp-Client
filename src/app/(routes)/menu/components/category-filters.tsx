"use client";

import Box from "@/components/Box";
import { cn } from "@/lib/utils";
import { Category } from "@/types-db";
import { query } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryFiltersProps {
  categories: Category[];
}

const CategoryFilters = ({ categories }: CategoryFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCLick = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.category === category) {
      delete currentParams.category;
    } else {
      currentParams.category = category;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });
    router.push(href);
  };
  return (
    <Box className=" flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className=" text-xl font-semibold text-neutral-700">Category</h2>
      <Box className=" flex-col gap-2 mt-2">
        {categories?.map((category) => (
          <div
            onClick={() => handleCLick(category.name)}
            key={category.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              category.name === searchParams.get("category") && "text-hero"
            )}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilters;
