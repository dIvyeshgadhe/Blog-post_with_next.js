import style from "./style.module.scss";
import { login } from "@/service/auth";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";
import { RenderTextInput } from "@/components/common/FormFIeld";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authSuccess } from "@/service/redux/slices/AuthSlice";
import { toast } from "react-hot-toast";

// Interface to define the shape of login parameters
interface ILoginParam {
  email: string;
  password: string;
}

// Interface to define the shape of the login form data
export interface ILoginForm {
  email: string;
  password: string;
}

// React component for the Signin page
const Signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: "onTouched" });

  // Function to handle the login form submission
  const onLogin = (data: ILoginForm) => {
    // Constructing the login data object
    const loginData: ILoginParam = {
      email: data.email,
      password: data.password,
    };

    // Calling the login API and handling the response
    login(loginData)
      .then((res: AxiosResponse) => {
        // Dispatching a Redux action for successful authentication
        dispatch(authSuccess(res?.data));

        // Redirecting the user to the post page
        router.replace(ROUTES.post);

        // Displaying a success toast
        toast.success("Admin Login Successfully");
      })
      .catch((err) => {
        console.log("err: ", err);
        // Displaying an error toast if login fails
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.item}>
        <h2 className="text-center">Sign in</h2>
        <form onSubmit={handleSubmit(onLogin)}>
          {/* Input field for email */}
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
          {/* Input field for password */}
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
          {/* Login button */}
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
