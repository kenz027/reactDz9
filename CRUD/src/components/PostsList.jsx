import Post from "./Post";

export default function PostsList(props){
    return (
        <ul>
            {props.postsList.map(post=>(<Post content={post.content} id={post.id} key={self.crypto.randomUUID()} />))}
        </ul>
    )
}