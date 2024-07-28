import React from "react";
import Link from "next/link";

const page = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <img
        className="w-full h-64 object-cover rounded mb-4"
        src={product.image}
        alt={product.title}
      />
      <h2 className="text-2xl font-bold mb-2 text-center">
        {product.title}
      </h2>
      <p className="text-gray-700 text-center mb-4">
        {product.description}
      </p>
      <strong className="text-lg text-center mb-4">
        Price: ${product.price}
      </strong>
      <Link href="/products">
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          🔙 Go Back
        </button>
      </Link>
    </div>
  );
};

export default page;
