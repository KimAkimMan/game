import { storage } from "../storage";

const FAVORITES_KEY = "favorites";

export const favoriteService = {
  async getFavorites(): Promise<string[]> {
    const list = await storage.get<string[]>(FAVORITES_KEY);
    return Array.isArray(list) ? list : [];
  },

  async toggleFavorite(
    charId: string
  ): Promise<{ isFav: boolean; favorites: string[] }> {
    const current = await this.getFavorites();
    const exists = current.includes(charId);
    let updated: string[];

    if (exists) {
      updated = current.filter((id) => id !== charId);
    } else {
      updated = [...current, charId];
    }

    await storage.set(FAVORITES_KEY, updated);
    return {
      isFav: !exists,
      favorites: updated,
    };
  },

  async isFavorite(charId: string): Promise<boolean> {
    const current = await this.getFavorites();
    return current.includes(charId);
  },
};
