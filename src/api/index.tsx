import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export default api;

// https://id.twitch.tv/oauth2/token?client_id=abcdefg12345&client_secret=hijklmn67890&grant_type=client_credentials