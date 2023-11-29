import React from 'react'
import {Link} from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import FullDetails from '../components/FullDetails';
import Footer from '../components/Footer';
 


function ProjectDetails({cardId}) {
  return (
    <div className='w-10/12 mx-auto pt-5'>
      <div className='pb-5'>
         <FullDetails cardId = {cardId}/>
        <button className='  bg-slate-800 mt-3 rounded-sm px-3 py-1 font-bold flex gap-2 justify-center items-center text-white'><span><IoMdArrowRoundBack className='text-xl ' /></span><span><Link to={-1}>BACK</Link></span></button>
        
      </div>
    </div>
    
  )
}

export default ProjectDetails
