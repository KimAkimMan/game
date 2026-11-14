"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onSelectGame?: (gameId: string) => void;
}

export default function Hero({ onSelectGame }: HeroProps) {
  const heroGames = [
    { label: "Genshin Impact", id: "genshin", color: "from-amber-500 to-orange-600" },
    { label: "Zenless Zone Zero", id: "zenles", color: "from-blue-600 to-cyan-500" },
    { label: "Blue Archive", id: "bluearchive", color: "from-sky-400 to-blue-600" },
    { label: "Honkai Star-Rail", id: "honkai", color: "from-indigo-600 to-purple-600" },
  ];

  const handleGameClick = (id: string) => {
    if (onSelectGame) {
      onSelectGame(id);
    }
    const elem = document.getElementById("testimonials");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-gray-50"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-300/30 to-indigo-300/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Arsip Game Pilihan 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#252525] tracking-tight leading-[1.15]">
              Best Game <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-indigo-600 to-purple-600">
                In The World!
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Make your day great with our special game. Welcome to our paradise,
              where every character tells a story, and every adventure awaits!
            </p>

            {/* Quick Game Jump Buttons */}
            <div className="w-full pt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Pilih Game Favorit:
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {heroGames.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => handleGameClick(game.id)}
                    className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    style={{
                      background:
                        game.id === "genshin"
                          ? "linear-gradient(135deg, #e67e22, #f39c12)"
                          : game.id === "zenles"
                          ? "linear-gradient(135deg, #007BFF, #00c6ff)"
                          : game.id === "bluearchive"
                          ? "linear-gradient(135deg, #0284c7, #38bdf8)"
                          : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    }}
                  >
                    <span>{game.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Artwork */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[520px] aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100/50 to-purple-50/50 p-4 border border-white/60 shadow-2xl backdrop-blur-sm">
              <Image
                src="/iseng/yimage (1)dd.png"
                alt="Game Characters Showcase"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/80 shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-800">Koleksi Karakter Lengkap</p>
                  <p className="text-[11px] text-gray-500">200+ karakter siap dieksplorasi</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
