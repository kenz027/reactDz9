import { Route, Routes } from "react-router";
import ContextProvider from "./ContextProvider";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/posts/new" element={<NewPostPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
