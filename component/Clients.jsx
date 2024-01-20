"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

 const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("logout");
  };
const {user} = useContext(Context)
  return (
    
    
        user.id ? ( <button className="btn" onClick={logoutHandler}>
        Log Out
      </button>) : <Link href={"/login"}>Login</Link>
    
         
  );
};


export const TodoButton = (id,completed)=>{
const deleteHandler = (id)=>{
alert(`Delete ${id}`)
}
return (
    <>
        <input type="checkbox" checked={completed}/>
        <button className="btn" onClick={()=>deleteHandler(id)}>Delete</button>
    </>
)
}