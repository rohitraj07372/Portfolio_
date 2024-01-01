
import React, { useEffect, useState } from 'react'

function YoutubeData() {
  
const channelId = "UChUYAjYRl9dTtna5ZET3E5Q";
const uploadId = "UUhUYAjYRl9dTtna5ZET3E5Q";
const base_url = "https://www.youtube.com/watch?v=";

const [data, setData] = useState([]);
const [loading, setLoading]= useState(true);


useEffect(()=>{
   
const fetchData = async () => {
    try{
        const API_KEY = "AIzaSyAGTb_pLgXcZZFv2avDp38UkhXC3rNmNKc";
        const response = await fetch(` https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUhUYAjYRl9dTtna5ZET3E5Q&key=${API_KEY}`);
        
        const res = await response.json();
        setData(res);
        setLoading(false);
      
         
        }

      
    
    catch(error){
             console.log(error);
             setLoading(false);
             

    }
}
  fetchData();
},[]);

  return {data, loading};
};

export default YoutubeData;
 


