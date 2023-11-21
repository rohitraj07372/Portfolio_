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
 

function App() {
  return (
    <div className=" h-screen   -mt-12">
    <Butterfly/>
   <Navbar/>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path="/projects#projectDetails" component={ProjectDetails} />
     

     
    </Routes>
<Footer/>
 </div>
    
  );
}

export default App;
