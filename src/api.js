export function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

export function postsFetch() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}

export function createPostFetch() {

    let post = {
        "userId": 1,
        "title": "helloTitle",
        "body": "helloBody"
    }

    return fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST", headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(post)})
        .then((response) => response.json())
        .then((json) => console.log(json))

}