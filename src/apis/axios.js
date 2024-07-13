import axios from 'axios';
import env from "react-dotenv";

const axiosInstance = axios.create({
  baseURL: env.SERVER_URI,
  withCredentials: true
});

console.log(env.SERVER_URI)
export default axiosInstance;
