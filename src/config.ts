import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://private-052d6-testapi4528.apiary-mock.com",
});

export const API = {
  getUserDetailsAPI: "/authenticate",
  getUserProjects: "/info",
};
