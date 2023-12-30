import React from 'react'
import youtube from '../assets/youtube'

function CreativeCard( props ) {
  return (
    <div>
        <div className='image lg:w-[12rem] lg:h-[14rem] xs:w-full xs:h-auto  rounded-md  border border-gray-500 p-2 bg-yellow-50 hover:scale-105 transition-all duration-300 hover:shadow-md'><img src={props.image} alt="" className='rounded-md mb-6'  />
        <p className='text-center bg-yellow-300 rounded-md py-2 '>{ props.text }</p></div>

      
    </div>
  )
}

export default CreativeCard
