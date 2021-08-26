import {useDispatch, useSelector} from "react-redux";
import {getUsersFetch} from "./action";
import {getPostsFetch} from "./action";
import {createPostFetch} from "./action";


function App() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.myFirstReducer.users);
    const posts = useSelector(state => state.postReducer.posts)

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => dispatch(getUsersFetch())}>Fetch Users</button>
            <button onClick={() => dispatch(getPostsFetch())}>Fetch Posts</button>
            <button onClick={() => dispatch(createPostFetch())}>Create Post</button>
            <div>Users: {users.map((user) => (<div key={user.id}>{user.name}</div>))}</div>
            <div>Posts: {posts.map((post) => (<div key={post.id}>{post.title}</div>))} </div>
        </div>
    );
}


export default App;
