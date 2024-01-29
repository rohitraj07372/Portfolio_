import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";
import logo from '../assets/logo_white.png'
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import YoutubeCard from '../components/YoutubeCard';
import YoutubeData from '../data/YoutubeData';
import './youtube.css'
import {Link as ScrollLink} from 'react-scroll'
 

function Youtube({hamIsClicked}) {

  const {data} = YoutubeData();
   const videoId =  data.items && data.items[0] ? data.items[0].snippet.resourceId.videoId : '';
  const [video, setVideo] = useState(``);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [allYoutubeData, setAllYoutubeData] = useState([]);

//get video title from youtube card component
   function videoTitle(title){
    setTitle(title);
   }
   function getAllYoutubeData(allVideos){
    setAllYoutubeData(allVideos);
   }


   // getting all videos 

   const [allVideo, setAllVideo] = useState([]);
   function setAllYoutubeVideo(allVideo){
    setAllVideo(allVideo);

   }
   
  useEffect(() => {


    const fetchData = async () => {
      try {
        const apiKey = '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY';
        const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=wildlife',{
          headers: { 'X-Api-Key': '9/q3jVLuAQ8IgFacP2PKnQ==pT5pxnnQVs4c2NQY', 'Accept': 'image/jpg'},
        });
        
        
        
        setVideo(response);
         
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
   
  
const [vId, setVId] = useState(`${videoId}`);

  console.log("video ID is = "+vId);
const [videoUrl, setVideoUrl] = useState(`https://www.youtube.com/embed/${vId}?si=_FkFK_-9d1UBmqvj`);

const handleExternalVideoPlayIdChange = (newVideoPlayId) => {
  setVId(newVideoPlayId);
  setVideoUrl(`https://www.youtube.com/embed/${vId}?si=_FkFK_-9d1UBmqvj`);
};
    
useEffect(()=>{
  handleExternalVideoPlayIdChange(vId);
},[vId]);
  return ( 

    <div className='relative'>
            <div className={`min-h-[calc(100vh-3.5rem)] bg-cover bg-fixed ${hamIsClicked ?"blur-sm opacity-80 ":""} bg-gray-900 bg-center  bg-[url(https://picsum.photos/1920/1080)] relative`} >


{/* Text */}
  
  <div className='absolute top-[50%] left-[50%] z-[10] text-white font-bold text-[2rem] -translate-x-[50%] -translate-y-[50%]'><h1>You can watch my <span className='text-white rounded-full px-4 py-1 bg-red-600' >YOUTUBE</span> videos here.</h1></div> 
      
      {/* black gradient*/}
    <div className='w-full h-full z-[1]  gradient  absolute bottom-0'></div>

  <div className={` p-3 xs:w-full   mx-auto  relative  `}>
     {/* *******************logo and subscribe button************************ */}
     <div className='border relative z-10 flex items-center   justify-between border-slate-600 py-2 px-8 bg-gray-800/60 rounded-full w-9/12 mx-auto mt-2'>
      {/* *******************video playing ************************ */}
      <div className='z-[5]'><img src={logo} width='100px ' alt="" /></div>
        <div class="g-ytsubscribe " data-channelid="UChUYAjYRl9dTtna5ZET3E5Q" data-layout="full" data-count="default"></div> </div>
 
    
    <Link to='/creative'><button className='py-2 px-3 flex z-10 items-center fixed top-20 text-white bg-slate-700 font-bold rounded-full justify-center  '> <IoCaretBackOutline />  </button></Link>
  </div> 

  <Helmet><script src="https://apis.google.com/js/platform.js"></script></Helmet>



  </div>
   
 
<div id='video'  className='w-full  p-8 min-h-screen flex xs:flex-wrap lg:flex-nowrap gap-5 bg-slate-900 relative'>


   <div className='lg:w-[60%] xs:w-full mt-4  rounded-md' >
     {/* *******************youtube video embade************************ */}
   
<iframe className='rounded-lg'  width="100%" height="480px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div className='font-bold text-white text-xl mt-2'>{title}</div>

   </div>
   <div className='bg-yellow-400 font-bold rounded-md  py-1  xs:mx-auto   md:absolute md:right-[16%] top-[10px] px-5 text-center    '> Latest 5 videos <br/> <span className='text-blue-700 bg-white rounded-full px-2 py-1'>click to play.</span></div>
   <div className='lg:w-[40%] flex flex-wrap justify-center gap-2 h-[480px] xs:w-full overflow-hidden overflow-y-scroll p-4 border    rounded-md mt-4'>
     
     {/*     latest 5 videos of youtube */}
     

    <ScrollLink to='video' smooth='true'><YoutubeCard allYoutubeData = {getAllYoutubeData} getAllVideo = {setAllYoutubeVideo} videoTitle = {videoTitle} onVideoPlayIdChange={handleExternalVideoPlayIdChange}/>
      </ScrollLink> 
   </div>

</div>

<div className='w-full  bg-slate-900 '>

 {/* all youtube videos */}

 <div className='bg-yellow-400 font-bold rounded-md  py-1  xs:mx-auto    px-5 text-center    '> All videos <br/> <span className='text-blue-700 bg-white rounded-full px-2 py-1'>click to play.</span></div>

 <div className='w-[90%] h-[100vh] border-4 rounded-sm flex flex-wrap  justify-center gap-4     overflow-hidden overflow-y-scroll p-4       border-yellow-400 '>
    {
        
        allVideo?.map((data)=>{
           return( <ScrollLink to='video' smooth='true'> <div className='xs:w-full md:w-[15rem]'>
                <div className=' mb-3 cursor-pointer' onClick={()=>{
                    
                    setVId(data.snippet.resourceId.videoId)
                    videoTitle(data.snippet.title);
                }}  >
                    <img src={data.snippet.thumbnails.high.url} alt="" />
                    <p className='bg-white font-bold  text-slate-700 px-2 '>{data.snippet.title.length > 50?data.snippet.title.slice(0, 50) + '...': data.snippet.title}</p>
                </div>
                {/* <p>id = {videoPlayId}</p> */}
            </div>
            </ScrollLink>
            
           )
        })
      
    }
    
</div>
  
</div>

   </div>
    

     
    
  )
}

export default Youtube
