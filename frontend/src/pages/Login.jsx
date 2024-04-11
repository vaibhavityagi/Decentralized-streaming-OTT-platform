import React from "react";
import Template from "../components/Template";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template title="Sign In" formtype="login" setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Login;
