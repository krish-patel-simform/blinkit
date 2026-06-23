import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import AppLogo from "../assets/app_logo.svg";

import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schema";
import { loginUser } from "../firebase/loginUser";
import { Link, useNavigate } from "react-router";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const handleLogin: SubmitHandler<LoginSchema> = async (data) => {
    const isAuthenticated = await loginUser(data.email, data.password);

    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  };

  const onError: SubmitErrorHandler<LoginSchema> = (error) => {
    console.log(error);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-100 bg-white rounded-2xl shadow-xl p-8! flex flex-col gap-5">
        <img src={AppLogo} alt="AppLogo" className="w-16 h-16" />

        <div>
          <h1 className="text-2xl font-bold">Welcome Back 👋</h1>

          <p className="text-gray-500">Login to continue shopping</p>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleLogin, onError)}
        >
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button title="Login" mode="Primary" />
        </form>

        <p className="text-center text-sm">
          New member?{" "}
          <Link to="/signup" className="text-green-600 font-medium underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
