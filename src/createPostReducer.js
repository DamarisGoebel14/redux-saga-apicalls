import {CREATE_POST_SUCCESS} from "./action";

const createPostReducer = (state = {post:{}}, action) => {
    switch(action.type) {
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.post
            };
        default:
            return state;
    }
}

export default createPostReducer;