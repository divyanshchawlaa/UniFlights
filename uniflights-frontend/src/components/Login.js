import React, { useState } from "react";
import { loginUser } from "../api";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const data = await loginUser({
        email,
        password
      });

      localStorage.setItem("token", data.token);

      alert("Logged in");

    } catch (err) {

      console.log(err);
      alert("Login failed");

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );

}