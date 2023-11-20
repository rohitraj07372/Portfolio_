import React from 'react'
import animbg from '../assets/3618522.png';
import buddha from '../assets/buddha.png'
import './Home.css'
import { Link } from 'react-router-dom';
import {BiSolidChevronsRight} from 'react-icons/bi'


function Home() {
  return (
    <div className="w-full h-full bg-[#fdf8a9]">

     
    <div className='  w-10/12  mx-auto flex gap-2  xs:flex-col-reverse xs:gap-3  xs:justify-evenly xs:items-center  sm:flex-col-reverse xs:h-screen  sm:h-screen  md:flex-row lg:flex-row justify-between items-center md:h-[calc(100vh-3.5rem)]  lg:h-[calc(100vh-3.5rem)]  '>
       <div className='xs:text-center sm:text-text-center md:text-left lg:text-left pr-3 w-[50%] '>
         <p className='text-2xl font-bold text-[#4D6AFF]'>Hi there! I'm</p>
         <p className='text-6xl font-bold text-[#4D6AFF]'>Rohit,</p>
         <p  className='text-5xl font-bold text-[#4D6AFF]'>Frontend Developer</p>
         <p className='text-2xl font-bold text-[#4D6AFF]'>"Frontend Alchemist: Turning Pixels into Functional Art."</p>
         <div className=' md:flex md:gap-2 lg:flex lg:gap-2 xs:gap-2 sm:gap-2 sm:mb-5 xs:mb-5 md:mb-0 lg:mb-0 xs:flex xs:place-content-center md:place-content-start lg:place-content-start  '>
         <Link to='/about'><button className='yellowbg  '>LEARN MORE </button></Link>
        <a href="https://drive.google.com/uc?export=download&id=1VSLUSutvVarAkW1UdRNr7ozRQj4tC-vQ" download='Rohit_kumar.pdf' target='_resume'><button  className='yellowbg group flex justify-center gap-1 items-center '>RESUME <BiSolidChevronsRight className=' text-xl group-hover:translate-x-2 transition-translate duration-200 ease-in  '/></button></a>
         </div>
        
        
       </div>



       <div className='relative flex justify-center items-center w-[50%] '>
        <div className='rotate_image z-10 '> <img src={animbg} alt="" /></div>
        <div className='absolute  move shadow-sm z-10  '><img src={buddha} alt="" width='160rem' /></div>
        
       </div>
    </div>

    <p className='absolute bottom-5 mix-blend-multiply right-0  font-bold text-9xl text-[#FFE24F] opacity-40 stroke-slate-500 pl-3 -z-5'>ROHIT</p>
    </div>
  )
}

export default Home
