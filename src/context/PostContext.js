'use client'
import React from 'react'
import { createContext, useState } from 'react'
export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [notes, setNotes] = useState([
        { id: 1, note: 'Post 1' },
    ]);
    const updateNotes = (postId, newNote) => {
        const updatedPosts = notes.map(post => {
            if (post.id === postId) {
                return { ...post, note: newNote };
            }
            return post;
        });
        setNotes(updatedPosts);
    };

    const addNotes = (newPost) => {
        setNotes([...notes, newPost]);
    }
    const deleteNotes=(postid)=>{
        const shouldDelete = confirm("Are you sure you want to delete this post?");
        if (shouldDelete) {
            const updatedPosts = notes.filter(post => post.id !== postid);
            setNotes(updatedPosts);
        }

       

    }


    return (
        <PostContext.Provider value={{notes, addNotes,updateNotes,deleteNotes}}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}
