import React from 'react'; 
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
 

function App() {
  const [hamIsClicked, setHamIsClicked] = useState(false);
  return (
    <div className=" h-screen  ">
    <Butterfly/>
    
   <Navbar hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked} />
    
    <Routes>
     <Route path='/' element={<Home hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path='/about' element={<About hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path='/projects' element={<Projects hamIsClicked={hamIsClicked} setHamIsClicked={setHamIsClicked}/>}/>
     <Route path="/projects#projectDetails" component={ProjectDetails} />
     

     
    </Routes>
<Footer/>
 </div>
    
  );
}

export default App;
