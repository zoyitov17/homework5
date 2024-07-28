import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-10 mt-4 flex items-center justify-center gap-8 text-2xl font-normal">
          <Link href="/home">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
