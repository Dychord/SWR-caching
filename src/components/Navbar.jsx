import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <div className='w-full h-20 bg-zinc-800 text-white text-xl flex gap-10 items-center justify-end px-10'>
            <Link to='/'>Home</Link>
            <Link to='/clear'>Clear</Link>
        </div> 
    </>
  )
}

export default Navbar