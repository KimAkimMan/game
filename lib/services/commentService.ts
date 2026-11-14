import { storage } from "../storage";
import { Comment } from "../types";

const COMMENTS_KEY = "comments";
const COOLDOWN_MS = 10000; // 10 detik jeda
const lastCommentTimeByUser: Record<string, number> = {};

function sanitizeText(raw: string): string {
  // Strip HTML tags and limit length
  return raw
    .replace(/<[^>]*>?/gm, "")
    .trim()
    .slice(0, 300);
}

export const commentService = {
  async getAllComments(): Promise<Comment[]> {
    const list = await storage.get<Comment[]>(COMMENTS_KEY);
    return Array.isArray(list) ? list : [];
  },

  async getComments(targetId: string): Promise<Comment[]> {
    const all = await this.getAllComments();
    return all
      .filter((c) => c.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
  },

  async addComment(params: {
    targetId: string;
    userId: string;
    username: string;
    avatar: string;
    text: string;
  }): Promise<{ success: boolean; message: string; comment?: Comment }> {
    const cleaned = sanitizeText(params.text);
    if (!cleaned) {
      return { success: false, message: "Komentar tidak boleh kosong." };
    }

    const now = Date.now();
    const lastTime = lastCommentTimeByUser[params.userId] || 0;
    if (now - lastTime < COOLDOWN_MS) {
      const waitSec = Math.ceil((COOLDOWN_MS - (now - lastTime)) / 1000);
      return {
        success: false,
        message: `Mohon tunggu ${waitSec} detik lagi sebelum berkomentar kembali.`,
      };
    }

    const newComment: Comment = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `cmt_${now}`,
      targetId: params.targetId,
      userId: params.userId,
      username: params.username.trim().slice(0, 20),
      avatar: params.avatar || "💬",
      text: cleaned,
      createdAt: now,
    };

    const all = await this.getAllComments();
    all.push(newComment);
    await storage.set(COMMENTS_KEY, all);

    lastCommentTimeByUser[params.userId] = now;
    return { success: true, message: "Komentar terkirim!", comment: newComment };
  },

  async deleteComment(id: string, userId: string): Promise<boolean> {
    const all = await this.getAllComments();
    const comment = all.find((c) => c.id === id);
    if (!comment || comment.userId !== userId) {
      return false;
    }
    const filtered = all.filter((c) => c.id !== id);
    return await storage.set(COMMENTS_KEY, filtered);
  },
};
