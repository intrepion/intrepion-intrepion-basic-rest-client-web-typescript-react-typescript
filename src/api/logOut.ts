import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? "";

export const logOutNew = () => {
  return axios.post(SERVER_URL + "/LogOuts", null, { withCredentials: true });
};
