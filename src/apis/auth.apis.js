import axiosInstance from './axios';

export const login = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
