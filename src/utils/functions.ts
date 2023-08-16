"use client";
import { CK_USER } from "@/constants";
import { getCookie } from "@/service/cookie";
import { authFail, authSuccess } from "@/service/redux/slices/AuthSlice";
import axios from "axios";
import { Store } from "redux";

// Fun used for setting up the common header for axios through out the app and rehydrate the redux store
export const setupAxios = async (store: Store) => {
  console.log("setup axios called");
  try {
    if (typeof document !== undefined && getCookie(CK_USER)) {
      const userData = JSON.parse(getCookie(CK_USER) || "");

      // It's used to rehydrate redux auth data when page is refreshed
      if (userData?.authToken) {
        store.dispatch(authSuccess(userData));
        axios.defaults.headers.common["Authorization"] =
          "Bearer" + " " + userData?.authToken;
      } else {
        store.dispatch(authFail({}));
      }
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const toCheckAuthPage = (path: string) => !path.includes("/signin");
