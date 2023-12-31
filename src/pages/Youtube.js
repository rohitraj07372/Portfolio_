import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";
import logo from '../assets/logo_white.png'
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

function Youtube({hamIsClicked}) {

  
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const apiKey = '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY';
        const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=wildlife',{
          headers: { 'X-Api-Key': '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY', 'Accept': 'image/jpg'},
        });
        
        
        
        setVideo(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/iCnUDwigxQQ?si=_FkFK_-9d1UBmqvj");
    

  return ( 

    <div className='relative'>
            <div className={`min-h-[calc(100vh-3.5rem)] bg-cover bg-fixed ${hamIsClicked ?"blur-sm opacity-80 ":""} bg-gray-900   bg-[url(https://picsum.photos/1920/1080)] relative`} >


{/* Text */}
  
  <div className='absolute top-[50%] left-[50%] z-[10] text-white font-bold text-[2rem] -translate-x-[50%] -translate-y-[50%]'><h1>You can watch my <span className='text-white rounded-full px-4 py-1 bg-red-600' >YOUTUBE</span> videos here.</h1></div>
      
      {/* black gradient*/}
    <div className='w-full h-full z-[1] bg-gradient-to-t from-slate-900 absolute bottom-0'></div>

  <div className={` p-3 xs:w-full   mx-auto  relative  `}>
     {/* *******************logo and subscribe button************************ */}
     <div className='border relative z-10 flex items-center   justify-between border-slate-600 py-2 px-8 bg-gray-800/60 rounded-full w-9/12 mx-auto mt-2'>
      
      <div className='z-[5]'><img src={logo} width='100px ' alt="" /></div>
        <div class="g-ytsubscribe " data-channelid="UChUYAjYRl9dTtna5ZET3E5Q" data-layout="full" data-count="default"></div> </div>
 
    
    <Link to={-1}><button className='py-2 px-3 flex  items-center fixed top-20 text-white bg-slate-700 font-bold rounded-full justify-center  '> <IoCaretBackOutline />  </button></Link>
  </div>

  <Helmet><script src="https://apis.google.com/js/platform.js"></script></Helmet>



  </div>
   
 
<div id='video_section ' className='w-full p-8 min-h-screen flex xs:flex-wrap lg:flex-nowrap gap-5 bg-slate-900'>


   <div className='lg:w-[60%] xs:w-full mt-4 rounded-md'>
     {/* *******************youtube video embade************************ */}
   
<iframe className='rounded-lg'  width="100%" height="480px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

   </div>
   <div className='lg:w-[40%] xs:w-full h-full border rounded-md mt-4'></div>

</div>

   </div>
    

     
    
  )
}

export default Youtube
