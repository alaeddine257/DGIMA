import './Hero.css'
import dgima from '../../assets/images/dgi.jpg'
import {FaCheck} from 'react-icons/fa6'
const Hero = () => {
  return (
    <div className='all-hero'>
        <div className='image'>
            <img src={dgima} alt="DGIMA-photo" />
        </div>
        <div className='text-hero'>
            <h2 className='question'>Pourqoui choisir DGIMA ?</h2>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae officia aperiam facere odit possimus ipsum, debitis dolores veritatis laudantium tenetur quasi beatae exercitationem esse numquam laborum aliquid, odio iste?</p>
            <div className='options-content'>
                <ul className='options'>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Formation diversifiée</li>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Vie Associative</li>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Recherche scientifique</li>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Partenaires stratégiques</li>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Insertion professionelle</li>
                    <li><span style={{"color":"green"}}><FaCheck /></span> Conventions internationales</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
