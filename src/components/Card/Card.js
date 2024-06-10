import './Card.css'

import {FaArrowRightLong} from 'react-icons/fa6'

const Card = (props) => {
  return (
    <div className='actuality container'>
    <div className='card-wrapper'>
        <img className='card-img' src={props.image} alt="banner" />
        <div className='card-content'>
            <span className='date'>{props.date}</span>
            <h3 className='card-title'>{props.title}</h3>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quasi nostrum rem velit accusamus similique. Nisi, nobis autem! Atque praesentium at velit aliquid animi aperiam recusandae optio quo nam aspernatur.</p>
        </div>
        <button className='see-more'>Voir plus <span><FaArrowRightLong /></span></button>
    </div>
</div>
  )
}

export default Card
