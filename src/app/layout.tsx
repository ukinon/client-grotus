import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import LoadingPage from "@/components/ui/LoadingPage";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

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
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <Suspense fallback={<LoadingPage />}>
            <div className="mt-20 mb-36">{children}</div>
          </Suspense>
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
