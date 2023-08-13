import { Inter } from "next/font/google";
import Item from "./items/page";
const inter = Inter({ subsets: ["latin"] });
import { getProducts } from "@/app/utils";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Item items={products} />
    </>
  );
}
