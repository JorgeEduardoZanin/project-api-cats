import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "Content-type": "application/json",
    "x-api-key" : "live_iJuugeIgRPzPbAhsSMatPTKurpx6e6JkaXSwQf95QoSreG76EYN6RwLRvkQYbk0y"
  },
});

export const getCats = async () => {
  return await HttpService.get('images/search?limit=30&has_breeds=1');
}

export const getCat = async () => {
    return await HttpService.get('cat');
}