import Link from 'next/link'
import React from 'react'
import {LogoutBtn} from "../component/Clients"
export default function header() {
  return (
    <div className='header'>
        <div>
            <h2>TODO..</h2>
        </div>
        <article>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
           
            {/* <Link href={"/login"}>Login</Link> */}
          <LogoutBtn/>

        </article>
    </div>
  )
}
