import axios from "config/axios";

export default {
  getAll: (username, { page = 1 }) =>
    axios.get(`/users/${username}/repos?page=${page}`).then((res) => res),
  profile: (username) => axios.get(`/users/${username}`).then((res) => res),
};
