import axios from "axios";

const INSTANCE = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

export default INSTANCE;
