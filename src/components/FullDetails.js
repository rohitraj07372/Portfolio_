import React from 'react'
import data from '../data/CardData'
import { FaGithubAlt } from "react-icons/fa";
import ReactPlayer from 'react-player'
import './fullDetails.css'

function FullDetails({cardId}) {
  const selectedData = data.find(data =>data.id === cardId);
  const features = selectedData.desc.features;
  
   console.log("video link is"+selectedData.video);
  return (
    <div className='mt-24'>
      {console.log(selectedData.video )}
      <div className=' justify-center font-bold text-2xl flex    '>   
        {
          <p className='capitalize text-[#FFF24F]  xs:mb-8 sm:mb-8 bg-[#4D6AFF]  self-center px-3 py-2 rounded-md'>{selectedData.title}</p>
       
        }
          { console.log(selectedData.desc.Overview)}
      </div>
      <div className= 'xs:flex xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:flex-row md:gap-8 md:justify-between md:items-start lg:flex-row lg:gap-8 lg:items-start lg:justify-between flex text-slate-700 font-serif gap-10 justify-between'>
            <div className='xs:max-w-[100%] md:max-w-[60%] lg:max-w-[50%]'>
              <p className='font-bold text-[#4D6AFF] text-xl underline mb-2'>Overview:</p>
              <p className=' italic font-serif leading-7 mb-1 whitespace-pre-line'>{selectedData.desc.Overview}</p>
              <p className='font-bold text-[#4D6AFF] text-xl underline mb-2'>Features:</p>
              <p className='italic font-serif leading-7' >{
                  Object.keys(features).map((data, index)=>(<p className='border-b-2 mb-1 border-slate-300'  > <span className='font-bold w-full   rounded-md text-[#4D6AFF]'>{index+1}: </span> <span>{features[data]}</span></p>))
                } </p>

              <p className='font-bold text-[#4D6AFF] text-xl underline mb-2'>Technology Used:</p>
              <p className='mt-1 mb-1'>{ selectedData.desc.Technology}</p>
            </div>
            <div>
              <div className=' flex flex-col gap-3 '>
              <div className='rounded-md'><ReactPlayer  controls playing loop url={selectedData.video}   type='video/mp4' width='367px' height="auto"/></div>
             
             
              
              <a href={selectedData.link} target='_password'>  <div className='relative group'>
                <div className='absolute left-0 bottom-2 z-10 bg-blue-800 text-yellow-300 px-3 py-1   font-bold text-xl w-[40%] group-hover:w-full  transition-all   duration-300  ease-in-out  '><p>Go to project</p></div>
               <img className='rounded-lg   transition-all ' src={selectedData.image} alt=""  width='367px'/>
              </div></a>
              <a href={selectedData.git} target='_git'><div className='flex gap-3 py-1 rounded-full bg-yellow-400 justify-center items-center text-xl font-bold font-serif hover:bg-blue-700 hover:text-white transition-all duration-300 '>
              <div><FaGithubAlt /></div>
              <p>Git Hub Repo.</p>
             </div></a>
              </div>
             
            </div>
      </div>
    </div>
  )
}

export default FullDetails
