"use client";

import { useState, useEffect } from "react";
import { X, User, Check, Sparkles } from "lucide-react";
import { useProfile } from "./ProfileProvider";
import { profileService } from "@/lib/services/profileService";

const AVATAR_OPTIONS = [
  "🎮", "🦊", "⭐", "🐱",
  "🌸", "🔥", "⚡", "🏹",
  "🏇", "❄️", "👑", "🗡️",
];

export default function ProfileModal() {
  const { profile, setProfile, isModalOpen, setIsModalOpen } = useProfile();
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("🎮");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setAvatar(profile.avatar || "🎮");
      setBio(profile.bio || "");
    } else {
      setUsername("");
      setAvatar("🎮");
      setBio("");
    }
    setError("");
  }, [profile, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, setIsModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();
    if (cleanUser.length < 3 || cleanUser.length > 20) {
      setError("Username harus terdiri dari 3 hingga 20 karakter.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      const saved = await profileService.saveProfile({
        username: cleanUser,
        avatar,
        bio: bio.trim(),
      });
      if (saved) {
        setProfile(saved);
        setIsModalOpen(false);
      } else {
        setError("Gagal menyimpan profil. Coba lagi.");
      }
    } catch {
      setError("Terjadi kesalahan saat menyimpan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[2500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative w-full max-w-md bg-[#181a24] text-white border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#007BFF] to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
            {avatar}
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              {profile ? "Ubah Profil Komunitas" : "Buat Profil Komunitas"}
            </h3>
            <p className="text-xs text-gray-400">
              Profil lokal tersimpan di browser Anda
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar Selection */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
              Pilih Avatar
            </label>
            <div className="grid grid-cols-6 gap-2">
              {AVATAR_OPTIONS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setAvatar(item)}
                  className={`h-11 rounded-xl text-xl flex items-center justify-center transition-all ${
                    avatar === item
                      ? "bg-blue-600 scale-105 shadow-md shadow-blue-500/30 ring-2 ring-white/50"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Username (3-20 Karakter)
            </label>
            <div className="relative">
              <input
                type="text"
                required
                minLength={3}
                maxLength={20}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Contoh: SenseiFall"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <User className="absolute right-3.5 top-2.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Bio Singkat (Maks 120 Karakter)
            </label>
            <textarea
              rows={2}
              maxLength={120}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Game favorit, waifu andalan, atau moto hidup..."
              className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
            />
            <div className="text-right text-[11px] text-gray-500 mt-0.5">
              {bio.length}/120
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={saving}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] transition-all shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <span>Menyimpan...</span>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>{profile ? "Perbarui Profil" : "Simpan Profil"}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
