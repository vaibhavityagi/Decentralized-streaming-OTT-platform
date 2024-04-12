// eslint-disable-next-line no-unused-vars
import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import "../css/template.css";

// eslint-disable-next-line react/prop-types
const Template = ({ title, formtype, setIsLoggedIn }) => {
  return (
    <div className="alignment">
      <h1 className="titlee">{title}</h1>     
      <div className="formmm">


        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="parentOr">
          <div className="line"></div>
          <p className="or">OR</p>
          <div className="line"></div>
        </div>


        <button className="googlebutton">
          <FcGoogle/>
          {title} with Google
        </button>
      </div>
    </div>
  );
};

export default Template;
