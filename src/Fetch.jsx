import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res)=> {
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
});


function Fetch() {
  const {data, error, isValidating} = useSWR(`https://fakestoreapi.com/products`, fetcher,{
    revalidateOnFocus: true,
  })

    if(error) return <p>{error.message}</p>
    if(!data) return <h1>Loading...</h1>

  return (
    <>
        {/* Card component */}
        {/* {isValidating && <div className='w-full h-screen'>Re-fetching...</div>}  */}
        <Navbar />

        <div className="flex flex-wrap p-10 gap-10 w-full bg-zinc-900 text-white">
          {data.map((item) => (
            <div key={item.id} className="w-48 h-80 flex flex-col bg-zinc-800 hover:scale-105 transition cursor-pointer overflow-hidden rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
              </div>
              <div className="flex justify-between items-center h-fit px-2">
                <div>
                  <h1>{item.title}</h1>
                  <h1 className="font-semibold">${item.price}</h1>
                </div>   
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Fetch

{/* Card component
       <div className="flex flex-wrap p-10 gap-10 w-full bg-zinc-900 text-white">
          {data.map((item) => (
            <div key={item.id} className="w-48 h-32 flex flex-col bg-zinc-800 hover:scale-105 transition cursor-pointer overflow-hidden rounded-lg">
              <div className="flex justify-between items-center h-fit px-2">
                <div>
                  <h1 className="font-semibold">${item.id}</h1>
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div> */}