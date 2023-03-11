import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import PostPageComponent from "../components/PostPageComponent";
import { Context } from "../ContextProvider";

export default function PostPage() {
  const { id } = useParams();
  const { getPost, postContent } = useContext(Context);
  useEffect(() => {
    getPost(id);
  }, []);
  return (
    <section className="page-post">
      {postContent ? <PostPageComponent /> : <p>Пост не найден</p>}
    </section>
  );
}
