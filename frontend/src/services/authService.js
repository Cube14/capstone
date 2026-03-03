import axios from "axios";
import { API_URL } from "../config";

// REGISTER
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/register`, userData);
};

// LOGIN
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/login`, userData);
};

const token = localStorage.getItem("token");

axios.get("/api/protected", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});