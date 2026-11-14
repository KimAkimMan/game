"use client";

import { useState, useEffect } from "react";
import { Medal, Award, Clock } from "lucide-react";
import { ScoreEntry } from "@/lib/types";
import { scoreService } from "@/lib/services/scoreService";

export default function Leaderboard({ game = "uma-race" }: { game?: string }) {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadScores = async () => {
    setLoading(true);
    const list = await scoreService.getLeaderboard(game, 20);
    setScores(list);
    setLoading(false);
  };

  useEffect(() => {
    loadScores();
  }, [game]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Medal className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white">
            Leaderboard Balap Uma Musume
          </h3>
        </div>
        <button
          onClick={loadScores}
          className="text-xs text-blue-400 hover:underline cursor-pointer"
        >
          Segarkan
        </button>
      </div>

      {loading ? (
        <div className="py-12 text-center text-gray-500 text-sm">
          Memuat papan skor...
        </div>
      ) : scores.length > 0 ? (
        <div className="space-y-2">
          {scores.map((s, idx) => {
            const rank = idx + 1;
            const rankBadge =
              rank === 1
                ? "bg-amber-400 text-black font-black"
                : rank === 2
                ? "bg-slate-300 text-black font-black"
                : rank === 3
                ? "bg-amber-600 text-white font-black"
                : "bg-white/10 text-gray-300";

            const dateStr = new Date(s.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={s.id}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${rankBadge}`}
                  >
                    {rank}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{s.username}</p>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      {dateStr}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-extrabold text-amber-400">
                    {s.score.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">pts</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center space-y-2">
          <Award className="w-10 h-10 text-gray-600 mx-auto" />
          <p className="text-sm text-gray-300 font-semibold">
            Belum ada skor balapan yang tercatat.
          </p>
          <p className="text-xs text-gray-500">
            Mainkan mini game Balap Uma untuk mencatatkan rekor skor pertamamu!
          </p>
        </div>
      )}
    </div>
  );
}
