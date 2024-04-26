"use client"
import React, { useContext, useState } from 'react'
import { useParams } from 'next/navigation'
import { PostContext } from '@/context/PostContext'
import Link from 'next/link'
import "./page.css"
export default function page() {
    const params = useParams()
    const {notes, addNotes,updateNotes,deleteNotes}=useContext(PostContext)
    const poste=notes.find(post=>post.id==params.id)
    const [edit,setEdit]=useState(poste.note)


  return (
    <div className='container'>
        {poste?(<div>
<h1>Id:{poste.id}</h1>
<input type='text' value={edit} onChange={(e) => setEdit(e.target.value)} />
<button onClick={(e)=>{
 
      if (edit.trim()!=='') {
        updateNotes(poste.id, edit);
          console.log('Post updated:', poste.id, edit);
      }
  }}><Link href={"/"}>Edit</Link></button>
            </div>
            ):(
                <div>No post founded</div>
            )}
    </div>
   
  )
}
