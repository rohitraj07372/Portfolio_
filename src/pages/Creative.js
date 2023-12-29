import React from 'react'
import CreativeCard from '../components/CreativeCard'
import { NavLink } from 'react-router-dom' 
 

function Creative() {
  return (
    <div className=' bg-blue-50 pt-2 h-screen'>
      
    <div className=' xs:w-11/12 sm:w-11/12 md:w-8/12 mx-auto  p-1  font-bold text3xl'>
          <NavLink to='/creative/youtube'><CreativeCard/></NavLink>
          
    </div>
    </div>
  )
}

export default Creative
