import {GET_POSTS_SUCCESS} from "./action";

const postReducer = (state = {posts:[]}, action) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
}

export default postReducer;