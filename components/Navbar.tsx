"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Game Menu", href: "#menu" },
    { label: "Video", href: "#video" },
    { label: "Character", href: "#testimonials" },
    { label: "Event", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
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
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-[14.5px] font-medium text-gray-700 hover:text-[#007BFF] hover:bg-blue-50/70 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/iseng/nyoba_web.html"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm hover:shadow-md hover:brightness-105 transition-all"
          >
            Original Version ↗
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-gray-800 hover:text-[#007BFF] hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/iseng/nyoba_web.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Original Version ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
