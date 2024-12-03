import { create } from 'zustand';

interface ModalAnimateStore {
  modalAnimate: boolean;
  resetModalAnimate: () => void;
}

export const useModalAnimateStore = create<ModalAnimateStore>((set) => ({
  modalAnimate: false,
  resetModalAnimate: () => set({ modalAnimate: false }),
}));
