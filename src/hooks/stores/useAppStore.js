import { create } from "zustand";

export const useAppStore = create((set) => ({
  isModalOpen: false,
  contentModal: null,
  setModal: (isModalOpen, contentModal) =>
    set(() => ({ isModalOpen, contentModal })),
}));
