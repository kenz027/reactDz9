import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const Context = createContext();
export default function ContextProvider(props) {
  const [postsList, setPostsList] = useState();
  const [postContent, setPostContent] = useState();
  const nav = useNavigate();
  async function getPosts() {
    const response = await fetch("http://localhost:7777/posts");
    const json = await response.json();
    setPostsList(json);
  }
  const getPost = async (id) => {
    const response = await fetch(`http://localhost:7777/posts/`);
    const json = await response.json();
    json.forEach((el, i) => {
      if (el.id === Number(id)) {
        setPostContent(json[i]);
      }
    });
  };
  function delPost(id) {
    try {
      fetch(`http://localhost:7777/posts/${id}`, {
        method: "delete",
      });
    } catch {
      console.log("error in delpost");
    } finally {
      nav("/");
    }
  }
  function postPost(content) {
    try {
      fetch("http://localhost:7777/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, id: 0 }),
      });
    } catch {
      console.log("err");
    } finally {
      nav("/");
    }
  }
  function editPost(content, id) {
    console.log(content, id);
    try {
      fetch(`http://localhost:7777/posts/${id}`, {
        method: "delete",
      });
    } catch {
      console.log("error in editPost");
    } finally {
      postPost(content);
    }
  }
  return (
    <Context.Provider
      value={{
        setPostsList: (data) => setPostsList(data),
        postsList: postsList,
        getPosts: () => getPosts(),
        getPost: (id) => getPost(id),
        postPost: (content) => postPost(content),
        postContent: postContent,
        delPost: (id) => delPost(id),
        editPost: (content, id) => editPost(content, id),
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
