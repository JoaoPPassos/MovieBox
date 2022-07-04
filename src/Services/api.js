import axios from "axios";

const url = "https://imdb-api.com/en/API";
export const key = "k_q0aj7ky7";

export const api = axios.create({
  baseURL: url,
});
