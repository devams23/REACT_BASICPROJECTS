import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

function Profile() {
    console.log("profile")
  const { user } = useContext(Usercontext);
  if (!user) return <div>Login !</div>;
  return <div>Hello , {user.username}</div>;
}

export default Profile;
