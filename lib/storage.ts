export interface StorageAdapter {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<boolean>;
  remove(key: string): Promise<boolean>;
}

export class LocalStorageAdapter implements StorageAdapter {
  private prefix = "gameindex:";

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async get<T>(key: string): Promise<T | null> {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      const item = window.localStorage.getItem(this.getKey(key));
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(`[storage] Error reading key "${key}":`, error);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<boolean> {
    if (typeof window === "undefined") {
      return false;
    }
    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(this.getKey(key), serialized);
      return true;
    } catch (error) {
      console.warn(`[storage] Error writing key "${key}":`, error);
      return false;
    }
  }

  async remove(key: string): Promise<boolean> {
    if (typeof window === "undefined") {
      return false;
    }
    try {
      window.localStorage.removeItem(this.getKey(key));
      return true;
    } catch (error) {
      console.warn(`[storage] Error removing key "${key}":`, error);
      return false;
    }
  }
}

// Single exportable instance. Easily swappable to Supabase/Firebase adapter later.
export const storage: StorageAdapter = new LocalStorageAdapter();
