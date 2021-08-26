export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
})

// posts
export const GET_POSTS_FETCH = "GET_POSTS_FETCH";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export const getPostsFetch = () => ({
    type: GET_POSTS_FETCH
})

// create post

export const CREATE_POST_FETCH = "CREATE_POST"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"

export const createPostFetch = () => ({
    type: CREATE_POST_FETCH
})
