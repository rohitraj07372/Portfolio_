import React, { useState, useEffect } from 'react';
import './Butterfly.css';
import butterfly from '../assets/butterfly.gif'

const Butterfly = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="butterfly z-[60] " style={{ left: position.x, top: position.y }}>
       <img src={butterfly} alt="" width='60px' />
    </div>
  );
};

export default Butterfly;
