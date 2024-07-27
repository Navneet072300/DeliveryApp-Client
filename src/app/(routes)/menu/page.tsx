import getCategories from "@/actions/get-categories";
import Box from "@/components/Box";
import Container from "@/components/container";
import FilterContainer from "@/components/filter-container";
import CategoryFilters from "./components/category-filters";

interface MenuProps {
  searchParams: {
    size?: string;
    isFeatured?: boolean;
    cuisine?: string;
    category?: string;
    kitchen?: string;
  };
}

const MenuPage = async ({ searchParams }: MenuProps) => {
  const categories = await getCategories();
  return (
    <Container className=" px-4 md:px-12">
      <div className=" grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className=" hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <CategoryFilters categories={categories} />
          </FilterContainer>
        </div>
        <Box className=" col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
          Page Content
        </Box>
      </div>
    </Container>
  );
};

export default MenuPage;
