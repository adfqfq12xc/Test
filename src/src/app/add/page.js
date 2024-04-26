"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import "./page.css"
import { PostContext } from '@/context/PostContext'
export default function page() {
    const {Notes, addNotes}=useContext(PostContext)
    const [titlee,setTitle]=useState("")
    console.log(titlee)
    console.log(Notes)
  return (
    <div className='container'>   
     <form >
    <input
      type="text"
    
      placeholder="Add Note"
      value={titlee}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button onClick={(e)=>{
        e.preventDefault
        addNotes({id:Date.now(),note:titlee})

    }} > <Link href='/'>Add me</Link> </button>

    </form>
    </div>
  )
}
