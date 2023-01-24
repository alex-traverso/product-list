import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://shell-almond-whale.glitch.me/",
});

export default axiosClient;
