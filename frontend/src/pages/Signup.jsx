import React from "react";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template title="Sign Up" formtype="signup" setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Signup;
