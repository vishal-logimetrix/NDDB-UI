import axios from "axios";

const Interceptor = axios.create({
  baseURL: "https://your-api-base-url.com/api",
  timeout: 10000,
});

Interceptor.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Interceptor.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: redirect or logout
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default Interceptor;
