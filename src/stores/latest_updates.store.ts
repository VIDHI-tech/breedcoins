import { create } from "zustand";

type LatestUpdatesDate = string; // id of latest_update
type StateType = LatestUpdatesDate | null;

type LatestUpdatesStoreType = {
  isOpen: StateType;
  setIsOpen: (isOpen: StateType) => void;
  onClose: () => void;
};
export const useLatestUpdatesStore = create<LatestUpdatesStoreType>()(
  (set) => ({
    isOpen: null,
    setIsOpen: (isOpen) => set({ isOpen }),
    onClose: () => set({ isOpen: null }),
  })
);
