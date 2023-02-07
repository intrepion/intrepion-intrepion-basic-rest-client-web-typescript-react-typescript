import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? "";

export const logInNew = (
  password: string,
  rememberMe: boolean,
  userName: string
) => {
  const values = {
    password,
    rememberMe,
    userName,
  };

  return axios.post(SERVER_URL + "/LogIns", values, { withCredentials: true });
};
