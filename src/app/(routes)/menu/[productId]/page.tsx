import getProducts from "@/actions/get-product";
import getProduct from "@/actions/get-single-product";
import Box from "@/components/Box";
import Container from "@/components/container";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Gallery from "./components/gallery/gallery";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ category: product?.category });

  return (
    <div>
      <Container className=" bg-white rounded-lg my-4 px-4">
        <Box className=" text-neutral-700 text-sm items-center mt-12">
          <Link href={"/"} className=" flex items-center gap-2">
            <Home className=" w-4 h-4" />
            Main Page
          </Link>
          <ChevronRight className=" w-5 h-5 text-muted-foreground" />
          <Link href={"/menu"} className=" flex items-center gap-2">
            Products
          </Link>
        </Box>

        <div className=" px-4 py-10 sm:px-6 lg:px-8 space-y-10">
          <div className=" lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className=" mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
