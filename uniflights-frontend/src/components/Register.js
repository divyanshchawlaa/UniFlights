import React, { useState } from "react";
import { registerUser } from "../api";

export default function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await registerUser({
        name,
        email,
        password
      });

      alert("Registered");

    } catch (err) {
      console.log(err);
      alert("Register error");
    }

  };

  return (

    <div>

      <h2>Register</h2>

      <input
        placeholder="name"
        onChange={e=>setName(e.target.value)}
      />

      <input
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  );

}