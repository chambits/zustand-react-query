import axios from "axios";
import { Post } from "../types";

const API_URL = "http://localhost:8080/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
};
