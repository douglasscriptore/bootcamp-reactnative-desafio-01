import axios from "axios";

const api = axios.create({
  baseURL: "http://10.14.3.38:8082",
});

export default api;
