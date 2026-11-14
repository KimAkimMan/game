"use client";

import { useState, useEffect, useRef } from "react";
import { Flag, Play, RotateCcw, Trophy, Zap, Shield, Flame, Activity, Brain } from "lucide-react";
import { GAME_SECTIONS, CharacterItem } from "@/lib/gameData";
import { scoreService } from "@/lib/services/scoreService";
import { useProfile } from "../ProfileProvider";

interface Runner {
  name: string;
  avatar: string;
  color: string;
  isPlayer: boolean;
  speed: number;
  stamina: number;
  power: number;
  guts: number;
  wit: number;
  progress: number; // 0 to 100
  currentSpeed: number;
  staminaLeft: number;
  finishRank?: number;
}

export default function UmaRace({ onFinish }: { onFinish?: () => void }) {
  const { profile, requireAuth } = useProfile();
  const umaCharacters = GAME_SECTIONS.uma?.characters || [];

  const [selectedChar, setSelectedChar] = useState<CharacterItem>(
    umaCharacters[0] || {
      name: "Special Week",
      image: "/uma/placeholder.png",
      category: "all",
      feedback: "",
      stats: { speed: 85, stamina: 82, power: 78, guts: 80, wit: 75 },
    }
  );

  // 100 stat points to customize
  const [stats, setStats] = useState({
    speed: 30,
    stamina: 25,
    power: 20,
    guts: 15,
    wit: 10,
  });

  const [raceState, setRaceState] = useState<"setup" | "racing" | "finished">("setup");
  const [runners, setRunners] = useState<Runner[]>([]);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [earnedScore, setEarnedScore] = useState<number>(0);

  const animationFrameRef = useRef<number | null>(null);
  const raceRunnersRef = useRef<Runner[]>([]);

  const totalPoints = stats.speed + stats.stamina + stats.power + stats.guts + stats.wit;

  const handleStatChange = (key: keyof typeof stats, delta: number) => {
    if (raceState !== "setup") return;
    const current = stats[key];
    const newTotal = totalPoints + delta;
    if (current + delta < 5 || newTotal > 100) return;
    setStats((prev) => ({ ...prev, [key]: current + delta }));
  };

  const startRace = () => {
    // Setup 4 runners (1 player + 3 CPU)
    const cpuPool = umaCharacters.filter((c) => c.name !== selectedChar.name);
    const shuffledCpu = [...cpuPool].sort(() => 0.5 - Math.random()).slice(0, 3);

    const initialRunners: Runner[] = [
      {
        name: `${selectedChar.name} (Kamu)`,
        avatar: selectedChar.image,
        color: "bg-gradient-to-r from-pink-500 to-rose-500",
        isPlayer: true,
        speed: stats.speed,
        stamina: stats.stamina,
        power: stats.power,
        guts: stats.guts,
        wit: stats.wit,
        progress: 0,
        currentSpeed: 0,
        staminaLeft: stats.stamina * 2,
      },
      ...shuffledCpu.map((cpu, idx) => {
        const colors = [
          "bg-gradient-to-r from-blue-500 to-cyan-500",
          "bg-gradient-to-r from-amber-500 to-orange-500",
          "bg-gradient-to-r from-purple-500 to-indigo-500",
        ];
        const s = cpu.stats || { speed: 80, stamina: 80, power: 80, guts: 80, wit: 80 };
        return {
          name: cpu.name,
          avatar: cpu.image,
          color: colors[idx % colors.length],
          isPlayer: false,
          speed: Math.round(s.speed * 0.3 + Math.random() * 6),
          stamina: Math.round(s.stamina * 0.25 + Math.random() * 5),
          power: Math.round(s.power * 0.22 + Math.random() * 5),
          guts: Math.round(s.guts * 0.18 + Math.random() * 4),
          wit: Math.round(s.wit * 0.15 + Math.random() * 4),
          progress: 0,
          currentSpeed: 0,
          staminaLeft: s.stamina * 2,
        };
      }),
    ];

    raceRunnersRef.current = initialRunners;
    setRunners(initialRunners);
    setRaceState("racing");
    setResultMessage(null);

    let finishedCount = 0;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      let allDone = true;
      const currentList = raceRunnersRef.current.map((r) => {
        if (r.progress >= 100) return r;
        allDone = false;

        // Base velocity
        let speed = (r.speed * 0.22) + (r.power * 0.12);

        // Stamina penalty in final 35% of the race
        if (r.progress > 65) {
          if (r.staminaLeft > 0) {
            r.staminaLeft -= dt * 15;
          } else {
            // Out of stamina, slows down unless high guts
            const gutsProtect = r.guts * 0.005;
            speed *= Math.max(0.45, 0.6 + gutsProtect);
          }
        }

        // Random spurt from wit/luck
        if (Math.random() < r.wit * 0.002) {
          speed *= 1.35;
        }

        const newProg = Math.min(100, r.progress + speed * dt * 3.5);
        if (newProg >= 100 && r.finishRank === undefined) {
          finishedCount++;
          r.finishRank = finishedCount;
        }
        return {
          ...r,
          progress: newProg,
          currentSpeed: speed,
        };
      });

      raceRunnersRef.current = currentList;
      setRunners([...currentList]);

      if (!allDone) {
        animationFrameRef.current = requestAnimationFrame(loop);
      } else {
        // Race completed
        setRaceState("finished");
        const playerRunner = currentList.find((r) => r.isPlayer);
        const rank = playerRunner?.finishRank || 4;

        // Score calculation
        const basePoints = rank === 1 ? 100 : rank === 2 ? 70 : rank === 3 ? 45 : 25;
        const bonus = Math.round(stats.speed * 1.5 + stats.wit * 1.2);
        const finalScore = basePoints * 10 + bonus;
        setEarnedScore(finalScore);

        if (rank === 1) {
          setResultMessage("🏆 Juara 1! Langkah emas membawamu ke garis finis pertama!");
        } else if (rank === 2) {
          setResultMessage("🥈 Juara 2! Nyaris merebut posisi terdepan di tikungan akhir!");
        } else {
          setResultMessage(`Finis di posisi #${rank}. Latih terus staminamu!`);
        }

        // Submit score if logged in
        if (profile) {
          scoreService.submitScore({
            game: "uma-race",
            userId: profile.id,
            username: profile.username,
            score: finalScore,
          }).then(() => {
            if (onFinish) onFinish();
          });
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleSaveScoreClick = () => {
    requireAuth(() => {
      if (profile && earnedScore > 0) {
        scoreService.submitScore({
          game: "uma-race",
          userId: profile.id,
          username: profile.username,
          score: earnedScore,
        }).then(() => {
          if (onFinish) onFinish();
        });
      }
    });
  };

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-[#161822] border border-white/10 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div>
          <span className="text-[11px] font-bold text-pink-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20">
            Mini Game Orisinal
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            🏇 Simulasi Pacuan Uma Musume
          </h3>
          <p className="text-xs text-gray-400">
            Pilih karakter, alokasikan 100 poin kemampuan, dan bertandinglah melawan CPU!
          </p>
        </div>

        {raceState !== "setup" && (
          <button
            onClick={() => {
              if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
              setRaceState("setup");
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-gray-200 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Atur Ulang</span>
          </button>
        )}
      </div>

      {/* Setup Mode */}
      {raceState === "setup" && (
        <div className="space-y-6">
          {/* Character Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
              Pilih Gadis Kuda
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {umaCharacters.map((c) => (
                <button
                  type="button"
                  key={c.name}
                  onClick={() => setSelectedChar(c)}
                  className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer border text-left ${
                    selectedChar.name === c.name
                      ? "bg-pink-600/20 border-pink-500 shadow-md shadow-pink-500/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-900 border border-white/20 shrink-0">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-white truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stat Point Allocation */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Alokasi Poin Latihan (Total 100 Pts)
              </span>
              <span
                className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                  totalPoints === 100 ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                }`}
              >
                Digunakan: {totalPoints}/100
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <StatRow
                label="Speed (Laju Puncak)"
                value={stats.speed}
                icon={Zap}
                onMinus={() => handleStatChange("speed", -5)}
                onPlus={() => handleStatChange("speed", 5)}
              />
              <StatRow
                label="Stamina (Daya Tahan)"
                value={stats.stamina}
                icon={Shield}
                onMinus={() => handleStatChange("stamina", -5)}
                onPlus={() => handleStatChange("stamina", 5)}
              />
              <StatRow
                label="Power (Akselerasi)"
                value={stats.power}
                icon={Flame}
                onMinus={() => handleStatChange("power", -5)}
                onPlus={() => handleStatChange("power", 5)}
              />
              <StatRow
                label="Guts (Pertahanan Akhir)"
                value={stats.guts}
                icon={Activity}
                onMinus={() => handleStatChange("guts", -5)}
                onPlus={() => handleStatChange("guts", 5)}
              />
              <StatRow
                label="Wit (Taktik & Spurt)"
                value={stats.wit}
                icon={Brain}
                onMinus={() => handleStatChange("wit", -5)}
                onPlus={() => handleStatChange("wit", 5)}
              />
            </div>
          </div>

          {/* Start Race Button */}
          <button
            onClick={startRace}
            disabled={totalPoints !== 100}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:brightness-110 shadow-lg shadow-pink-500/25 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Mulai Pacuan Kuda (Gate Open!)</span>
          </button>
        </div>
      )}

      {/* Racing & Finished Mode */}
      {raceState !== "setup" && (
        <div className="space-y-6">
          {/* Track Canvas / CSS Track */}
          <div className="space-y-3.5 p-4 rounded-2xl bg-[#0d0f17] border border-white/10 relative overflow-hidden">
            {/* Finish Line */}
            <div className="absolute right-10 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-white to-amber-400 z-10 flex flex-col items-center justify-between py-1">
              <Flag className="w-4 h-4 text-amber-400 -ml-1.5" />
              <span className="text-[9px] font-black tracking-tighter text-amber-300 uppercase rotate-90">
                FINISH
              </span>
              <Flag className="w-4 h-4 text-amber-400 -ml-1.5" />
            </div>

            {runners.map((r, idx) => (
              <div key={idx} className="space-y-1 relative">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-300 truncate max-w-[200px]">
                    {r.name}
                  </span>
                  {r.finishRank && (
                    <span className="text-xs font-black text-amber-400">
                      FINISH #{r.finishRank}
                    </span>
                  )}
                </div>

                {/* Track Lane */}
                <div className="h-10 rounded-xl bg-white/5 border border-white/10 relative flex items-center px-1 overflow-hidden">
                  {/* Runner Sprite / Icon */}
                  <div
                    className="absolute top-1 bottom-1 transition-all duration-75 flex items-center gap-1.5"
                    style={{
                      left: `calc(${r.progress * 0.85}% + 4px)`,
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg flex items-center justify-center shrink-0 ${r.color}`}
                    >
                      <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                    </div>
                    {r.isPlayer && (
                      <span className="text-[10px] font-black bg-pink-500 text-white px-1.5 py-0.2 rounded-full uppercase shadow-xs">
                        You
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result Card */}
          {raceState === "finished" && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-900/40 via-purple-900/40 to-blue-900/40 border border-white/20 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <Trophy className="w-10 h-10 text-amber-400 mx-auto" />
              <h4 className="text-lg font-black text-white">{resultMessage}</h4>
              <p className="text-2xl font-black text-amber-400">
                {earnedScore} <span className="text-xs font-normal text-gray-300">Skor Poin</span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={startRace}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:brightness-110 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Balapan Lagi 🏇
                </button>

                {!profile ? (
                  <button
                    onClick={handleSaveScoreClick}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Simpan Skor ke Leaderboard
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 font-semibold">
                    ✓ Skor tersimpan atas nama {profile.username}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatRow({
  label,
  value,
  icon: Icon,
  onMinus,
  onPlus,
}: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  onMinus: () => void;
  onPlus: () => void;
}) {
  return (
    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-pink-400" />
        <span className="font-semibold text-gray-300">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMinus}
          className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center cursor-pointer"
        >
          -
        </button>
        <span className="font-bold text-white w-6 text-center">{value}</span>
        <button
          type="button"
          onClick={onPlus}
          className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
