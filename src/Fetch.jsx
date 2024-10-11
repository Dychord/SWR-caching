import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import useSWR, { mutate } from 'swr'
import { instanceProduct } from './utils/axios';

const fetcher = (url) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
});

const dummyData = {
    "title": "Sample Product",
    "price": 19.99,
    "description": "Sample description",
    "category": "electronics",
    "image": "https://plus.unsplash.com/premium_photo-1670897797602-ce90c0e441e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "rating": {
      "rate": 4.5,
      "count": 120
    }
}

function Fetch() {
  const {data, error, isValidating} = useSWR(`http://localhost:3000/products/products`, fetcher,{
    revalidateOnFocus: true,
  })


    if(error) return <p>{error.message}</p>
    if(!data) return <h1>Loading...</h1>


    const addProducts = async ()=>{
      try {
        mutate(`http://localhost:3000/products/products`, [...data, dummyData], false)
        await instanceProduct.post(`http://localhost:3000/products/create`, dummyData)
        mutate(`http://localhost:3000/products/products`)
        console.log('Product added successfully!')
      } catch (error) {
        console.log(error.message)
      }
    }
  
    const deleteDuplicates = async () => {
      try {
        await instanceProduct.delete('/delete-duplicate');
        console.log('Duplicate products deleted successfully');
        // Optionally, refetch data to refresh the product list
        mutate(`http://localhost:3000/products/products`);
      } catch (err) {
        console.error(err);
        alert('Failed to delete duplicates: ' + err.message);
      }
    };
  


  return (
    <>
        {/* Card component */}
        {/* {isValidating && <div className='w-full h-screen'>Re-fetching...</div>}  */}
        <Navbar />
        <button onClick={deleteDuplicates}  className='absolute text-white bg-red-500 px-3 py-1 rounded-lg right-40'>Delete Duplicates</button>
        <button onClick={addProducts}  className='absolute text-white bg-green-500 px-3 py-1 rounded-lg right-5'>Add product</button>

        <div className="flex flex-wrap p-10 gap-10 w-full bg-zinc-900 text-white">
          {data.map((item, index) => (
            <div key={index} className="w-48 h-80 flex flex-col bg-zinc-800 hover:scale-105 transition cursor-pointer overflow-hidden rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
              </div>
              <div className="flex justify-between items-center h-fit px-2">
                <div>
                  <h1 className='line-clamp-1'>{item.title}</h1>
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