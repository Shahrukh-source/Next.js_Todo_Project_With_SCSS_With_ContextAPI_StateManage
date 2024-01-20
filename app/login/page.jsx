"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";

export default function page() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//   const { user, setUser } = useContext(context);

  const loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login">
        <section>
          <form onSubmit={loginHandler}>
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
            <button type="submit">Login</button>
            <p>Or</p>
            <Link href={"/register"}>New User</Link>
          </form>
        </section>
      </div>
    </>
  );
}
