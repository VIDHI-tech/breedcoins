import { create } from "zustand";

type CalendarDate = string;
type StateType = CalendarDate | null;

type CalendarStoreType = {
  isOpen: StateType;
  setIsOpen: (isOpen: StateType) => void;
  onClose: () => void;
};
export const useCalendarStore = create<CalendarStoreType>()((set) => ({
  isOpen: null,
  setIsOpen: (isOpen) => set({ isOpen }),
  onClose: () => set({ isOpen: null }),
}));
