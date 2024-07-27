"use client";

import Box from "@/components/Box";
import { cn } from "@/lib/utils";
import { Category } from "@/types-db";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFiltersProps {
  categories: Category[];
}

const CategoryFilters = ({ categories }: CategoryFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <Box className=" flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className=" text-xl font-semibold text-neutral-700">Category</h2>
      <Box className=" flex-col gap-2 mt-2">
        {categories?.map((category) => (
          <div
            key={category.id}
            className={cn(
              "text-sm font-semibold text-neutral-50 flex items-center gap-2",
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
