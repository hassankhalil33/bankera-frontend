import { useContext, useEffect } from 'react';
import axiosInstance from './axios';
import { UserContext } from '../contexts/UserContext';

const useAxiosHeaders = () => {
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    const setAuthHeader = (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    };

    const requestInterceptor = axiosInstance.interceptors.request.use(
      setAuthHeader,
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  return axiosInstance;
};

export default useAxiosHeaders;
