"use client";

import { useEffect, useState } from "react";
import { X, Heart, Trophy, Zap, Shield, Flame, Activity, Brain } from "lucide-react";
import { CharacterItem } from "@/lib/gameData";
import { favoriteService } from "@/lib/services/favoriteService";
import { voteService } from "@/lib/services/voteService";
import { useProfile } from "../ProfileProvider";
import CommentSection from "./CommentSection";

interface CharacterModalProps {
  character: CharacterItem | null;
  gameId: string;
  gameTitle: string;
  onClose: () => void;
  onFavoriteChange?: (charId: string, isFav: boolean) => void;
}

export default function CharacterModal({
  character,
  gameId,
  gameTitle,
  onClose,
  onFavoriteChange,
}: CharacterModalProps) {
  const { profile, requireAuth } = useProfile();
  const [isFav, setIsFav] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [remainingVotes, setRemainingVotes] = useState(3);
  const [voteFeedback, setVoteFeedback] = useState<string | null>(null);

  const charId = character ? `${gameId}:${character.name}` : "";

  useEffect(() => {
    if (!character) return;

    // Load favorite status
    favoriteService.isFavorite(charId).then(setIsFav);

    // Load vote status if profile exists
    if (profile) {
      voteService.hasVoted(charId, profile.id).then(setHasVoted);
      voteService.getRemainingVotes(profile.id).then(setRemainingVotes);
    } else {
      setHasVoted(false);
      setRemainingVotes(3);
    }
    setVoteFeedback(null);
  }, [character, charId, profile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!character) return null;

  const handleToggleFavorite = async () => {
    const res = await favoriteService.toggleFavorite(charId);
    setIsFav(res.isFav);
    if (onFavoriteChange) {
      onFavoriteChange(charId, res.isFav);
    }
  };

  const handleVote = async () => {
    const authed = requireAuth();
    if (!authed || !profile) return;

    const res = await voteService.vote(charId, profile.id);
    setVoteFeedback(res.message);
    if (res.success) {
      setHasVoted(true);
      setRemainingVotes(res.remainingVotes);
    }
  };

  const stats = character.stats;

  return (
    <div
      className="fixed inset-0 z-[2200] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#181a24] text-white border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Character Header Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10">
          {/* Avatar Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gray-900 border-4 border-white/20 shadow-2xl shrink-0 flex items-center justify-center">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
                {gameTitle}
              </span>
              {character.category && character.category !== "all" && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-gray-300 capitalize">
                  {character.category}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {character.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
              &ldquo;{character.feedback}&rdquo;
            </p>

            {/* Action Buttons: Favorite & Vote */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3">
              <button
                onClick={handleToggleFavorite}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                  isFav
                    ? "bg-rose-500 text-white shadow-rose-500/30"
                    : "bg-white/10 hover:bg-white/15 text-gray-200 border border-white/15"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${isFav ? "fill-white text-white" : ""}`}
                />
                <span>{isFav ? "Favorit Kamu" : "Tambah Favorit"}</span>
              </button>

              <button
                onClick={handleVote}
                disabled={hasVoted}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                  hasVoted
                    ? "bg-amber-500/20 text-amber-300 border border-amber-400/30 cursor-default"
                    : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-110 shadow-amber-500/20"
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>
                  {hasVoted ? "Sudah Di-vote Minggu Ini" : `Vote (${remainingVotes} sisa)`}
                </span>
              </button>
            </div>

            {voteFeedback && (
              <p className="text-xs text-amber-300 mt-1 font-medium">
                {voteFeedback}
              </p>
            )}
          </div>
        </div>

        {/* Stats Display (if character has stats e.g. Uma Musume) */}
        {stats && (
          <div className="py-5 border-b border-white/10">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Parameter Stat Kemampuan
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <StatBar label="Speed (Kecepatan)" value={stats.speed} icon={Zap} color="bg-emerald-500" />
              <StatBar label="Stamina (Daya Tahan)" value={stats.stamina} icon={Shield} color="bg-blue-500" />
              <StatBar label="Power (Kekuatan)" value={stats.power} icon={Flame} color="bg-rose-500" />
              <StatBar label="Guts (Semangat)" value={stats.guts} icon={Activity} color="bg-amber-500" />
              <StatBar label="Wit (Kecerdasan)" value={stats.wit} icon={Brain} color="bg-purple-500" />
            </div>
          </div>
        )}

        {/* Community Comments Section */}
        <div className="pt-2">
          <CommentSection targetId={charId} charName={character.name} />
        </div>
      </div>
    </div>
  );
}

function StatBar({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-gray-300">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full ${color}`}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
        <span className="font-bold text-white w-7 text-right">{value}</span>
      </div>
    </div>
  );
}
