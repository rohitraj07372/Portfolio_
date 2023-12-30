import React from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";

function Youtube({hamIsClicked}) {
  return ( 
    <div className='min-h-screen  '>
    <div className={` p-3 xs:w-full md:w-10/12 lg:w-8/12 mx-auto ${hamIsClicked ?"blur-sm opacity-80 ":""}   `}>

       
   
      
      <Link to={-1}><button className='py-2 px-3 flex gap-2 items-center fixed top-20 text-white bg-blue-700 font-bold rounded-full justify-center'> <IoCaretBackOutline /> Back</button></Link>
    </div>
    </div>
    
  )
}

export default Youtube
