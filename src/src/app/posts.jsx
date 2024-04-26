'use client'
import React, { useState } from 'react'
import { useContext } from "react";
import { PostContext } from '@/context/PostContext';
import styles from './posts.module.css';
import Link from 'next/link';

const Notes = () => {
  const {notes, addNotes,updateNotes,deleteNotes} = useContext(PostContext);

  return (
    <div className={styles.container}>
  
       
  <Link href="/add">
          Add Note        
         </Link> 

      <h1 className={styles.heading}>Notes :</h1>
      {notes ? (
        notes.map((note) => (
          <div key={note.id} className={styles.post}>
       <h3 className={styles.title}>   Id: {note.id}</h3>
            <h3 className={styles.title}>Note: {note.note}</h3>
           
 
              <Link href={"edit/"+note.id}>  <button style={{height:"50px",width:"50px",margin:"10px",cursor:"pointer"}}>Edit</button></Link>
           
            <button onClick={e=>deleteNotes(note.id)}  style={{height:"50px",width:"50px",margin:"10px",
          backgroundColor:"red" ,cursor:"pointer"
          
          }}>Delete</button>

     
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>

  )
}

export default Notes