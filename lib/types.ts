export type GameId = "genshin" | "zenles" | "bluearchive" | "honkai" | "uma";

export interface CharacterStats {
  speed: number;
  stamina: number;
  power: number;
  guts: number;
  wit: number;
}

export interface UserProfile {
  id: string;            // crypto.randomUUID()
  username: string;      // 3-20 karakter
  avatar: string;        // emoji atau path
  bio: string;           // maks 120 karakter
  createdAt: number;
}

export interface Comment {
  id: string;
  targetId: string;      // misal "uma:special-week" atau "genshin:amber"
  userId: string;
  username: string;
  avatar: string;
  text: string;          // maks 300 karakter
  createdAt: number;
}

export interface Vote {
  targetId: string;      // id karakter
  userId: string;
  week: string;          // format "2026-W46"
}

export interface ScoreEntry {
  id: string;
  game: string;          // "uma-race"
  userId: string;
  username: string;
  score: number;
  createdAt: number;
}
