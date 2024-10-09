import React from 'react';
import Navbar from './components/Navbar';
import Routing from './utils/Routing';


function App() {
    return (
        <>
            <div className='h-screen w-full'>
              <Routing />
            </div>
        </>
    );
}

export default App;


{/* {data.map((item, index)=>(
       <div className='ml-10' key={index}>
        <h1 className='selection:bg-green-400 font-semibold'>{item.id} <span className='ml-2 mb-5'>{item.title}</span></h1>
       </div>
      ))} */}