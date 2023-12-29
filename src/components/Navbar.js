import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import {  BsYoutube} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import {HiPlusSm} from 'react-icons/hi'
import './Navbar.css'
import logo_white from '../assets/logo_white.png'


function Navbar({hamIsClicked, setHamIsClicked}) {
    const yellow =' #FFE24F';
    const blue = '#4D6AFF';
   
    function clickHandler(){
       hamIsClicked?setHamIsClicked(false):setHamIsClicked(true);
    }
  return (
    <div className='bg-[#FFE24F] h-[3.5rem] flex items-center z-[70] fixed top-0 w-full '>
     <nav className='z-[15]  flex relative justify-between w-8/12 mx-auto sm:mx-auto xs:mx-auto   items-center sm:w-11/12 xs:w-11/12 md:w-8/12 lg:w-8/12'>

     <Link to='/'>
        <div className={` flex gap-3 items-center bg-yellow-500  shadow-inner p-1 shadow-yellow-950  
         rounded-full w-[9rem]   } `}>
        <img className='rounded-full  ' src={profile} alt="profile_image" width='40px' />
         <img src={logo_white} alt="" width='70px'  className='  '/>
      </div>
      </Link>
      < div className={` hamburger flex gap-3 text-[#2b2a2a] font-semibold font-serif    md:flex md:gap-3 lg:flex lg:gap-3 ${hamIsClicked?"xs:flex-col xs:absolute xs:rounded-md  xs:top-12  xs:bg-yellow-200  sm:absolute sm:top-12 sm:left-0 sm:bg-yellow-200 md:relative md:bg-transparent md:top-[50%] lg:bg-transparent lg:relative lg:top-[50%]  xs:left-0    xs:gap-2 xs:w-full sm:flex-col sm:gap-2 sm:w-full  md:flex-row  md:gap-3 lg:flex-row lg:gap-3 md:place-content-center lg:place-content-center ": "xs:hidden  sm:hidden  md:flex-row  md:gap-3 lg:flex-row lg:gap-3 md:relative md:top-[50%] lg:relative lg:top-[50%]"}  `}>

        <NavLink to='/'>
        <h1 className='px-2 ' onClick={()=>setHamIsClicked(false)} >Home</h1>
        </NavLink>
        <NavLink to='/about'>
        <h1 className='px-2'onClick={()=>setHamIsClicked(false)}>About</h1>
        </NavLink>
        <NavLink to='/projects'>
        <h1 className='px-2'onClick={()=>setHamIsClicked(false)}>Projects</h1>
        </NavLink>

        <NavLink to='/creative'>
          <h1 className='px-2'onClick={()=>setHamIsClicked(false)}>Creative</h1>
        </NavLink>
    
      </div>
     
      <div className='flex gap-3 text-xl xs:hidden  sm:hidden lg:flex lg:gap-3 md:flex md:gap-3 '>
      <a href="https://www.linkedin.com/in/rohit-kumar-61101024b/" target="_blank"><FaLinkedin className='hover:text-blue-600 transition-all duration-200 ease-in text-[#2b2a2a]'/></a>
      <a href="https://github.com/rohitraj07372" target="_blank"><FaGithubSquare className='hover:text-slate-950 transition-all duration-200 ease-in text-[#2b2a2a]' /></a>
      <a href="https://www.youtube.com/channel/UChUYAjYRl9dTtna5ZET3E5Q" target="_blank"><BsYoutube className='hover:text-red-600 transition-all duration-200 ease-in text-[#2b2a2a]'/></a>
      </div>
      {
        !hamIsClicked && <RxHamburgerMenu className={`font-bold btn ${hamIsClicked?"hide":"show"} text-2xl    text-[#2b2a2a] sm:block xs:block lg:hidden md:hidden`} onClick={clickHandler} />
      }
      
      {
        hamIsClicked &&  <HiPlusSm className={`font-bold ${hamIsClicked?"show":"hide"} text-3xl text-[#2b2a2a] sm:block xs:block btn lg:hidden md:hidden rotate-45`} onClick={clickHandler}   />
      }
     
        </nav>
       
    
    </div>
  )
}

export default Navbar
