import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import BottomBar from "./layout/BottomBar";

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
        <Navbar />
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
