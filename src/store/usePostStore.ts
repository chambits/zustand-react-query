import { create } from "zustand";
import { Post } from "../types";

interface PostStore {
  selectedPost: Post | null;
  actions: {
    setSelectedPost: (post: Post) => void;
  };
}

const usePostStore = create<PostStore>((set) => ({
  selectedPost: null,
  actions: {
    setSelectedPost: (post) => set({ selectedPost: post }),
  },
}));

export const useSelectedPost = () =>
  usePostStore((state) => state.selectedPost);
export const usePostActions = () => usePostStore((state) => state.actions);
