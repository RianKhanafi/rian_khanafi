import axios from "config/axios";

export default {
  getAll: (username) =>
    axios.get(`/users/${username}/repos`).then((res) => res),
  profile: () => axios.get("/users/RianKhanafi").then((res) => res),
};
