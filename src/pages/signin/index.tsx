import style from "./style.module.scss";
import Link from "next/link";
import { login } from "@/service/auth";
import { AxiosResponse } from "axios";
import { setCookie } from "@/service/cookie";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";
import { RenderTextInput } from "@/components/common/FormFIeld";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authSuccess } from "@/service/redux/slices/AuthSlice";
import { toast } from "react-hot-toast";

interface ILoginParam {
  email: string;
  password: string;
}
export interface ILoginForm {
  email: string;
  password: string;
}

const Signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: "onTouched" });

  const onLogin = (data: ILoginForm) => {
    const loginData: ILoginParam = {
      email: data.email,
      password: data.password,
    };
    login(loginData)
      .then((res: AxiosResponse) => {
        dispatch(authSuccess(res?.data));
        router.replace(ROUTES.default);
        toast.success("Admin Login Successfully");
      })
      .catch((err) => {
        console.log("err: ", err);
        toast.error("Admin Login Successfully");
      });
  };

  return (
    <div className={style.container}>
      <div className={style.item}>
        <h2 className="text-center">Sign in</h2>
        <form onSubmit={handleSubmit(onLogin)}>
          <div>
            <RenderTextInput
              type="email"
              labelName={"Email"}
              placeholder="Please enter email"
              register={register("email", {
                required: "Email id required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter valid email",
                },
              })}
              errorMessage={errors?.email ? errors?.email?.message : ""}
            />
          </div>
          <div>
            <RenderTextInput
              type="password"
              labelName={"Password"}
              placeholder="Please enter password"
              register={register("password", {
                required: "Password is required",
              })}
              errorMessage={errors?.password ? errors?.password?.message : ""}
            />
          </div>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
