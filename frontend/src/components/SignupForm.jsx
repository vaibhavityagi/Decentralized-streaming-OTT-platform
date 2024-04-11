import React from "react";
import { useState } from "react";
// import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData([
      (prev) => [
        {
          ...prev,
          [event.target.name]: event.target.value,
        },
      ],
    ]);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    // toast.success("Account Create");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };
    console.log("printing data");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username*</label>
        <br />
        <input
          type="text"
          required
          placeholder="janeDoe12"
          onChange={changeHandler}
          value={FormData.firstName}
          name="userName"
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          placeholder="janedoe@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          name="email"
        />

        <div>
          <label htmlFor="">Create Password</label>
          <input
            type={showCreatePass ? "text" : "password"}
            required
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
          />
          <span onClick={() => setShowCreatePass(!showCreatePass)}>
            {showCreatePass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <label htmlFor=""> </label>

          <input
            type={showConfirmPass ? "text" : "password"}
            required
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
            name="confirmPassword"
          />

          <span
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className="absolute right-3 top-[38px] cursor-pointer z-10"
          >
            {showConfirmPass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
``;
