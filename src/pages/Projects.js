import React, { useState } from 'react'
import data from '../../../portfolio_/src/data/CardData'
import Cards from '../../../portfolio_/src/components/Cards'


function Projects() {
   
  const cardData = data;
  console.log(data);
  return (
    <div className='bg-yellow-100'>
        <Cards data = {cardData} />
    </div>
  )
}

export default Projects
