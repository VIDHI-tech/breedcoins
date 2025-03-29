import { create } from "zustand";

type NavStoreType = {
  navHeight: number;
  setNavHeight: (navHeight: number) => void;
};
export const useNavStore = create<NavStoreType>()((set) => ({
  navHeight: 0,
  setNavHeight: (navHeight) => set({ navHeight }),
}));
