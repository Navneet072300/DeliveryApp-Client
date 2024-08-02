import getCategories from "@/actions/get-categories";
import Box from "@/components/Box";
import Container from "@/components/container";
import FilterContainer from "@/components/filter-container";
import CategoryFilters from "./components/category-filters";
import getSizes from "@/actions/get-size";
import SizeFilters from "./components/size-filters";
import KitchenFilters from "./components/kitchen-filters";
import getKitechens from "@/actions/get-kitchens";
import getCuisines from "@/actions/get-cuisines";
import CuisineFilters from "./components/cuisines-filters";
import getProducts from "@/actions/get-product";
import PageContent from "./components/page-content";

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
  const sizes = await getSizes();
  const kitchens = await getKitechens();
  const cuisines = await getCuisines();
  const products = await getProducts({
    size: searchParams?.size,
    isFeatured: searchParams?.isFeatured,
    cuisine: searchParams?.cuisine,
    category: searchParams?.category,
    kitchen: searchParams?.kitchen,
  });
  return (
    <Container className=" px-4 md:px-12">
      <div className=" grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className=" hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <CategoryFilters categories={categories} />
            <SizeFilters sizes={sizes} />
            <KitchenFilters kitchens={kitchens} />
            <CuisineFilters cuisines={cuisines} />
          </FilterContainer>
        </div>
        <Box className=" col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
          <PageContent products={products} />
        </Box>
      </div>
    </Container>
  );
};

export default MenuPage;
