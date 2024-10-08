import React, { useState } from 'react'
import profile from '../assets/profile.jpg'
import './About.css'
import dot from '../assets/dots.png'
import cube from '../assets/cube.png'
import circle from '../assets/circle.png'
import zigzag from '../assets/zigzags.png'
import profile2 from '../assets/profile2.jpg'
import { Link as ScrollLink } from 'react-scroll';
import Skills from '../../../portfolio_/src/components/Skills'
import { RiArrowDownCircleFill } from "react-icons/ri";
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import video from "../assets/video/color.mp4"

function About({ hamIsClicked, setHamIsClicked }) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  const [typeEffect] = useTypewriter({
    words: [`Frontend Developer`, `Graphic Designer`],
    loop: {},
    timeSpeed: 100,
    deleteSpeed: 40,

  })
  return (
    <div>
      <div className={`relative h-[calc(100vh-3.5rem)] w-full flex justify-center items-center   xs:bg-cover  bg-no-repeat    lg:bg-cover bg-fixed overflow-hidden  `}>
        <div className='bg-cover '>
          <video autoPlay muted loop className=" ">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img className='fixed' src={portfolio}   alt="banner" /> */}
          <ScrollLink to='about_section' smooth={true}><button className='font-bold text-4xl translate-x-[50%] text-blue-700 arrow absolute bottom-7 right-[50%]'><RiArrowDownCircleFill /></button></ScrollLink>

          <div className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]      font-bold '><h1 className='md:text-8xl xs:text-7xl font-rohit text-yellow-700'>Rohit Kumar</h1><span className='md:text-6xl xs:text-5xl font-designation text-red-500'>{typeEffect}</span></div>
        </div>
      </div>
      <div id='about_section' className={`bg-[#f8ecae] pt-4 pb-4 transition-all duration-300 ease-in ${hamIsClicked ? "blur-sm opacity-80 " : ""}`}>
        <p className='font-bold text-4xl  w-full text-center mb-6  text-[#2c2c2c]  pt-4  '>Welcome to my Portfolio</p>
        <div className='flex justify-between w-10/12 mx-auto xs:flex-col-reverse xs:gap-8  md:gap-1 sm:flex-col-reverse sm:items-center md:justify-between lg:justify-between md:items-start lg:items-start sm:w-full md:w-10/12 lg:w-10/12 md:flex-row sm:mx-auto xs:mx-auto xs:items-center xs:w-full  lg:flex-row '>
          <div className='w-[50%] xs:w-10/12 sm:w-10/12  md:w-[50%] lg:w-[50%] text-[#464646]  bg-white mb-2 p-5 rounded-lg'>
            <p className='font-bold text-xl text-[#444444]  mb-2'>About Me</p>
            <p>
              {/*  about section   */}

              <span className='font-bold'>Hey there, I'm Rohit Kumar,</span> a Computer Science graduate from Chandigarh University with a <span className='font-semibold'>CGPA of 7.52.</span> Originally from the vibrant city of Muzaffarpur, Bihar, I'm on a journey to explore the endless possibilities in the world of technology.</p>
            <br />
            <p>During my college days, I delved into the realms of computer science, earning valuable experience through a 4-month internship at <span className='font-semibold'>High Radius.</span> These experiences have not only shaped my professional outlook but have also fueled my passion for all things tech.</p>
            <br />
            <p>My academic journey started at <span className='font-semibold'> DAV Public School,</span> where I earned a stellar <span className='font-semibold'>9.6 CGPA</span> in my 10th grade. I continued this momentum at <span className='font-semibold'>Indraprastha International School, securing a 76% in my 12th grade.</span></p>
            <br />
            <p>Beyond the world of algorithms and code, I find solace in <span className='font-semibold'> graphic designing,</span> turning my hobby into a creative outlet. Exploring the intersection of technology and art is where I truly find my stride.</p>
            <br />
            <p>Join me on this exciting adventure as I navigate through the ever-evolving landscape of computer science and design. Let's connect, create, and innovate together!</p>
          </div>
          <div>

            {/*  profile picture and animation */}

            <div className='relative '>
              <img className='absolute   icon-dot' src={dot} alt="" width='60px' />
              <img className='absolute icon-cube' src={cube} alt="" width='30px' />
              <img className='absolute icon-zigzag' src={zigzag} alt="" width='30px' />
              <img className='absolute   icon-circle' src={circle} alt="" width='30px' />




              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? `transition-opacity .3s ease-linear` : ``}>
                <img className='user-image rounded-md  transition-all duration-200 ease-in-out' src={hover ? profile2 : profile} alt="" width='300rem' />
              </div>

            </div>



          </div>
          <p className='font-bold text-9xl mix-blend-multiply xs:right-7   text-[#FFF24F] opacity-50   right-0 -bottom-20 pr-7 r read-only:select-none pointer-events-none cursor-not-allowed fixed'>ROHIT</p>
        </div>
        <Skills />

      </div>
    </div>
  )
}

export default About
