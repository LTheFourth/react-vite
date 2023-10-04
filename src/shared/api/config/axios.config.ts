/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { GlobalContext } from 'src/App';
import authSession from 'src/core/auth/auth-session.service';

const apiConfig = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_HOST,
});

function AxiosInterceptor({ children }: any) {
  const {isAuth} = useContext(GlobalContext);

  useEffect(() => {
    const reqInterceptor = (request: any) => {
      const token = authSession.token;
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    };

    const resInterceptor = (response: any) => {
      return response;
    };

    const errInterceptor = (error: any) => {
      errorHandler(error);
      return Promise.reject(error);
    };

    const errorHandler = (error: any) => {
      const statusCode = error.response?.status;
      // logging only errors that are not 401
      if (statusCode && statusCode !== 401) {
        console.error(error);
      }else{
        isAuth.setValue(false);
      }

      return Promise.reject(error);
    };

    const requestInterceptor =
      apiConfig.interceptors.request.use(reqInterceptor);
    const responseInterceptor = apiConfig.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => {
      apiConfig.interceptors.request.eject(requestInterceptor);
      apiConfig.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return children;
}

export default apiConfig;
export { AxiosInterceptor };
