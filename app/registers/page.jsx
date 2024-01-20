"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//   const { user, setUser } = useContext(context);
  const registerHandler = () => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login">
        <section>
          <form onSubmit={registerHandler}>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit">Sign Up</button>
            <p>Or</p>
            <Link href={"/login"}>Log in</Link>
          </form>
        </section>
      </div>
    </>
  );
}
