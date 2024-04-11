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

        <div>
          <div></div>
          <p>OR</p>
        </div>

        <button>
          <FcGoogle />
          {title} with Google
        </button>
      </div>
    </div>
  );
};

export default Template;
