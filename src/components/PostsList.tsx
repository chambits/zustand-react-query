import { usePostActions } from "../store/usePostStore";
import { usePosts } from "../hooks/usePosts";

const PostsList = () => {
  const { data: posts, isLoading, error } = usePosts();
  const { setSelectedPost } = usePostActions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts?.map((post) => (
        <div
          key={post.id}
          onClick={() => setSelectedPost(post)}
          style={{
            cursor: "pointer",
            border: "1px solid #ddd",
            padding: "10px",
            margin: "5px",
            borderRadius: 10,
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
