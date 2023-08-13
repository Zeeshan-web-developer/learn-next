import { Inter } from "next/font/google";
import Item from "./items/page";
const inter = Inter({ subsets: ["latin"] });

const getProducts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {
      cache: "no-cache",
    });
    const products = await res.json();
    return products?.data;
  } catch (error) {
    console.log({ productserror: error });
  }
};

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Item items={products} />
    </>
  );
}
