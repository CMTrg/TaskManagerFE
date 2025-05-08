import axios from "axios";

export const BASE_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: [(data) => {
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }],
});

export const setAuthHeader = (token, instance) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};
