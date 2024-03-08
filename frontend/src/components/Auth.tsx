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
    console.log("heyyy");
    
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        signupInputs
        //this is the body we r sending
      );
      //   const response2 = await axios.post(
      //     BACKEND_URL+"/api/v1/user/"+{type === "signup" ? "signup" : "signin"}
      //     //this is the body we r sending
      //   );
      const jwt_token = response.data.jwt_token;
      console.log(response);
      console.log(jwt_token);
      
      //here we get the JWT Token
      localStorage.setItem("JWT_TOKEN", jwt_token);
      navigate("/blogs");
      //we add the token in Local storage to use further
    } catch (error) {
      console.log(error);
      
      alert("Error while Signing Up user.");
    }
  };
  return (
    <>
      {/* {JSON.stringify(signupInputs)}; */}
      <div className="pt-10 border-black border-2 w-[50%]">
        {/* <p>Auth</p> */}
        <p className="text-black font-extrabold text-3xl text-center">
          {type === "signup"
            ? "Already have an account ? "
            : "Welcome to Medium Clone "}
        </p>
        <p className="text-gray-600 font-semibold text-md text-center">
          {type === "signup"
            ? "Already have an account ? "
            : "Don't have an account ? "}
          <Link
            className="font-bold hover:underline-black"
            to={type === "signup" ? "/signin" : "/signup"}
          >
            {type === "signup" ? "Sign-In" : "Sign-Up"}
          </Link>
        </p>
        <div className="mt-5 flex flex-col justify-normal items-center text-center">
          {type === "signup" ? (
            <LabelledInput
              label="Username"
              placeholder="Enter username"
              type="text"
              onChange={(e) => {
                setSignUpInputs((signupInputs) => ({
                  ...signupInputs,
                  username: e.target.value,
                  //overriding the username property...the C contains the previous state of signupInput
                }));
              }}
            />
          ) : null}
          <LabelledInput
            label="Email"
            placeholder="Enter email"
            type="text"
            onChange={(e) => {
              setSignUpInputs((signupInputs) => ({
                ...signupInputs,
                email: e.target.value,
                //overriding the username property...the C contains the previous state of signupInput
              }));
            }}
          />
          <LabelledInput
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(e) => {
              setSignUpInputs((signupInputs) => ({
                ...signupInputs,
                password: e.target.value,
                //overriding the username property...the C contains the previous state of signupInput
              }));
            }}
          />
          <button
            onClick={sendSignupSigninRequest}
            className="text-white mt-4 mb-4 p-3 bg-black b-1 border-black rounded-md w-[30%]"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
