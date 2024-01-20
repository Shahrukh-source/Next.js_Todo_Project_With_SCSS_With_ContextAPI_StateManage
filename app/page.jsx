"use client"
import React from 'react'
import Form from "./addTodoForm";
import { TodoItem } from '../component/serverCompoent';
export default function page() {
  return (
    <div className='container'>
    <Form/>
    <section className='todoContainer'>
      <TodoItem title={"Sample Task"} description={"bscbcsbscjcggjwkl,.cmlkj"} id={"sampleId"} completed={true}></TodoItem>
    </section>

    </div>
  )
}
