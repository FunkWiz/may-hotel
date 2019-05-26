import axios from "axios";
import { get } from "./storage";

const BASE_URL = "https://mayhotel.herokuapp.com";
const generateUrl = path => `${BASE_URL}/${path}`;

const getToken = () => {
  const user = get("user");
  if (user && user.token) {
    return user.token;
  }
};

const getHeaders = (authorized = false) => {
  const headers = {
    "Content-Type": "application/json"
  };

  if (authorized) {
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  console.log(headers);
  return headers;
};

const http = {
  get: async (path, auth = false) =>
    await axios.get(generateUrl(path), {
      headers: getHeaders(auth)
    }),
  post: async (path, data, auth = false) =>
    await axios.post(generateUrl(path), data, {
      headers: getHeaders(auth)
    }),
  put: async (path, data) => await axios.put(generateUrl(path), data),
  delete: async path => await axios.delete(generateUrl(path))
};

export const UserApi = {
  get: async userId => await http.get(`users/${userId}`),
  me: async () => await http.get('users/me', true),
  login: async (email, password) =>
    await http.post(`users/login`, { email, password }),
  signUp: async (email, password, firstName, lastName, address, phone) =>
    await http.post(`users`, {
      email,
      password,
      firstName,
      lastName,
      address,
      phone
    }),
  vouchers: async () => {
    return await http.get("users/me", true);
  }
};

export const OrderApi = {
  add: async (hotel, meal, user, seats, date) =>
    await http.post("hotels/tables/orders", {
      meal,
      user,
      seats,
      date,
      hotel
    }),
  getAll: async hotelId => await http.get(`hotels/tables/all/${hotelId}`)
};

export const RoomApi = {
  get: async hotel_id => await http.get(`hotels/rooms/${hotel_id}`)
};

export const ServiceApi = {
  cleaning: async (room_id, date) =>
    await http.post("hotels/rooms/services/clean", { room_id, date }),
  wakeUp: async (room_id, date) =>
    await http.post("hotels/rooms/services/alarm", { room_id, date }),
  maintenance: async (room_id, desc) =>
    await http.post("hotels/rooms/services/maintenance", { room_id, desc }),
  missingItems: async (room_id, items) =>
    await http.post("hotels/rooms/services/missing", { room_id, items })
};

export const EventsApi = {
  get: async hotel_id => await http.get(`hotels/events/${hotel_id}`)
};
