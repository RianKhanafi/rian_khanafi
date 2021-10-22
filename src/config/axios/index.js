import axios from "axios";
import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_GITHUB}`,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
