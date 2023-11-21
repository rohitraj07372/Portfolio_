 
import { useState } from 'react'
import ProjectDetails from '../pages/ProjectDetails'
import Card from './Card'
import { Link  } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
 

 
function Cards({data}) {
   
  const [cardId, SetCardId]= useState(1);
 
  function selectedCard(id){
    SetCardId(id);
  }
 
  return (
    <div>
    <div className=' grid grid-cols-3 w-10/12 mx-auto gap-5 xs:grid xs:grid-cols-1  xs:w-11/12  sm:grid sm:grid-cols-1 sm:w-11/12 md:grid md:grid-cols-2 md:w-10/12  lg:grid lg:grid-cols-3 lg:w-10/12  '>
      
      {
        data.map((data)=>{
           
            return <ScrollLink to='projectDetails' smooth={true}  ><div className='flex justify-center ' key={data.id} onClick={()=>{
              selectedCard(data.id)
             
            }} ><Link to='/projects#projectDetails'><Card details =  {data}  id={data.id}/></Link>    </div></ScrollLink>
        })
        
      }
      
     
    </div>
    <div  id='projectDetails' ><ProjectDetails cardId = {cardId} /></div>
    
    </div>
  )
}

export default Cards
