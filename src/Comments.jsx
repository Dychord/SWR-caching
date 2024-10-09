import React, { useState } from 'react'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import Posts from './components/Posts'



function Comments() {
  const [isCreatePostActive, setIsCreatePostActive] = useState(false)

    const handleClick = ()=>{
        setIsCreatePostActive(!isCreatePostActive)
    }
  return (
    <>
        <Navbar />
        
        {isCreatePostActive ? <CreatePost  isCreatePostActive={isCreatePostActive} setIsCreatePostActive={setIsCreatePostActive} /> : null}
        <div className='bg-zinc-900 text-white h-screen flex flex-col items-center gap-5 overflow-y-scroll'>
            <button onClick={handleClick} className='bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg mt-3'>New Post</button>
            <Posts />
        </div>
    </>
  )
}

export default Comments