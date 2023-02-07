import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? "";

export const userEditEmail = (email: string, userName: string) => {
  const values = {
    email,
  };

  return axios.put(SERVER_URL + "/Users/" + userName, values, {
    withCredentials: true,
  });
};

export const userEditPassword = (
  confirm: string,
  password: string,
  passwordCurrent: string,
  userName: string
) => {
  const values = {
    confirm,
    password,
    passwordCurrent,
    userName,
  };

  return axios.put(SERVER_URL + "/Users/" + userName, values, {
    withCredentials: true,
  });
};

export const userEditUserName = (userName: string, userNameCurrent: string) => {
  const values = {
    userName,
  };

  return axios.put(SERVER_URL + "/Users/" + userNameCurrent, values, {
    withCredentials: true,
  });
};

export const userNew = (
  accept: boolean,
  confirm: string,
  email: string,
  password: string,
  userName: string
) => {
  const values = {
    accept,
    confirm,
    email,
    password,
    userName,
  };

  return axios.post(SERVER_URL + "/Users", values, { withCredentials: true });
};

export const userView = (userName: string) => {
  return axios.get(SERVER_URL + "/Users/" + userName);
};
