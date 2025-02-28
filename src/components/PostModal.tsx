import {
  useSelectedPost,
  useModalOpen,
  usePostActions,
} from "../store/usePostStore";

const PostModal = () => {
  const selectedPost = useSelectedPost();
  const modalOpen = useModalOpen();
  const { closeModal } = usePostActions();

  if (!modalOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0)",
          padding: 20,
          margin: "10% auto",
          width: 300,
          borderRadius: 10,
        }}
      >
        <h2>{selectedPost?.title}</h2>
        <p>{selectedPost?.content}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PostModal;
