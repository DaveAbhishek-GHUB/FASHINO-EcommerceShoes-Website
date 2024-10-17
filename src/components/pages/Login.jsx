/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Layout/header";
import Footer from "../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onSubmit = (Signupdata) => {
    console.log(Signupdata);
  };
  return (
    <>
      <Header />
      <div className="main-profile-wrapper w-[100vw] h-[100dvh]">
        <div className="heading-wrapper w-full mt-[5vw] flex justify-center">
          <h1 className="text-[2vw] font-serif uppercase">Login</h1>
        </div>
        <div className="semi-heading-wrapper w-full flex justify-center">
          <span>Enter your details for login or signup</span>
        </div>
        <div className="form-wrapper w-full mt-[5vw]">
          <form
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="forEmail m-auto ">
              <input
                className="border-2 p-3 w-[35vw] text-[1vw]"
                type="text"
                id="Email"
                placeholder="Enter Email: "
                {...register("email", {
                  required: "email required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-[1vw] text-red-500">{errors.email?.message}</p>
            </div>

            <div className="forPassword m-auto ">
              <input
                className="border-2 p-3 w-[35vw] text-[1vw]"
                type="password" // Changed from "text" to "password"
                id="Password"
                placeholder="Enter Password: "
                {...register("password", {
                  required: "Password required!",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              <p className="text-[1vw] text-red-500">
                {errors.password?.message}
              </p>
            </div>

            <div className="Signup-button w-full flex justify-center items-center">
              <button
                className="bg-black text-white p-2 w-[35vw] rounded-md"
                type="submit"
              >
                Signup
              </button>
            </div>
            <div className="login-nav-wrapper w-full flex justify-center">
              <span className="text-[#696866] font-sans">
                Dont have any account? <Link to="/register">Sign up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
