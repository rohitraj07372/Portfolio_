import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Butterfly from './components/Butterfly';
import Footer from './components/Footer';
 

function App() {
  return (
    <div className="">
    <Butterfly/>
   <Navbar/>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
     

     
    </Routes>
<Footer/>
 </div>
    
  );
}

export default App;
