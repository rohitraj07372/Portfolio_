import React from 'react'
import youtube from '../assets/youtube'

function CreativeCard() {
  return (
    <div>
        <div className='image w-[9rem] h-[12rem] rounded-md  border border-gray-500 p-2 bg-yellow-50 hover:scale-105 transition-all duration-300 hover:shadow-md'><img src={youtube} alt="" className='rounded-md mb-6'  />
        <p className='text-center bg-yellow-300 rounded-md py-2 '>Youtube</p></div>

      
    </div>
  )
}

export default CreativeCard
