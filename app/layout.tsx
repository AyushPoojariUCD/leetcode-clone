import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigations/Navbar";
import Footer from "@/components/Navigations/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LeetCode – Coding Interview Preparation",
    template: "%s | LeetCode",
  },
  description:
    "LeetCode is a platform for practicing coding interviews, solving algorithm challenges, and improving data structures and problem-solving skills.",

  keywords: [
    "leetcode",
    "coding interview practice",
    "algorithm problems",
    "data structures",
    "competitive programming",
    "coding challenges",
  ],

  authors: [{ name: "Ayush Poojari" }],
  creator: "Ayush Poojari",

  metadataBase: new URL("https://leetcode.com"),

  openGraph: {
    title: "LeetCode - Coding Interview Preparation",
    description:
      "Solve algorithm problems, practice data structures, and prepare for technical interviews.",
    url: "https://leetcode.com",
    siteName: "LeetCode",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navbar */}
        <Navbar/>

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer/>
      </body>
    </html>
  );
}