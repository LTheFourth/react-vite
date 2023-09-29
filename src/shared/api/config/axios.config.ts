/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const apiConfig = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_HOST,
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

apiConfig.interceptors.response.use((config )=> {
  return config;
}, (error) => {
  return errorHandler(error);
});
