import axios from "axios";
import { API_KEY } from "../constants";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
