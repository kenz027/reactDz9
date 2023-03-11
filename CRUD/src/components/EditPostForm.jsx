import { useContext, useRef } from "react";
import { Context } from "../ContextProvider";
import avatar from "../assets/avatar.jpg";
import { useParams } from "react-router";
export default function EditPostForm(props) {
  const ctx = useContext(Context);
  const editTextAreaRef = useRef();
  const { id } = useParams();
  const formSubmitHandler = () => {
    const textAreavalue = editTextAreaRef.current.value;
    if (textAreavalue.trim()) ctx.editPost(textAreavalue, id);
  };
  return (
    <form onSubmit={formSubmitHandler} className="post-from-edit">
      <img src={avatar} alt="ava" />
      <textarea defaultValue={ctx.postContent.content} ref={editTextAreaRef} />
      <div className="post-form-edit-controls">
        <button type="submit" className="post-form-edit-controls-submit">
          Сохранить
        </button>
        <button
          type="button"
          onClick={() => props.setEditWindow()}
          className="post-form-edit-controls-return"
        >
          X
        </button>
      </div>
    </form>
  );
}
