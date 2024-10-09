import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { VscReply } from "react-icons/vsc";
import { CiMenuFries } from "react-icons/ci";


function Posts() {

    const [isCommentActive, setCommentActive] = useState(false)
    const handleComment = ()=>{
        setCommentActive(!isCommentActive)
    }

  return (
    <>
            <div className='bg-zinc-800/70 text-white w-96 flex flex-col gap-2 px-3 py-2 rounded-md'>
                {/* 1 */}
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-4 items-center'>
                        <div className='w-14 h-14 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1728327511275-9c3491fb9eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div>
                            <h1>Name</h1>
                            <h1>Date</h1>
                        </div>
                    </div>
                    <div>
                        <h1><CiMenuFries /></h1>
                    </div>
                </div>
                {/* 2 */}
                <h1>Desc of the image...</h1>
                {/* 3 */}
                <div className='w-[99%] h-60 overflow-hidden rounded-md'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1726503014893-986e13826cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="" /></div>

                {/* 4 */}
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-4 items-center'>
                        <h1 className='cursor-pointer text-2xl'><IoMdHeartEmpty /></h1>
                        <h1 className='cursor-pointer text-xl' onClick={handleComment}><FaRegComment /></h1>
                        <h1 className='cursor-pointer text-xl'><IoShareSocialOutline /></h1>
                    </div>
                    <div>
                        <h1 className='cursor-pointer text-2xl'><CiSaveDown2 /></h1>
                    </div>
                </div>
                
                {/* 5 */}
                <div className='flex flex-wrap gap-3 justify-between items-center mt-2 bg-zinc-900/70 px-3 py-2 rounded-lg'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1728327511275-9c3491fb9eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div>
                            <h1 className='text-sm'>Name</h1>
                            <h1 className='text-xs'>Wow bro this car is sick...</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <h1 className='text-[14px]'><VscReply /></h1>
                        <h1 className='text-[14px]'><IoMdHeartEmpty /></h1>
                    </div>
                </div>

                {/* 6 */}
                <div>
                    {isCommentActive ? <div className='flex items-center bg-zinc-900 px-2 rounded-md '>
                        <input type="text" className='bg-zinc-900 w-full text-white px-1 py-1 outline-none' placeholder='comment...' />
                        <h1 className='cursor-pointer px-1 pl-2'>Add</h1>
                    </div> : null}
                </div>
            </div>
    </>
  )
}

export default Posts