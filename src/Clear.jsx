import React from 'react';
import Navbar from './components/Navbar';

function Clear() {
    return (
       <>
            <Navbar />
            <div className='w-full h-full bg-zinc-900 flex items-center justify-center text-white text-xl'>
                
                <h1>Clear</h1>
            </div>
       </>
    );
}

export default Clear;
