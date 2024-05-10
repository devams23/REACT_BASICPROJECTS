import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(Usercontext);
  console.log("login")
  const handlesubmit = (e) => {
    e.preventDefault;
    setuser({ username, password });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
