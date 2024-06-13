import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import BottomBar from "../components/layout/BottomBar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Grotus",
  description: "Grow your lettuce with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {" "}
        <div className="mt-24 mb-36">{children}</div>
      </body>
    </html>
  );
}
