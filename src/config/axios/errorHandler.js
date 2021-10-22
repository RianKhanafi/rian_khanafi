import axios from "./index";

export default function errorHandler(error) {
  return Promise.reject(error);
}
