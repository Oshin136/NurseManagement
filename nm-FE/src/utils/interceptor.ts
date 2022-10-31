import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/common";
import { getUserLoginFromLocalStorage } from "./localStorage";

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { accessToken } = getUserLoginFromLocalStorage();
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

const requestErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

export const initializeInterceptors = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const reqInterceptorId = axios.interceptors.request.use(
    requestInterceptor,
    requestErrorInterceptor
  );
  return reqInterceptorId;
};
