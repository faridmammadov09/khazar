import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/",
});

export const fetchData = async (name, setFn) => {
  const { data } = await API.get(name);
  setFn(data);
};

export const getEmployees = async (query = "") => {
  const { data } = await API.get("employees" + query);
  return data;
};

export const getDayOffInquiry = async (id) => {
  const { data } = await API.get(`dayOffs/${id}`);
  return data;
};

export const getBusinessTripInquiry = async (id) => {
  const { data } = await API.get(`businessTrip/${id}`);
  return data;
};

export const getVacationInquiry = async (id) => {
  const { data } = await API.get(`vacationInfo/${id}`);
  return data;
};

export const getGuestInquiry = async (id) => {
  const { data } = await API.get(`guests/${id}`);
  return data;
};

export const getSupplyInquiry = async (id) => {
  const { data } = await API.get(`itSupplies/${id}`);
  return data;
};

export const getPurchasingInquiry = async (id) => {
  const { data } = await API.get(`purchases/${id}`);
  return data;
};

export default API;
