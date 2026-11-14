import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "@/components/ProfileProvider";
import ProfileModal from "@/components/ProfileModal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Game Index | Arsip Karakter & Komunitas Game",
  description:
    "Jelajahi karakter, video demo, cuplikan faksi, voting mingguan, dan event dari Genshin Impact, Zenless Zone Zero, Blue Archive, Honkai: Star Rail, dan Uma Musume Pretty Derby.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fafafa] text-[#252525] font-sans antialiased selection:bg-[#007BFF] selection:text-white">
        <ProfileProvider>
          {children}
          <ProfileModal />
        </ProfileProvider>
      </body>
    </html>
  );
}
