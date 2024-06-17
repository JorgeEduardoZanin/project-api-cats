import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getCats = async () => {
  return await HttpService.get('images/search?limit=110');
}

export const getCat = async () => {
    return await HttpService.get('cat');
}