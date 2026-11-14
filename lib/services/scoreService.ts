import { storage } from "../storage";
import { ScoreEntry } from "../types";

const SCORES_KEY = "scores";
const MAX_LEADERBOARD_ENTRIES = 50;

export const scoreService = {
  async getAllScores(): Promise<ScoreEntry[]> {
    const list = await storage.get<ScoreEntry[]>(SCORES_KEY);
    return Array.isArray(list) ? list : [];
  },

  async submitScore(params: {
    game: string;
    userId: string;
    username: string;
    score: number;
  }): Promise<ScoreEntry | null> {
    const now = Date.now();
    const entry: ScoreEntry = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `sc_${now}`,
      game: params.game,
      userId: params.userId,
      username: params.username.trim().slice(0, 20),
      score: Math.round(params.score),
      createdAt: now,
    };

    const all = await this.getAllScores();
    const gameScores = all.filter((s) => s.game === params.game);
    const otherScores = all.filter((s) => s.game !== params.game);

    gameScores.push(entry);
    gameScores.sort((a, b) => b.score - a.score);

    // Keep top entries
    const trimmed = gameScores.slice(0, MAX_LEADERBOARD_ENTRIES);
    const updated = [...otherScores, ...trimmed];

    const ok = await storage.set(SCORES_KEY, updated);
    return ok ? entry : null;
  },

  async getLeaderboard(game: string, limit: number = 20): Promise<ScoreEntry[]> {
    const all = await this.getAllScores();
    return all
      .filter((s) => s.game === game)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  },
};
