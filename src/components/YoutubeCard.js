import React, { useState } from 'react'
import YoutubeData from '../data/YoutubeData'

function YoutubeCard({onVideoPlayIdChange}) {

const {data, loading} = YoutubeData();
const youtube_data = data.items;
 
 
  const [videoPlayId, setVideoPlayId] = useState("");
   

  const handleVideoPlayIdChange = (newVideoPlayId) => {
    setVideoPlayId(newVideoPlayId);

    // Notify the parent component if onVideoPlayIdChange is provided
    if (onVideoPlayIdChange) {
      onVideoPlayIdChange(newVideoPlayId);
    }
  };
   
  return (
    
    <div className='flex flex-col items-center'>
        {
            youtube_data?.map((data)=>{
               return( <div>
                    <div className=' mb-3 cursor-pointer' onClick={()=>{
                        
                        handleVideoPlayIdChange(data.snippet.resourceId.videoId)
                    }}>
                        <img src={data.snippet.thumbnails.high.url} alt="" />
                        <p className='bg-white font-bold text-slate-700 px-2 '>{data.snippet.title}</p>
                    </div>
                    {/* <p>id = {videoPlayId}</p> */}
                </div>
                
               )
            })
          
        }
        
    </div>
  )
  
}


export default YoutubeCard
 