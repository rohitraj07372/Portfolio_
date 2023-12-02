import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {RiJavascriptFill,RiReactjsLine} from 'react-icons/ri'
import {SiCplusplus,SiExpress,SiFirebase,SiTailwindcss,SiCss3,SiMongodb,SiPostman} from 'react-icons/si'
import {TbBrandMysql} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
 
 

function Skills() {
  return (
    <div className='bg-[#4D6AFF] pt-2 pb-2 mt-1 relative bluebg overflow-hidden'>
        <div className='absolute circle top-6 left-8 moving'></div>
        <div className='  circle_blue  absolute bottom-0 right-0 moving2'></div>
      <div className='w-10/12 mx-auto mt-8 mb-5 text-[#FFF24F]  glassmorphic-container   '>
        <p className='font-bold text-5xl underline  pb-7 pt-7 text-center'>TECH STACK</p>
         <div className='w-full grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-content-center  gap-4  pb-5  '>
             
        <div className='justify-self-center bg-orange-500 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center   text-white font-bold justify-center hover:scale-110 transition-all duration-200 ease-in ' ><AiFillHtml5 className='text-2xl'/><p>HTML</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-blue-500 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiCss3 className='text-2xl'/><p>CSS</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-yellow-600 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><RiJavascriptFill className='text-2xl'/><p>JAVASCRIPT</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-sky-600 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><RiReactjsLine className='text-2xl'/><p>REACT</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-blue-900 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiCplusplus className='text-2xl'/><p>C++</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-orange-500 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><TbBrandMysql className='text-2xl'/><p>SQL</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-green-600 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiMongodb className='text-2xl'/><p>MONGODB</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-green-800 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><FaNodeJs className='text-2xl'/><p>NODE.JS</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-slate-900 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiExpress className='text-2xl'/><p>EXPRESS.JS</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-yellow-400 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiFirebase className='text-2xl'/><p>FIREBASE</p></div>

        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-sky-400 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiTailwindcss className='text-2xl'/><p>TAILWINDCSS</p></div>
        
        <div className='justify-self-center hover:scale-110 transition-all duration-200 ease-in bg-orange-500 w-[60%] rounded-md px-1 py-1 flex flex-row gap-2  items-center text-white font-bold justify-center'><SiPostman className='text-2xl'/><p>POSTMAN</p></div>


         </div>
      </div>
    
    </div>
  )
}

export default Skills
