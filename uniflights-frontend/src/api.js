import axios from "axios";

const API = "https://uniflights-backend.onrender.com";

export const searchFlights = async (params) => {

  const res = await axios.get(
    `${API}/api/flights/search`,
    { params }
  );

  return res.data.flights;
};


export const saveFlight = async (data) => {

  const res = await axios.post(
    `${API}/api/bookings/save`,
    data
  );

  return res.data;
};


export const loginUser = async (data) => {

  const res = await axios.post(
    `${API}/api/auth/login`,
    data
  );

  return res.data;
};


export const registerUser = async (data) => {

  const res = await axios.post(
    `${API}/api/auth/register`,
    data
  );

  return res.data;
};