import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/",
});

export const fetchData = async (name, setFn) => {
  const { data } = await API.get(name);
  setFn(data);
};

export default API;
