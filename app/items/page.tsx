"use client";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {
  items: any[];
};

export default function page({ items }: Props) {
  const router = useRouter();
  return (
    <div>
      {items?.map((item) => (
        <div key={item._id} className="bg-red-400 ">
          <h1
            className="text-xl font-bold cursor-pointer bg-green-400 underline"
            onClick={() => router.push(`/items/${item._id}`)}
          >
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
