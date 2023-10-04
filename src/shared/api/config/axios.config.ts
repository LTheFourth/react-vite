/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'src/App';
import authSession from 'src/core/auth/auth-session.service';

const apiConfig = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_HOST,
});

function AxiosInterceptor({ children }: any) {
  const [axiosReady, setAxiosReady] = useState(false);
  const { isAuth } = useContext(GlobalContext);

  useEffect(() => {
    const reqHandler = (request: any) => {
      const token = authSession.token;
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    };

    const resHandler = (response: any) => {
      return response;
    };

    const errorHandler = (error: any) => {
      const statusCode = error.response?.status;
      // logging only errors that are not 401
      if (statusCode && statusCode !== 401) {
        console.error(error);
      } else {
        isAuth.setValue(false);
      }

      return Promise.reject(error);
    };

    const reqInterceptor = apiConfig.interceptors.request.use(reqHandler);

    const resInterceptor = apiConfig.interceptors.response.use(
      resHandler,
      errorHandler
    );

    setAxiosReady(true);
    return () => {
      apiConfig.interceptors.request.eject(reqInterceptor);
      apiConfig.interceptors.response.eject(resInterceptor);
    };
  }, []);
  return axiosReady ? children : '';
}

export default apiConfig;
export { AxiosInterceptor };
