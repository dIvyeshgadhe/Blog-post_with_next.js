import { API_BASE } from "@/constants";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { store } from "./redux/store";

export interface IApiHeaders {
  token?: string;
}

export function getToken() {
  const { getState } = store;
  const {
    auth: { userData },
  } = getState();
  return userData?.authToken;
}

export function api(header: IApiHeaders = {}) {
  const axiosClient: AxiosInstance = axios.create({
    baseURL: API_BASE,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log("API_BASE: ", API_BASE);
  if (header?.token) {
    axiosClient.defaults.headers.common["Authorization"] = header?.token;
  }
  axiosClient.interceptors.request.use(
    (config) => {
      console.log("Starting Loading");
      if (getToken()) config.headers["Authorization"] = `Bearer ${getToken()}`;
      return config;
    },
    (error) => {
      console.error("Request interceptor error:", error);
      return Promise.reject(error);
    }
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("Here...", response);
      // if (response.data) {
      //   toast.dismiss();
      //   const successResponse = response.data as ISuccessResponse;
      //   toast.success(successResponse.message);
      // }
      return response.data;
    },
    (error: AxiosError) => {
      if (error.response) {
        if (error.response.data) {
          // console.error("API Error:", error.response.data);
          // toast.dismiss();
          // const errorResponse = error.response.data as IErrorResponse;
          // toast.error(errorResponse.error);
        }
        if (error.response.status === 401 || error.response.status === 403) {
          // dispatch(authFail({}));
        }
      }
      throw error;
    }
  );

  return axiosClient;
}
