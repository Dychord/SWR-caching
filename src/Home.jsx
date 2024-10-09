import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
        <div className='flex items-center justify-center w-full h-screen bg-zinc-900 text-white text-xl gap-10'>
        <Link className=' text-white hover:bg-sky-600 rounded-lg px-4 py-1 transition duration-200' to='/login'>Login</Link>
        <Link className='border border-sky-500 hover:bg-sky-500 rounded-lg px-4 py-1 transition duration-200' to='/register'>Register</Link>
        </div>
    </>
  )
}

export default Home