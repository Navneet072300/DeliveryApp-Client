import { Cuisine } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cuisines`;

const getCuisines = async (): Promise<Cuisine[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getCuisines;
