import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.min.css";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Seg.VR",
  description: "Login VR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
