import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PostsList from "../components/PostsList";
import { Context } from "../ContextProvider";

export default function HomePage() {
  const { postsList, getPosts } = useContext(Context);
  useEffect(() => {
    setTimeout(getPosts, 100);
  }, []);
  return (
    <section className="page-home">
      <nav>
        <Link to="/posts/new">Создать пост</Link>
      </nav>
      {!postsList?.length ? (
        <p>Постов пока нет</p>
      ) : (
        <PostsList postsList={postsList} />
      )}
    </section>
  );
}
