import { loginParam } from "@/types/auth";
import { IApiHeaders, api } from "./api";
import { LOGIN } from "@/constants/api";
import { store } from "./redux/store";
import { authFail, authSuccess } from "./redux/slices/AuthSlice";
import postId from "../pages/post/[postId]";

export const login = async (data: loginParam): Promise<any> => {
  return api()
    .post(LOGIN, data)
    .then((res) => {
      store.dispatch(authSuccess(res?.data));
      return Promise.resolve(res);
    })
    .catch((err) => {
      store.dispatch(authFail({}));
      return Promise.reject(err);
    });
};

export const post = async (): Promise<any> => {
  return api().get("https://jsonplaceholder.typicode.com/posts");
};
export const postDetail = async (postId: string): Promise<any> => {
  return api().get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};
