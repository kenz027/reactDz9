import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
export default function Post(props) {
  return (
    <li>
      <Link className="post" to={"/posts/" + props.id}>
        <img src={avatar} alt="ava" />
        <p className="post-content">{props.content}</p>
      </Link>
    </li>
  );
}
