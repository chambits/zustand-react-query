import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsList from "./components/PostsList";
import PostModal from "./components/PostModal";

const queryClient = new QueryClient();

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
