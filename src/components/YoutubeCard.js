import React, { useState } from 'react'
import YoutubeData from '../data/YoutubeData'

function YoutubeCard({onVideoPlayIdChange, videoTitle, allYoutubeData, getAllVideo}) {

const {data, loading} = YoutubeData();



//  for(let i=0;i<5 && all_youtube_data.length ;i++){
//     youtube_data.push(data.items[i]);
//  }
//  console.log("5 data = "+youtube_data);

 
 
 
  const [videoPlayId, setVideoPlayId] = useState(``);
   

  const handleVideoPlayIdChange = (newVideoPlayId) => {
    setVideoPlayId(newVideoPlayId);

    // Notify the parent component if onVideoPlayIdChange is provided
    if (onVideoPlayIdChange) {
      onVideoPlayIdChange(newVideoPlayId);
    }
  };
   let first = "";

   if (loading) {
    return <p>Loading...</p>;  // You can replace this with your loading indicator
  }

  let youtube_data = [];
// console.log("length is" + (youtube_data?.length || 0));
const all_youtube_data = data?.items || [];

for(let i=0;i<5 && all_youtube_data.length;i++){
  youtube_data.push(all_youtube_data[i]);
}
  allYoutubeData(all_youtube_data);
getAllVideo(all_youtube_data);

  return (
   
    <div className='flex flex-col items-center'>
        {
            
            youtube_data?.map((data)=>{
               return( <div>
                    <div className=' mb-3 cursor-pointer' onClick={()=>{
                        
                        handleVideoPlayIdChange(data.snippet.resourceId.videoId)
                        videoTitle(data.snippet.title);
                    }} onLoad={()=>{
                      if(first ===""){
                        first = data.snippet.resourceId.videoId;
                        videoTitle(data.snippet.title);
                      }
                       
                          
                      handleVideoPlayIdChange(first);
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
 