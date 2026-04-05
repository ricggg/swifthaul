import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwiftHaul Logistics | Reliable Freight & Delivery Solutions",
  description:
    "SwiftHaul delivers freight, last-mile, and warehousing solutions across 40+ countries. Real-time tracking. Guaranteed delivery windows. Trusted by 2,000+ businesses.",
  keywords:
    "logistics, freight, shipping, last-mile delivery, warehousing, tracking, cargo",
  openGraph: {
    title: "SwiftHaul Logistics",
    description: "Freight & delivery solutions trusted by 2,000+ businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}