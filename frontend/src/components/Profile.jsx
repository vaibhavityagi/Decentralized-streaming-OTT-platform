import React from "react";
import ProfileComponents from "./ProfileComponents";

const Profile = () => {
  return (
    <div>
      <h1>Welcome to your Profile!</h1>
      <ProfileComponents heading="Your Plan" type="yourPlan" open={false} />
      <ProfileComponents heading="Manage your plan" />
      <ProfileComponents heading="Edit profile" />
      <ProfileComponents heading="Payment history" />
      <ProfileComponents heading="Logouts" />
    </div>
  );
};

export default Profile;
