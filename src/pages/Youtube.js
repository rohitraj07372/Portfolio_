import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";
import logo from '../assets/logo_white.png'
import { Helmet } from 'react-helmet';

function Youtube({hamIsClicked}) {

  
  // const [image, setImage] = useState("");

  // useEffect(() => {


  //   const fetchData = async () => {
  //     try {
  //       const apiKey = '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY';
  //       const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=wildlife',{
  //         headers: { 'X-Api-Key': '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY', 'Accept': 'image/jpg'},
  //       });
        
        
        
  //       setImage(response);
  //       console.log(response);
  //       // setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  

   const image = "https://picsum.photos/1920/1080"

  return ( 
    <div className={`min-h-[calc(100vh-3.5rem)] bg-cover bg-fixed ${hamIsClicked ?"blur-sm opacity-80 ":""} bg-gray-900 bg-[url(https://picsum.photos/1920/1080)] relative`} >


  {/* Text */}
    
    <div className='absolute top-[50%] left-[50%] z-10 text-slate-300 font-bold text-[2rem] -translate-x-[50%]'><h1>You can watch my <span className='text-slate-300 rounded-full px-4 py-1 bg-red-600' >YOUTUBE</span> videos here.</h1></div>
        
        {/* black gradient*/}
      <div className='w-full h-full bg-gradient-to-t from-slate-900 absolute bottom-0'></div>

    <div className={` p-3 xs:w-full   mx-auto    `}>
       {/* *******************logo and subscribe button************************ */}
       <div className='border flex items-center justify-between border-slate-600 py-2 px-8 bg-gray-800/60 rounded-full w-9/12 mx-auto mt-2'>
        
        <div><img src={logo} width='100px ' alt="" /></div>
          <div class="g-ytsubscribe" data-channelid="UChUYAjYRl9dTtna5ZET3E5Q" data-layout="full" data-count="default"></div> </div>
   
      
      <Link to={-1}><button className='py-2 px-3 flex gap-2 items-center fixed top-20 text-white bg-slate-700 font-bold rounded-full justify-center  '> <IoCaretBackOutline /> Back</button></Link>
    </div>

    <Helmet><script src="https://apis.google.com/js/platform.js"></script></Helmet>
    </div>
    
  )
}

export default Youtube
