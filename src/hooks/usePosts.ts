import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts";
import { Post } from "../types";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
