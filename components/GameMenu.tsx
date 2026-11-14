"use client";

import Image from "next/image";
import { ExternalLink, Users } from "lucide-react";

interface GameMenuProps {
  onSelectGame?: (gameId: string) => void;
}

export default function GameMenu({ onSelectGame }: GameMenuProps) {
  const games = [
    {
      title: "Honkai Impact 3rd",
      genre: "3D Action RPG",
      image: "/iseng/honkai impact.jpeg",
      href: "/iseng/honkaiimpact3d.html",
      gameId: null,
      desc: "Pertarungan cepat dan grafis memukau bersama para Valkyrie.",
    },
    {
      title: "Genshin Impact",
      genre: "Open-World Adventure",
      image: "/iseng/genshin impact.png",
      href: "/iseng/gi.html",
      gameId: "genshin",
      desc: "Jelajahi tujuh elemen di benua luas Teyvat.",
    },
    {
      title: "Honkai: Star Rail",
      genre: "Turn-based Space RPG",
      image: "/iseng/honkai starrail.jpeg",
      href: "/iseng/hsr.html",
      gameId: "honkai",
      desc: "Jelajahi galaksi menaiki Astral Express melintasi bintang.",
    },
    {
      title: "Zenless Zone Zero",
      genre: "Urban Fantasy Action",
      image: "/iseng/zzz.jpeg",
      href: "/iseng/zzz.html",
      gameId: "zenles",
      desc: "Aksi urban futuristik di New Eridu bersama para Proxy.",
    },
    {
      title: "Blue Archive",
      genre: "Youth & Tactical RPG",
      image: "/iseng/blue archive.jpeg",
      href: "/iseng/ba.html",
      gameId: "bluearchive",
      desc: "Pimpin para siswi Kivotos dalam menyelesaikan berbagai krisis.",
    },
    {
      title: "Wuthering Waves",
      genre: "Open-World Action RPG",
      image: "/iseng/wuwa.jpeg",
      href: "/iseng/ww.html",
      gameId: null,
      desc: "Bangkit kembali di dunia pasca-bencana bersama Resonator.",
    },
    {
      title: "Uma Musume Pretty Derby",
      genre: "Training Simulation RPG",
      image: "/uma/bg-default.jpg",
      href: "#testimonials",
      gameId: "uma",
      desc: "Latih para gadis kuda berbakat menuju panggung Twinkle Series.",
    },
  ];

  const handleCardClick = (gameId: string | null, href: string) => {
    if (gameId && onSelectGame) {
      onSelectGame(gameId);
      const elem = document.getElementById("testimonials");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.open(href, "_blank");
  };

  return (
    <section id="menu" className="py-20 bg-gray-50/70 border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">
            Featured Titles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] mt-3 tracking-tight">
            Our Games Collection
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Pilih game untuk melihat karakter, faksi, dan arsip dunia secara langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              onClick={() => handleCardClick(game.gameId, game.href)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3.5 right-3.5 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                  {game.genre}
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors drop-shadow-md">
                    {game.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {game.desc}
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  {game.gameId ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      <Users className="w-3.5 h-3.5" />
                      Lihat Karakter
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      Website Khusus
                    </span>
                  )}
                  <span className="p-1.5 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
