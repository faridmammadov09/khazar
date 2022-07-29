import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/",
});

export const fetchData = async (name, setFn) => {
  const { data } = await API.get(name);
  setFn(data);
};

export const getEmployees = async (id = "", query = "") => {
  const { data } = await API.get(
    `employees/${id}${query}?_sort=id&_order=desc`
  );
  return data;
};

export const getVacations = async (query = "") => {
  const { data } = await API.get("vacationBalances" + query);
  return data;
};

export const getDayOffInquiry = async (id = "") => {
  const { data } = await API.get(`dayOffs/${id}`);
  return data;
};

export const getBusinessTripInquiry = async (id = "") => {
  const { data } = await API.get(`businessTrip/${id}`);
  return data;
};

export const getVacationInquiry = async (id = "") => {
  const { data } = await API.get(`vacationInfo/${id}`);
  return data;
};

export const getGuestInquiry = async (id = "") => {
  const { data } = await API.get(`guests/${id}`);
  return data;
};

export const getSupplyInquiry = async (id = "") => {
  const { data } = await API.get(`itSupplies/${id}`);
  return data;
};

export const getPurchasingInquiry = async (id = "") => {
  const { data } = await API.get(`purchases/${id}`);
  return data;
};

export const getAnnouncement = async (id = "") => {
  const { data } = await API.get(`announcements/${id}?_sort=id&_order=desc`);
  return data;
};

export const getUsers = async () => {
  const { data } = await API.get("users?_sort=id&_order=desc");
  return data;
};

export const getUserRoles = async () => {
  const { data } = await API.get("userRoles?_sort=id&_order=desc");
  return data;
};

export default API;
