import React from 'react'
import './Skills.css'
 
 

function Card({details}) {
  
 
  return (
    <div className='w-96 p-2 group shadow-lg relative   hover:scale-110 bg-yellow-100  transition-all duration-200 ease hover:shadow-xl hover:z-20   '>
       <p className='absolute opacity-0 text-purple-700 font-semibold m-4  p-3 flex justify-center items-center   group-hover:opacity-100  z-40 transition-all duration-3
       00 ease-in-out  '>{details.desc.Overview.substring(0,150)+"..."} </p>
     <div className=' group-hover:opacity-20    text-center '>
     
      <img src={ details.image} alt="PROJECT_IMAGE" className='w-full ' />
       
       
       
        <div className='absolute bottom-2 left-[50%]   -translate-x-[50%] bg-slate-900 pt-1 rounded-md px-3'>
            <p className='text-white font-bold text-lg '>{details.title}</p>
        </div>
     </div>
    </div>
  )
}

export default Card
