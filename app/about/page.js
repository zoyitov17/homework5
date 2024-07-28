import React from "react";
import Link from "next/link";

const page = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <p className="font-bold text-center text-5xl mt-[250px]">About Page</p>
    </div>
  );
};

export default page;
