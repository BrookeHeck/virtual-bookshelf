import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './../../css/Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id='profileDiv'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;