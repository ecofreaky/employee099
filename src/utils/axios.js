import axios from "axios";

const APICALL = axios.create({
  baseURL: "https://api.ecofreaky.com/api/products",
});

export const API = {
  fetchProduct() {
    return APICALL.get();
  },
};
