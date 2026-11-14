"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklyRanking from "@/components/community/WeeklyRanking";
import FavoritesList from "@/components/community/FavoritesList";
import Leaderboard from "@/components/community/Leaderboard";
import UmaRace from "@/components/community/UmaRace";
import CharacterModal from "@/components/community/CharacterModal";
import { Trophy, Heart, Medal, Play, Users } from "lucide-react";
import { GAME_SECTIONS, CharacterItem } from "@/lib/gameData";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"ranking" | "favorites" | "leaderboard" | "race">("ranking");
  const [selectedCharacter, setSelectedCharacter] = useState<{
    char: CharacterItem;
    gameId: string;
    gameTitle: string;
  } | null>(null);

  const handleSelectCharacter = (gameId: string, charName: string) => {
    const game = GAME_SECTIONS[gameId];
    if (!game) return;
    const char = game.characters.find(
      (c) => c.name.toLowerCase() === charName.toLowerCase()
    );
    if (char) {
      setSelectedCharacter({
        char,
        gameId,
        gameTitle: game.title,
      });
    }
  };

  const tabs = [
    { id: "ranking", label: "Ranking Minggu Ini", icon: Trophy },
    { id: "favorites", label: "Koleksi Favoritku", icon: Heart },
    { id: "leaderboard", label: "Leaderboard", icon: Medal },
    { id: "race", label: "Mini Game Balap Uma", icon: Play },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0e1017] text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              Komunitas Game Index
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Pusat Komunitas & Voting
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              Beri vote karakter favoritmu tiap minggu, simpan koleksi waifu impian,
              dan bertanding di mini game pacuan kuda!
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141620] border border-white/10 shadow-xl">
            {activeTab === "ranking" && (
              <WeeklyRanking onSelectCharacter={handleSelectCharacter} />
            )}
            {activeTab === "favorites" && (
              <FavoritesList onSelectCharacter={handleSelectCharacter} />
            )}
            {activeTab === "leaderboard" && <Leaderboard />}
            {activeTab === "race" && (
              <UmaRace onFinish={() => setActiveTab("leaderboard")} />
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Detail Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter.char}
          gameId={selectedCharacter.gameId}
          gameTitle={selectedCharacter.gameTitle}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
