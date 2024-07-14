import axiosInstance from './axios';

export const login = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.get('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refresh = async () => {
  try {
    const response = await axiosInstance.get('/auth/refresh');
    return response.data;
  } catch (error) {
    throw error;
  }
};
