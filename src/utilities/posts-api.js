import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export function createPost(postData) {
    return sendRequest(`${BASE_URL}`, 'POST', postData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getPost(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}