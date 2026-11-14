"use client";

import { useState, useEffect } from "react";
import { Trophy, Flame, AlertCircle } from "lucide-react";
import { voteService, getCurrentWeekString } from "@/lib/services/voteService";
import { GAME_SECTIONS } from "@/lib/gameData";
import { useProfile } from "../ProfileProvider";

export default function WeeklyRanking({
  onSelectCharacter,
}: {
  onSelectCharacter?: (gameId: string, charName: string) => void;
}) {
  const { profile, requireAuth } = useProfile();
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const [ranking, setRanking] = useState<{ targetId: string; count: number }[]>([]);
  const [remainingVotes, setRemainingVotes] = useState(3);
  const [loading, setLoading] = useState(true);

  const [currentWeek, setCurrentWeek] = useState<string>("");

  const loadRanking = async (weekParam?: string) => {
    setLoading(true);
    const week = weekParam || currentWeek || getCurrentWeekString();
    const prefix = selectedGame === "all" ? undefined : selectedGame;
    const res = await voteService.getWeeklyRanking(prefix, week);
    setRanking(res.slice(0, 10));

    if (profile) {
      const rem = await voteService.getRemainingVotes(profile.id, week);
      setRemainingVotes(rem);
    } else {
      setRemainingVotes(3);
    }
    setLoading(false);
  };

  useEffect(() => {
    const week = getCurrentWeekString();
    setCurrentWeek(week);
    loadRanking(week);
  }, [selectedGame, profile]);

  const handleVote = async (targetId: string) => {
    const authed = requireAuth();
    if (!authed || !profile) return;

    const res = await voteService.vote(targetId, profile.id);
    if (res.success) {
      await loadRanking();
    } else {
      alert(res.message);
    }
  };

  const gameTabs = [
    { id: "all", label: "Semua Game" },
    { id: "genshin", label: "Genshin Impact" },
    { id: "zenles", label: "Zenless Zone Zero" },
    { id: "bluearchive", label: "Blue Archive" },
    { id: "honkai", label: "Honkai Star-Rail" },
    { id: "uma", label: "Uma Musume" },
  ];

  // Helper to find character details from targetId (e.g. "genshin:Mondstadt" or "uma:Special Week")
  const findCharacter = (targetId: string) => {
    const [gId, ...rest] = targetId.split(":");
    const cName = rest.join(":");
    const game = GAME_SECTIONS[gId];
    if (!game) return { name: cName, image: "/uma/placeholder.png", gameTitle: gId, gameId: gId };
    const char = game.characters.find(
      (c) => c.name.toLowerCase() === cName.toLowerCase()
    );
    return {
      name: cName,
      image: char?.image || "/uma/placeholder.png",
      gameTitle: game.title,
      gameId: gId,
      rawChar: char,
    };
  };

  return (
    <div className="space-y-6">
      {/* Notice Banner */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-xs sm:text-sm text-blue-200">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
        <p>
          <strong>Mode lokal:</strong> Data voting tersimpan di browser ini ({currentWeek}).
          Tiap pengguna memiliki jatah <strong>3 vote per minggu</strong>.
          {profile && ` Sisa vote kamu: ${remainingVotes}.`}
        </p>
      </div>

      {/* Game Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {gameTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedGame(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedGame === tab.id
                ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ranking List */}
      {loading ? (
        <div className="py-12 text-center text-gray-500 text-sm">
          Memuat peringkat...
        </div>
      ) : ranking.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {ranking.map((item, idx) => {
            const charInfo = findCharacter(item.targetId);
            const rank = idx + 1;
            const rankBadge =
              rank === 1
                ? "bg-amber-400 text-black shadow-amber-400/30"
                : rank === 2
                ? "bg-slate-300 text-black shadow-slate-300/30"
                : rank === 3
                ? "bg-amber-600 text-white shadow-amber-600/30"
                : "bg-white/10 text-gray-300";

            return (
              <div
                key={item.targetId}
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-3 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-md ${rankBadge}`}
                  >
                    #{rank}
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-900 border border-white/20 shrink-0">
                    <img
                      src={charInfo.image}
                      alt={charInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <button
                      onClick={() =>
                        onSelectCharacter &&
                        onSelectCharacter(charInfo.gameId, charInfo.name)
                      }
                      className="text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block text-left"
                    >
                      {charInfo.name}
                    </button>
                    <p className="text-[11px] text-gray-400 truncate">
                      {charInfo.gameTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="flex items-center gap-1 text-xs font-extrabold text-amber-400">
                      <Flame className="w-3.5 h-3.5 fill-amber-400" />
                      {item.count} vote
                    </span>
                  </div>
                  <button
                    onClick={() => handleVote(item.targetId)}
                    disabled={remainingVotes <= 0}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    + Vote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center space-y-2">
          <Trophy className="w-10 h-10 text-gray-600 mx-auto" />
          <p className="text-sm text-gray-400 font-semibold">
            Belum ada vote di minggu ini ({currentWeek}).
          </p>
          <p className="text-xs text-gray-500">
            Jadilah yang pertama memberikan vote untuk karakter favoritmu!
          </p>
        </div>
      )}
    </div>
  );
}
