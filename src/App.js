import React, { useEffect } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Butterfly from './components/Butterfly';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import { useState } from 'react';
import Creative from './pages/Creative';
import Youtube from './pages/Youtube'
import Illustration from './pages/Illustration';
 

function App() {
  const [hamIsClicked, setHamIsClicked] = useState(false);
  document.documentElement.style.cursor = 'none';
// const handleClick = (e) =>{
//    if(hamIsClicked ) setHamIsClicked(false);
// }


//   useEffect(()=>{
//     document.addEventListener('click', handleClick);
//     return () =>{
//       document.removeEventListener('click',handleClick);
//     };
//   },[])
  
  return (
    <div className="  ">
    <Butterfly/>
     <div>
     <Navbar hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked} />
      </div>  
   
    <div className='mt-[3.5rem]'>

    <Routes>


     <Route path='/' element={<Home hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path='/about' element={<About hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path='/projects' element={<Projects hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path="/projects#projectDetails" component={ProjectDetails} />
     <Route path='/creative' element={<Creative hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path='/creative/youtube' element={<Youtube hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}></Route>
      <Route path='/creative/illustration ' element={<Illustration hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}></Route>
     

     
    </Routes>

    </div>
   <Footer/>
 </div>
    
  );
}

export default App;
