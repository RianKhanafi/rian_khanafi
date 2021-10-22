import axios from "config/axios";

export default {
  getAll: () => axios.get("/users/RianKhanafi/repos").then((res) => res),
};
