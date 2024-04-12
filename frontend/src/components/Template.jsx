// eslint-disable-next-line no-unused-vars
import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Template = ({ title, formtype, setIsLoggedIn }) => {
  return (
    <div>
      <h1 className="titlee">{title}</h1>
      <div className="formmm">


        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>


        <button className="allbutton">
          <FcGoogle/>
          {title} with Google
        </button>
      </div>
    </div>
  );
};

export default Template;
