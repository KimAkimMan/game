"use client";

import { useState, useEffect } from "react";
import { Heart, Trash2, Users } from "lucide-react";
import { favoriteService } from "@/lib/services/favoriteService";
import { GAME_SECTIONS, CharacterItem } from "@/lib/gameData";

export default function FavoritesList({
  onSelectCharacter,
}: {
  onSelectCharacter?: (gameId: string, charName: string) => void;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    setLoading(true);
    const list = await favoriteService.getFavorites();
    setFavorites(list);
    setLoading(false);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const handleRemove = async (charId: string) => {
    const res = await favoriteService.toggleFavorite(charId);
    setFavorites(res.favorites);
  };

  const findCharacter = (charId: string) => {
    const [gameId, ...rest] = charId.split(":");
    const name = rest.join(":");
    const game = GAME_SECTIONS[gameId];
    const char: CharacterItem | undefined = game?.characters.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    return {
      charId,
      gameId,
      name,
      gameTitle: game?.title || gameId,
      image: char?.image || "/uma/placeholder.png",
      feedback: char?.feedback || "",
      category: char?.category || "",
    };
  };

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-500 text-sm">
        Memuat koleksi favorit...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <h3 className="text-lg font-bold text-white">
            Koleksi Karakter Favorit ({favorites.length})
          </h3>
        </div>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((favId) => {
            const item = findCharacter(favId);
            return (
              <div
                key={favId}
                className="group relative p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-4 transition-all"
              >
                <div
                  onClick={() =>
                    onSelectCharacter && onSelectCharacter(item.gameId, item.name)
                  }
                  className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 border-2 border-white/20 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block truncate">
                    {item.gameTitle}
                  </span>
                  <button
                    onClick={() =>
                      onSelectCharacter &&
                      onSelectCharacter(item.gameId, item.name)
                    }
                    className="text-base font-bold text-white hover:text-blue-400 transition-colors truncate block text-left w-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                  <p className="text-xs text-gray-400 italic line-clamp-1 mt-0.5">
                    {item.feedback}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(favId)}
                  className="p-2 text-gray-400 hover:text-rose-400 rounded-xl hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                  title="Hapus dari favorit"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center space-y-3">
          <Heart className="w-12 h-12 text-gray-600 mx-auto" />
          <p className="text-base font-bold text-gray-300">
            Belum ada karakter yang difavoritkan.
          </p>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Klik ikon hati ❤️ pada kartu karakter di halaman utama untuk menyimpannya ke koleksi favoritmu.
          </p>
        </div>
      )}
    </div>
  );
}
