import { storage } from "../storage";
import { Vote } from "../types";

const VOTES_KEY = "votes";
const MAX_WEEKLY_VOTES = 3;

export function getCurrentWeekString(d?: Date): string {
  const now = d || new Date();
  const date = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

export const voteService = {
  async getAllVotes(): Promise<Vote[]> {
    const list = await storage.get<Vote[]>(VOTES_KEY);
    return Array.isArray(list) ? list : [];
  },

  async getUserWeekVotes(userId: string, week?: string): Promise<Vote[]> {
    const w = week || getCurrentWeekString();
    const all = await this.getAllVotes();
    return all.filter((v) => v.userId === userId && v.week === w);
  },

  async hasVoted(charId: string, userId: string, week?: string): Promise<boolean> {
    const userVotes = await this.getUserWeekVotes(userId, week);
    return userVotes.some((v) => v.targetId === charId);
  },

  async getRemainingVotes(userId: string, week?: string): Promise<number> {
    const userVotes = await this.getUserWeekVotes(userId, week);
    return Math.max(0, MAX_WEEKLY_VOTES - userVotes.length);
  },

  async vote(
    charId: string,
    userId: string
  ): Promise<{ success: boolean; message: string; remainingVotes: number }> {
    const week = getCurrentWeekString();
    const userVotes = await this.getUserWeekVotes(userId, week);

    if (userVotes.length >= MAX_WEEKLY_VOTES) {
      return {
        success: false,
        message: `Batas vote minggu ini (${MAX_WEEKLY_VOTES} vote) sudah habis.`,
        remainingVotes: 0,
      };
    }

    if (userVotes.some((v) => v.targetId === charId)) {
      return {
        success: false,
        message: "Kamu sudah memberikan vote untuk karakter ini minggu ini.",
        remainingVotes: MAX_WEEKLY_VOTES - userVotes.length,
      };
    }

    const newVote: Vote = {
      targetId: charId,
      userId,
      week,
    };

    const all = await this.getAllVotes();
    all.push(newVote);
    await storage.set(VOTES_KEY, all);

    const remaining = MAX_WEEKLY_VOTES - (userVotes.length + 1);
    return {
      success: true,
      message: "Vote berhasil diberikan!",
      remainingVotes: remaining,
    };
  },

  async getWeeklyRanking(
    gamePrefix?: string,
    week?: string
  ): Promise<{ targetId: string; count: number }[]> {
    const w = week || getCurrentWeekString();
    const all = await this.getAllVotes();
    const currentWeekVotes = all.filter((v) => v.week === w);

    const counts: Record<string, number> = {};
    for (const v of currentWeekVotes) {
      if (!gamePrefix || v.targetId.startsWith(`${gamePrefix}:`)) {
        counts[v.targetId] = (counts[v.targetId] || 0) + 1;
      }
    }

    return Object.entries(counts)
      .map(([targetId, count]) => ({ targetId, count }))
      .sort((a, b) => b.count - a.count);
  },
};
