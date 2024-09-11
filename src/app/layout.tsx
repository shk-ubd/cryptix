import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptix",
  description: "Cryptix is a collection of cryptographic algorithms and ciphers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} dark bg-black text-gray-300`}>
     <Navbar />
     {children}
     <Footer />
      </body>
    </html>
  );
}
