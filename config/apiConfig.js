import axios from "axios";

export const API_BASE_URL = 'https://cdtn-backend-ecommerce.fly.dev/';

// Hàm để lấy token từ localStorage
export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userToken") || "";
  }
  return "";
};

// Tạo một instance của Axios với các cài đặt cơ bản
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
});

export const apiFormData = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data"
  },
});

// Interceptor để thêm token vào mỗi request
api.interceptors.request.use((config) => {
  const user = JSON.parse(getTokenFromLocalStorage());
  if (user) {
    config.headers.Authorization = `Bearer ${user}`;
  }
  return config;
});
