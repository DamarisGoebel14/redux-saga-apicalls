import {takeEvery, call, put} from 'redux-saga/effects'
import {
    CREATE_POST_FETCH,
    CREATE_POST_SUCCESS,
    GET_POSTS_FETCH,
    GET_POSTS_SUCCESS,
    GET_USERS_FETCH,
    GET_USERS_SUCCESS
} from "./action";

// call api call / put call an action
//api function
function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}


function* workGetUsersFetch() {
    const users =  yield call(usersFetch);
    yield put({type: GET_USERS_SUCCESS, users})
}

// posts
function postsFetch() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}


function* workGetPostsFetch() {
    const posts =  yield call(postsFetch);
    yield put({type: GET_POSTS_SUCCESS, posts})
}

// create post

function createPostFetch() {

    let post = {
        "userId": 1,
        "title": "helloTitle",
        "body": "helloBody"
    }
    return fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST", headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(post)})
        .then((response) => response.json())
        .then((json) => console.log(json))

}


function* workCreatePostFetch() {
    const post =  yield call(createPostFetch);
    yield put({type: CREATE_POST_SUCCESS, post})
}



function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
    yield takeEvery(CREATE_POST_FETCH, workCreatePostFetch);
}

export default mySaga;