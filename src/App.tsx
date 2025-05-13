import { QueryClientProvider } from "@tanstack/react-query";
import PostModal from "./components/PostModal";
import PostsList from "./components/PostsList";
import { queryClient } from "./queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Zustand + React Query Example</h1>
        <PostsList />
        <PostModal />
      </div>
    </QueryClientProvider>
  );
}

export default App;
