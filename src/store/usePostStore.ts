import { create } from "zustand";
import { Post } from "../types";

interface PostStore {
  selectedPost: Post | null;
  modalOpen: boolean;
  actions: {
    setSelectedPost: (post: Post) => void;
    closeModal: () => void;
  };
}

const usePostStore = create<PostStore>((set) => ({
  selectedPost: null,
  modalOpen: false,
  actions: {
    setSelectedPost: (post) => set({ selectedPost: post, modalOpen: true }),
    closeModal: () => set({ modalOpen: false }),
  },
}));

export const useSelectedPost = () =>
  usePostStore((state) => state.selectedPost);
export const useModalOpen = () => usePostStore((state) => state.modalOpen);
export const usePostActions = () => usePostStore((state) => state.actions);
