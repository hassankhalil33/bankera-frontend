import { useContext, useEffect } from 'react';
import axiosInstance from './axios';
import { UserContext } from '../contexts/UserContext';
import { logout, refresh } from './auth.apis';
import { useNavigate } from 'react-router-dom';

function sleep(delay) {
  return new Promise( (res) => {
    setTimeout(() => res(), delay)
  })
}

const useAxios = () => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setUser } = useContext(UserContext);

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

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest);
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const response = await refresh();
            const newAccessToken = response.accessToken;
            setAccessToken(newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            await sleep(100);
            console.log("am I here?")

            return axiosInstance(originalRequest);

          } catch (err) {
            setAccessToken(null);
            setUser({});
            navigate('/login');
            await logout();
            return Promise.reject(err);
          }
        }
        setAccessToken(null);
        setUser({});
        navigate('/login');
        await logout();
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  return axiosInstance;
};

export default useAxios;
