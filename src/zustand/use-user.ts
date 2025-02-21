import { create } from "zustand";

type UserZustand = {
  user: { userName: string; role: string } | null;
  setUser: (user: { userName: string; role: string }) => void;
};

export const useUser = create<UserZustand>((set) => ({
  user: null,
  setUser: (user: { userName: string; role: string }) => set(() => ({ user })),
}));
