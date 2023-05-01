import axios from "axios";
import { parseCookies } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Authorization: `Bearer ${cookies["my.token"]}`,
    "Content-Type": "application/json",
  },
});