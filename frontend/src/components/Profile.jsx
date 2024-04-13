import React from 'react'
import ProfileComponents from './ProfileComponents';

const Profile = () => {
  return (
    <div>
      <h1>Welcome to your Profile!</h1>
      <ProfileComponents heading="Your Plan" type="yourPlan" open={false}/>
      <ProfileComponents heading="Manage your plan" open={false}/>
      <ProfileComponents heading="Edit profile" open={false}/>
      <ProfileComponents heading="Payment history" open={false}/>
      <ProfileComponents heading="Logouts" open={false}/>
    </div>
  )
}

export default Profile