 
import data from '../../../portfolio_/src/data/CardData'
import Cards from '../../../portfolio_/src/components/Cards'
import Footer from '../components/Footer';


function Projects({hamIsClicked, setHamIsClicked}) {
   
  const cardData = data;
  console.log(data);
  return (
    <div className={`bg-yellow-100    pt-6 -z-10 transition-all duration-300 ease-in ${hamIsClicked?"blur-sm opacity-80 ":""}`}>
        <Cards data = {cardData} />
      
    </div>
    
  )
}

export default Projects
