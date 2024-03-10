// Auth.tsx
import { Link, useNavigate } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { useState } from "react";
import { SignUpInput } from "@madhavsahi/medium-common-hono";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface AuthType {
  type: "signup" | "signin";
}
const Auth = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [signupInputs, setSignUpInputs] = useState<SignUpInput>({
    email: "",
    username: "",
    password: "",
  });

  const sendSignupSigninRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        signupInputs
      );
      const jwt_token = response.data.jwt_token;
      localStorage.setItem("JWT_TOKEN", jwt_token);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
      alert("Error while Signing Up user.");
    }
  };

  return (
    <div className="pt-10 border border-gray-300 w-full md:w-[50%] bg-white rounded-lg">
      <p className="text-gray-800 font-extrabold text-3xl text-center mb-4">
        {type === "signup" ? "Create an account" : "Welcome back to Medium"}
      </p>
      <p className="text-gray-600 font-semibold text-md text-center mb-4">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link
          className="font-bold hover:underline-blue"
          to={type === "signup" ? "/signin" : "/signup"}
        >
          {type === "signup" ? "Sign in" : "Sign up"}
        </Link>
      </p>
      <div className="mt-5 flex flex-col justify-center items-center">
        {type === "signup" && (
          <LabelledInput
            label="Username"
            placeholder="Enter your username"
            type="text"
            onChange={(e) =>
              setSignUpInputs({ ...signupInputs, username: e.target.value })
            }
          />
        )}
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          type="text"
          onChange={(e) =>
            setSignUpInputs({ ...signupInputs, email: e.target.value })
          }
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) =>
            setSignUpInputs({ ...signupInputs, password: e.target.value })
          }
        />
        <button
          onClick={sendSignupSigninRequest}
          className="text-white mt-4 mb-4 p-3 bg-blue-500 border border-blue-500 rounded-md w-[70%] md:w-[50%] hover:bg-blue-600"
        >
          {type === "signup" ? "Get Started" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
