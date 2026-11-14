import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Game Index | Arsip Karakter & Dunia Game Favorit",
  description:
    "Jelajahi karakter, video demo, cuplikan faksi, dan event dari Genshin Impact, Zenless Zone Zero, Blue Archive, Honkai: Star Rail, Honkai Impact 3rd, dan Wuthering Waves.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fafafa] text-[#252525] font-sans antialiased selection:bg-[#007BFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
