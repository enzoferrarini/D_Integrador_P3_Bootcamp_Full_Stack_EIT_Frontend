import axios from "axios";
import { transformNumberToDB } from "../util/validations.js";

// console.log("REACT_APP_BASE_URL_API:");
// console.log(process.env.REACT_APP_BASE_URL_API);
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
});

export const getProducts = async (searchValue = "") => {
  let searchQuery = "";
  if (searchValue !== "") {
    searchQuery = "?search=" + searchValue;
  }
  const resp = await axiosInstance.get("/products" + searchQuery);
  return resp.data;
};

export const postProducts = async (body) => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (key === "price") {
      console.log("Key");
      console.log(key);

      console.log("Old Value");
      console.log(value);
      console.log("New Value");
      console.log(transformNumberToDB(value));
    }

    key === "price"
      ? formData.append(key, transformNumberToDB(value))
      : formData.append(key, value);
  });
  const resp = await axiosInstance.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return resp.data;
};

export const postComments = async (body) => {
  const resp = await axiosInstance.post("/comments", body);
  return resp.data;
};

export const getComments = async (body) => {
  const resp = await axiosInstance.get("/comments", body);
  return resp.data;
};

export const postCart = async (body) => {
  // console.log("Posting CART NEW");
  const resp = await axiosInstance.post("/cart", { items: body });
  return resp.data;
};

export const editCart = async (id, body) => {
  const resp = await axiosInstance.put(`/cart/${id}`, { items: body });
  return resp.data;
};

export const getCart = async (id) => {
  const resp = await axiosInstance.get(`/cart/${id}`);
  return resp.data;
};
