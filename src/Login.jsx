//@ts-nocheck
import React, { useContext, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import instance from './utils/axios'
import { AuthContext } from './context/authContext'


function Login() {
  const navigate = useNavigate()
  const {register, handleSubmit, reset} = useForm()
  const {login} = useContext(AuthContext)

  async function handleFormData(data) {
    try {
        const response = await instance.post('/login', data);
        reset();
        if(response.data.success){
          const accessToken = response.data.token; // Extract accessToken here
          login(accessToken)
          navigate('/fetch')
        }

    } catch (err) {
        console.log(err.message);
    }
}

  

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-zinc-900'>
        <div className='w-[400px] h-fit bg-zinc-800/90 py-6 px-5 flex flex-col gap-5 items-center rounded-lg'>
          <h1 className='text-2xl font-semibold text-white'>Login</h1>
          <p className='text-white'>Don't have an account?  <Link className='text-sky-400 underline' to='/register'>Sign up</Link>  </p>

          <form className='flex flex-col gap-5 items-center w-full' onSubmit={handleSubmit(handleFormData)}>
            <input autoCorrect="off" autoComplete="off"  {...register('username')} type="username" className='bg-zinc-700/80 text-white rounded-lg outline-none py-2 px-3 w-full mt-4' placeholder='username' />
            <input autoCorrect="off" autoComplete="off"  {...register('password')} type="password" className='bg-zinc-700/80 text-white rounded-lg outline-none py-2 px-3 w-full' placeholder='password' />
            <button className='w-full py-2 bg-sky-600 rounded-lg font-semibold hover:bg-sky-500 m-4 text-white'>Login</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login