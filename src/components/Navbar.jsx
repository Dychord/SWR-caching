import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../utils/axios'
import { AuthContext } from '../context/authContext'




function Navbar() {
  const navigate = useNavigate()
  const {logout, token} = useContext(AuthContext)


  const handleLogout = async ()=>{

    const response = await instance.get('/logout', {
      headers: {
        Authorization: `Bearer ${token}`, // Set the token in the Authorization header
      },
    })
    try {
      
      if (!token) {
        console.log("No token found!");
        return; // Early return if no token
      }
      if(response.data.success){
        logout()
        console.log(response.data);
        navigate('/login')
        // console.log("logged out successful");
      }
      else console.log("Logout not successfull!");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
        <div className='w-full h-20 bg-zinc-800 text-white text-xl flex gap-10 items-center justify-end px-10'>
            <Link to='/fetch'>Fetch</Link>
            <Link to='/comments'>Comments</Link>
            <Link onClick={handleLogout} className='text-red-700'>Logout</Link>
        </div> 
    </>
  )
}

export default Navbar





// // Usage in a component
// const SomeComponent = () => {
//     const { token, logout } = useContext(AuthContext);
//     // Use token as needed...
// };
