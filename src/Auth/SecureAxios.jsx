import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

const SecureAxios = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("Error track in the interceptors", error.response);
      }
    );
  }, []);

  return axiosSecure;
};

export default SecureAxios;
