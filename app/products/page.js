import React from "react";
import Link from "next/link";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
      <div className="flex flex-wrap -mx-2 mt-14">
        {products.map((p) => (
    <div
      key={p.id}
      className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4"
    >
      <div className="bg-white p-4 shadow rounded h-[700px] flex flex-col">
        <img
          className="w-full h-3/5 object-cover mb-4"
          src={p.image}
          alt={p.title}
      />
        <div className="flex-grow">
          <Link href={`/products/${p.id}`}>
            <h2 className="text-xl font-bold mb-2">
              {p.title}
            </h2>
          </Link>
        </div>
        <div className="mt-auto">
          <strong className="text-lg">
            price: ${p.price}
          </strong>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default page;
