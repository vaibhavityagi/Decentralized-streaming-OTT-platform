import React from "react";
import ProfileComponent from "./ProfileComponent";
import { useNavigate } from "react-router-dom";

const Profile = ({ plan = "this is your plan" }) => {
  const navigate = useNavigate();
  return (
    <div className="m-16">
      <ProfileComponent heading="Your Plan" type="yourPlan" open={false}>
        {plan}
      </ProfileComponent>
      <ProfileComponent heading="Manage your plan"></ProfileComponent>
      <ProfileComponent heading="Edit profile"></ProfileComponent>
      <ProfileComponent heading="Payment history"></ProfileComponent>
      <ProfileComponent
        heading="Logout"
        onclick={() => {
          navigate("/");
        }}
      ></ProfileComponent>
    </div>
  );
};

export default Profile;
