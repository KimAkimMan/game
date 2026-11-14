"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { UserProfile } from "@/lib/types";
import { profileService } from "@/lib/services/profileService";

interface ProfileContextType {
  profile: UserProfile | null;
  loading: boolean;
  setProfile: (profile: UserProfile | null) => void;
  logout: () => Promise<void>;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  requireAuth: (callback?: () => void) => boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  useEffect(() => {
    let mounted = true;
    profileService.getProfile().then((p) => {
      if (mounted) {
        setProfile(p);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const logout = async () => {
    await profileService.logout();
    setProfile(null);
  };

  const requireAuth = (callback?: () => void): boolean => {
    if (profile) {
      if (callback) callback();
      return true;
    }
    if (callback) {
      setPendingAction(() => callback);
    }
    setIsModalOpen(true);
    return false;
  };

  const handleSetProfile = (newProfile: UserProfile | null) => {
    setProfile(newProfile);
    if (newProfile && pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        setProfile: handleSetProfile,
        logout,
        isModalOpen,
        setIsModalOpen,
        requireAuth,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
