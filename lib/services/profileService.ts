import { storage } from "../storage";
import { UserProfile } from "../types";

const PROFILE_KEY = "profile";

export const profileService = {
  async getProfile(): Promise<UserProfile | null> {
    return await storage.get<UserProfile>(PROFILE_KEY);
  },

  async saveProfile(
    data: Omit<UserProfile, "id" | "createdAt"> & { id?: string }
  ): Promise<UserProfile | null> {
    const existing = await this.getProfile();
    const profile: UserProfile = {
      id: existing?.id || data.id || (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `usr_${Date.now()}`),
      username: data.username.trim().slice(0, 20),
      avatar: data.avatar || "🎮",
      bio: (data.bio || "").trim().slice(0, 120),
      createdAt: existing?.createdAt || Date.now(),
    };

    const ok = await storage.set(PROFILE_KEY, profile);
    return ok ? profile : null;
  },

  async logout(): Promise<boolean> {
    return await storage.remove(PROFILE_KEY);
  },
};
