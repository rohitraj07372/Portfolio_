import React from 'react'
import './Skills.css'
 
 

function Card({details}) {
  
 
  return (
    <div className='w-[21rem] p-2 group shadow-lg relative    bg-yellow-100   transition-all duration-500 ease hover:shadow-xl     '>
       <p className='absolute -bottom-2 opacity-0 text-purple-700 font-semibold m-4  p-3 flex justify-center items-center   group-hover:opacity-100  z-40 transition-all duration-3
       00 ease-in-out  '>{details.desc.Overview.substring(0,150)+"..."} </p>
     <div className=' group-hover:opacity-30    text-center transition-all duration-500 '>
     
      <img src={ details.image} alt="PROJECT_IMAGE" className='w-full ' />
       
       
       
       
     </div>
     <div className='absolute bottom-2 left-[50%] text-center  inline-block min-w-max group-hover:-translate-y-36 transition-all duration-300  -translate-x-[50%] bg-slate-900 pt-1 rounded-md px-3'>
            <p className='text-white font-bold text-lg '>{details.title}</p>
        </div>
    </div>
  )
}

export default Card
