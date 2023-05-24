import sendRequest from "./send-request";
const BASE_URL = '/api/maps';

export function createMap(mapData) {
    return sendRequest(`${BASE_URL}`, 'POST', mapData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}