import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setformData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email"> Email </label>
      <br />
      <input
        required
        type="email"
        placeholder="Enter your email address"
        name="email"
        id="email"
        value={formData.email}
        onChange={changeHandler}
      />

      <br />

      <label htmlFor="password">Password </label>
      <br />
      <input
        required
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        name="password"
        id="password"
        value={formData.password}
        onChange={changeHandler}
      />

      <span onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? (
          <AiOutlineEyeInvisible fontSize={14} fill="#AFB2BF" />
        ) : (
          <AiOutlineEye fontSize={14} fill="#AFB2BF" />
        )}
      </span>

      {/* <Link to="#">
        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
          Forgot Password?
        </p>
      </Link> */}

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
