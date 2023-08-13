import React from "react";
import { getProducts } from "@/app/utils";
const getIemIfno = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/singleItem`, {
      method: "POST",
      body: JSON.stringify(id),
    });
    const item = await res.json();
    return item;
  } catch (error) {
    console.log("error-getinfo", error);
  }
};

export default async function page({ params }: any) {
  const { itemid } = params;
  const item = await getIemIfno(itemid);
  return (
    <div>
      <h1>Item page </h1>
      <h2>{item?.data?.name}</h2>
      <h2>{item?.data?.price}</h2>
      <h2>{item?.data?.description}</h2>
      <img src={item?.data?.image[0]} alt="" />
    </div>
  );
}

export async function generateStaticParams() {
  const products12 = await getProducts();
  return products12?.map((item: any) => ({
    itemid: item._id?.toString(),
  }));
}
