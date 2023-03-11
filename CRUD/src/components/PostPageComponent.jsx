import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../ContextProvider";
import EditPostForm from "./EditPostForm";
export default function PostPageComponent() {
  const [editWindowIsVisible, setEditWindow] = useState(false);
  const ctx = useContext(Context);
  const { id } = useParams();
  const nav = useNavigate();
  const editWindowOpen = () => {
    setEditWindow(true);
  };
  return (
    <div className="post-page-component">
      {editWindowIsVisible ? (
        <EditPostForm setEditWindow={setEditWindow} />
      ) : (
        <>
          <button
            onClick={() => nav("/")}
            className="post-page-component-return-button"
          >
            Вернуться назад
          </button>
          <p className="post-page-component-text">{ctx.postContent.content}</p>
          <div className="post-page-component-controls">
            <button onClick={() => ctx.delPost(id)} className="button-del">
              Удалить
            </button>
            <button onClick={editWindowOpen} className="button-edit">
              Изменить
            </button>
          </div>
        </>
      )}
    </div>
  );
}
