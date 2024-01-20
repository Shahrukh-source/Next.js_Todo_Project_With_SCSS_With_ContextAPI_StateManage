"use client"

import React, { useState } from 'react'

export default function addTodoForm() {
    const [title,setTitle] = useState("")
    const [discription,setDiscription] = useState("")

    const submitHadler = (e)=>{
        e.PrevetDefault()

    }
  return (
    <>
        <div className='login'>
         <section>
         <form onSubmit={submitHadler}>
            <input
              type="text"
              placeholder="Text Task"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              type="text"
              placeholder="Task Discription"
              onChange={(e) => setDiscription(e.target.value)}
              value={discription}
            />
            <button type="submit">Add Task</button>
            </form>
         </section>
        </div>
    </>
  )
}
