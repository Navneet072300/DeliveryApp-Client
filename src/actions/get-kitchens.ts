import { Kitchen } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/kitchens`;

const getKitechens = async (): Promise<Kitchen[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getKitechens;
