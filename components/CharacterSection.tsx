"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  GAME_SECTIONS,
  ZZZ_BACKGROUNDS,
  GENSHIN_BACKGROUNDS,
  BLUE_ARCHIVE_BACKGROUNDS,
  HSR_BACKGROUND,
  CharacterItem,
  FilterOption,
} from "@/lib/gameData";

interface CharacterSectionProps {
  selectedGame?: string;
  onSelectGame?: (gameId: string) => void;
}

export default function CharacterSection({
  selectedGame = "genshin",
  onSelectGame,
}: CharacterSectionProps) {
  const [activeGame, setActiveGame] = useState<string>(selectedGame);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync with prop when parent updates it (e.g. from hero or menu clicks)
  useEffect(() => {
    if (selectedGame && GAME_SECTIONS[selectedGame]) {
      setActiveGame(selectedGame);
      setActiveFilter("all");
    }
  }, [selectedGame]);

  const currentGame = GAME_SECTIONS[activeGame] || GAME_SECTIONS.genshin;

  // Handle switching game
  const handleGameChange = (gameId: string) => {
    setActiveGame(gameId);
    setActiveFilter("all");
    if (onSelectGame) {
      onSelectGame(gameId);
    }
  };

  // Filter characters by active category
  const filteredCharacters = useMemo(() => {
    if (!currentGame || !currentGame.characters) return [];
    if (activeFilter.toLowerCase() === "all") {
      return currentGame.characters;
    }
    const filterKey = activeFilter.toLowerCase().trim();
    return currentGame.characters.filter((char) => {
      const charCat = (char.category || "").toLowerCase().trim();
      return (
        charCat === filterKey ||
        charCat.includes(filterKey) ||
        filterKey.includes(charCat)
      );
    });
  }, [currentGame, activeFilter]);

  // Reset scroll when filter or game changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    checkScroll();
  }, [activeGame, activeFilter]);

  // Check scroll boundary for disabling buttons
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 20);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    // Run initial check after render
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timer);
    };
  }, [filteredCharacters]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.75, 320);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Determine current active background across all games
  const currentGameBgSrc = useMemo(() => {
    const key = activeFilter.toLowerCase().trim();

    // 1. Genshin Impact (sesuai nama region / all)
    if (activeGame === "genshin") {
      if (key.includes("mondstadt") || key.includes("monstad")) return GENSHIN_BACKGROUNDS.mondstadt;
      if (key.includes("liyue")) return GENSHIN_BACKGROUNDS.liyue;
      if (key.includes("inazuma")) return GENSHIN_BACKGROUNDS.inazuma;
      if (key.includes("sumeru")) return GENSHIN_BACKGROUNDS.sumeru;
      if (key.includes("fontaine")) return GENSHIN_BACKGROUNDS.fontaine;
      if (key.includes("natlan")) return GENSHIN_BACKGROUNDS.natlan;
      if (key.includes("snezh") || key.includes("snezhnaya")) return GENSHIN_BACKGROUNDS.snezhnaya;
      return GENSHIN_BACKGROUNDS.all;
    }

    // 2. Zenless Zone Zero (sesuai faksi / squad)
    if (activeGame === "zenles") {
      if (key.includes("cunning")) return ZZZ_BACKGROUNDS.cunning;
      if (key.includes("calydon") || key.includes("sons")) return ZZZ_BACKGROUNDS.sons;
      if (key.includes("victoria")) return ZZZ_BACKGROUNDS.victoria;
      if (key.includes("belobog")) return ZZZ_BACKGROUNDS.belobog;
      if (key.includes("section") || key.includes("6")) return ZZZ_BACKGROUNDS.section6;
      if (key.includes("spesial") || key.includes("srt") || key.includes("response"))
        return ZZZ_BACKGROUNDS.srt;
      if (key.includes("stars") || key.includes("lyra")) return ZZZ_BACKGROUNDS.stars;
      if (key.includes("obol")) return ZZZ_BACKGROUNDS.obol;
      if (key === "preview") return ZZZ_BACKGROUNDS.preview;
      return ZZZ_BACKGROUNDS.all;
    }

    // 3. Blue Archive (koleksi background BA)
    if (activeGame === "bluearchive") {
      if (key.includes("abydos")) return BLUE_ARCHIVE_BACKGROUNDS.abydos;
      if (key.includes("gehenna")) return BLUE_ARCHIVE_BACKGROUNDS.gehenna;
      if (key.includes("millennium")) return BLUE_ARCHIVE_BACKGROUNDS.millennium;
      if (key.includes("trinity")) return BLUE_ARCHIVE_BACKGROUNDS.trinity;
      if (key.includes("hyakkiyako")) return BLUE_ARCHIVE_BACKGROUNDS.hyakkiyako;
      if (key.includes("shanhai")) return BLUE_ARCHIVE_BACKGROUNDS.shanhaijing;
      if (key.includes("redwinter") || key.includes("red")) return BLUE_ARCHIVE_BACKGROUNDS.redwinter;
      if (key.includes("valkyrie")) return BLUE_ARCHIVE_BACKGROUNDS.valkyrie;
      if (key.includes("srt")) return BLUE_ARCHIVE_BACKGROUNDS.srt;
      if (key.includes("arius")) return BLUE_ARCHIVE_BACKGROUNDS.arius;
      if (key === "preview") return BLUE_ARCHIVE_BACKGROUNDS.preview;
      return BLUE_ARCHIVE_BACKGROUNDS.all;
    }

    // 4. Honkai Star-Rail
    if (activeGame === "honkai") {
      return HSR_BACKGROUND;
    }

    return null;
  }, [activeGame, activeFilter]);

  const hasBg = Boolean(currentGameBgSrc);

  const gameButtons = [
    { id: "genshin", label: "Genshin Impact" },
    { id: "zenles", label: "Zenless Zone Zero" },
    { id: "bluearchive", label: "Blue Archive" },
    { id: "honkai", label: "Honkai Star-Rail" },
  ];

  return (
    <section
      id="testimonials"
      className={`relative py-16 transition-colors duration-500 overflow-hidden ${
        hasBg
          ? "bg-[#11131a] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#252525]"
      }`}
    >
      {/* Dynamic Squad / Region Background Banner */}
      {hasBg && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            key={currentGameBgSrc}
            src={currentGameBgSrc!}
            alt="Game Background Banner"
            className="w-full h-full object-cover object-top opacity-55 transition-opacity duration-700 filter brightness-95"
          />
          {/* Dark gradient overlay to keep text and character cards crisp */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#11131a]/85 via-[#11131a]/55 to-[#11131a]/95" />
        </div>
      )}

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span
            className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
              hasBg
                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            Character Archive
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight ${
              hasBg ? "text-white drop-shadow-md" : "text-[#252525]"
            }`}
          >
            Select A Game
          </h2>
        </div>

        {/* Game Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {gameButtons.map((g) => {
            const isActive = activeGame === g.id;
            return (
              <button
                key={g.id}
                onClick={() => handleGameChange(g.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? "bg-[#007BFF] text-white shadow-lg shadow-blue-500/30 -translate-y-0.5"
                    : hasBg
                    ? "bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 backdrop-blur-md"
                    : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        {/* Current Game Title & Squad / Region Filters */}
        <div className="text-center mb-8">
          <h3
            className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-5 ${
              hasBg ? "text-white drop-shadow-md" : "text-[#252525]"
            }`}
          >
            {currentGame.title}
          </h3>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {currentGame.filters.map((f: FilterOption) => {
              const isActive = activeFilter.toLowerCase() === f.id.toLowerCase();
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#007BFF] text-white shadow-md shadow-blue-500/25 scale-105"
                      : hasBg
                      ? "bg-black/35 hover:bg-black/55 text-white/90 border border-white/20 backdrop-blur-md shadow-sm"
                      : "bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 border border-gray-200 shadow-xs"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Character Carousel Container */}
        {/* Buttons are vertically centered relative to cards */}
        <div className="relative mt-8 px-2 sm:px-6">
          {/* Prev Slide Button */}
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous Character"
            className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer ${
              canScrollLeft
                ? "bg-[#007BFF] hover:bg-blue-600 text-white hover:scale-105 active:scale-95"
                : "bg-gray-300 text-gray-500 opacity-40 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Next Slide Button */}
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next Character"
            className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer ${
              canScrollRight
                ? "bg-[#007BFF] hover:bg-blue-600 text-white hover:scale-105 active:scale-95"
                : "bg-gray-300 text-gray-500 opacity-40 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Slider Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {filteredCharacters.length > 0 ? (
              filteredCharacters.map((char: CharacterItem, idx: number) => {
                return (
                  <div
                    key={`${char.name}-${idx}`}
                    style={{ scrollSnapAlign: "start" }}
                    className={`w-[270px] sm:w-[290px] h-[380px] shrink-0 rounded-[28px] pt-7 pb-5 px-4 flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-1.5 cursor-pointer select-none ${
                      hasBg
                        ? "bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.4)] text-[#151515]"
                        : "bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)] text-[#252525]"
                    }`}
                  >
                    {/* Character Avatar Image (Pas seperti versi sebelumnya: 175px, object-cover, shadow) */}
                    <img
                      src={char.image}
                      alt={char.name}
                      loading="lazy"
                      className="w-[175px] h-[175px] rounded-full object-cover shadow-[0_4px_16px_rgba(0,0,0,0.18)] mb-3.5 shrink-0 hover:scale-105 transition-transform duration-300"
                    />

                    {/* Character Name */}
                    <h4 className="text-[1.2rem] font-bold text-[#151515] mb-2 min-h-[28px] flex items-center justify-center text-center">
                      {char.name}
                    </h4>

                    {/* Feedback / Description */}
                    <div className="w-full flex-1 max-h-[85px] overflow-y-auto no-scrollbar text-center px-1">
                      <p className="text-[0.88rem] text-[#383838] italic leading-[1.5] max-w-[270px] mx-auto">
                        {char.feedback}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full py-16 text-center text-gray-400">
                <p>Tidak ada karakter untuk kategori ini.</p>
              </div>
            )}
          </div>
        </div>

        {/* Counter Info */}
        <div className="text-center mt-6">
          <p
            className={`text-xs font-semibold ${
              hasBg ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Menampilkan {filteredCharacters.length} karakter / preview
          </p>
        </div>
      </div>
    </section>
  );
}
