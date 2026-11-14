"use client";

import { useState, useEffect } from "react";
import { Search, X, Globe } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (query: string, searchAllGames: boolean) => void;
  currentGameTitle: string;
}

export default function SearchBar({
  onSearchChange,
  currentGameTitle,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [searchAllGames, setSearchAllGames] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(query.trim(), searchAllGames);
    }, 200);
    return () => clearTimeout(timer);
  }, [query, searchAllGames, onSearchChange]);

  return (
    <div className="w-full max-w-xl mx-auto mb-6 px-2">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              searchAllGames
                ? "Cari karakter di semua game..."
                : `Cari di ${currentGameTitle}...`
            }
            className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white/90 text-gray-900 border border-gray-200 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 p-0.5 rounded-full text-gray-400 hover:text-gray-600"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search All Games Toggle */}
        <button
          type="button"
          onClick={() => setSearchAllGames(!searchAllGames)}
          className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer ${
            searchAllGames
              ? "bg-blue-600 text-white shadow-blue-500/20"
              : "bg-white/80 hover:bg-white text-gray-700 border border-gray-200"
          }`}
          title="Beralih pencarian lintas semua game"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{searchAllGames ? "Semua Game" : "Game Ini"}</span>
        </button>
      </div>
    </div>
  );
}
