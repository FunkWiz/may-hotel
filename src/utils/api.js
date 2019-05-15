import axios from 'axios'

const BASE_URL = 'https://mayhotel.herokuapp.com';
const generateUrl = path => `${BASE_URL}/${path}`

const http = {
    get: async path => await axios.get(generateUrl(path)),
    post: async (path, data) => await axios.post(generateUrl(path), data),
    put: async (path, data) => await axios.put(generateUrl(path), data),
    delete: async path => await axios.delete(generateUrl(path))
}

export const UserApi = {
    get: async userId => await http.get(`user/${userId}`)
}

export const RoomApi = {

}

export const ServiceApi = {

}