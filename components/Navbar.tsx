"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Gamepad2, User, Users } from "lucide-react";
import { useProfile } from "./ProfileProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile, setIsModalOpen } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Game Menu", href: "/#menu" },
    { label: "Video", href: "/#video" },
    { label: "Character", href: "/#testimonials" },
    { label: "Event", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white/80 backdrop-blur-sm py-3.5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#home"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#007BFF] to-[#00c6ff] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#252525]">
            Game<span className="text-[#007BFF]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-[#007BFF] hover:bg-blue-50/70 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Link Komunitas */}
          <Link
            href="/community"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100/80 rounded-full transition-all duration-200"
          >
            <Users className="w-4 h-4" />
            <span>Komunitas</span>
          </Link>

          {/* User Profile Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 bg-gray-50/80 hover:bg-blue-50/50 transition-all text-xs font-semibold text-gray-700 cursor-pointer shadow-xs"
            title={profile ? `Profil: ${profile.username}` : "Buat / Masuk Profil"}
          >
            {profile ? (
              <>
                <span className="text-base">{profile.avatar}</span>
                <span className="max-w-[90px] truncate text-gray-900 font-bold">
                  {profile.username}
                </span>
              </>
            ) : (
              <>
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>Masuk</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile Actions & Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold"
            title="Profil"
          >
            {profile ? profile.avatar : "👤"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-[#007BFF] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-200 px-6 py-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-gray-800 hover:text-[#007BFF] hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-base font-semibold text-blue-600 bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Komunitas & Ranking</span>
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-2 text-left px-4 py-2.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg"
            >
              {profile ? `Profil (${profile.username})` : "Masuk / Buat Profil"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
