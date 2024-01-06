import React from 'react'
import CreativeCard from '../components/CreativeCard'
import { NavLink } from 'react-router-dom' 
import youtube_image from '../assets/youtube'
import illustration_image from '../assets/illustration.jpg'
 

function Creative({hamIsClicked}) {
  const youtube = "Youtube";
  const illustration = "Illustration";
  const Instagram = "Instagram"
  const instagram_image = 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 
  return (
   
    <div className={` bg-blue-50 pt-2 min-h-screen ${hamIsClicked ?"blur-sm opacity-80 ":""}`}>
        
    <div className=' xs:w-11/12 sm:w-11/12 md:w-8/12 mx-auto place-items-center  xs:grid xs:grid-cols-1   md:grid md:grid-cols-3   gap-4  p-1  font-bold text3xl'>
          <NavLink to='/creative/youtube'><CreativeCard image={youtube_image} text={youtube}  /></NavLink>
          <NavLink to='/creative/illustration'><CreativeCard image={illustration_image} text={illustration}  /></NavLink>
          <NavLink to='/creative/instagram'><CreativeCard image={instagram_image} text={Instagram}  /></NavLink>
          
    </div>
    </div>
  )
}

export default Creative
