import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../ContextProvider";

export default function NewPostPage() {
  const contentRef = useRef();
  const ctx = useContext(Context);
  const nav = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const contentValue = contentRef.current.value;
    if (contentValue.trim()) {
      ctx.postPost(contentValue);
    }
  };

  return (
    <section className="page-post-new">
      <form onSubmit={formSubmitHandler}>
        <textarea name="content" ref={contentRef} />
        <button type="submit">Опубликовать</button>
        <button className="btn-close" onClick={() => nav("/")}>
          X
        </button>
      </form>
    </section>
  );
}
