import axios from "axios";

const instance = axios.create({
  baseUrl: "...", //The Api (cloud function) URL
});

export default instance;
