import {CREATE_POST_SUCCESS, CREATE_POST_FAILED} from "./action";

const initialState = {
    posts: []
}


const createPostReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case CREATE_POST_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default createPostReducer;