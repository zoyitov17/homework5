import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="w-full h-full mt-5">
      <nav className="mx-auto my-0 flex gap-6 font-semibold items-center justify-center ">
        <p>
          <Link href="/about/teacher">Teacher</Link>
        </p>
        <p>
          <Link href="/about/students">Students</Link>
        </p>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default layout;
