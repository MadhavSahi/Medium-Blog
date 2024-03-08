import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { useState } from "react";
import { SignUpInput } from "@madhavsahi/medium-common-hono";

interface AuthType {
  type: "signup" | "signin";
}

const Auth = ({ type }: AuthType) => {
    
  const [signupInputs, setSignUpInputs] = useState<SignUpInput>({
    email: "",
    username: "",
    password: "",
  });
  return (
    <>
      <div className=" border-black border-2 w-[50%]">
        <p>Auth</p>
        <p className="text-black font-extrabold text-lg text-center">
          Create an Account
        </p>
        <p className="text-gray-600 font-semibold text-md text-center">
          Already have an account ?<Link to={"/signin"}> Login</Link>
        </p>
        <div className="flex flex-col justify-normal text-center">
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
        </div>
        <button className="text-white mt-4 mb-4 p-3 bg-black b-1 border-black rounded-md w-[100%]">
          SignUp
        </button>
      </div>
    </>
  );
};

export default Auth;
