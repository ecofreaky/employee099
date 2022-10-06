import axios from "axios";

const APICALL = axios.create({
  baseURL: "https://api.ecofreaky.com/api/products",
});

export const ProductApi = {
  fetchProduct() {
    return APICALL.get();
  },
};
