import './Actualities.css'
import {Card} from '../../components/index'
import pyfac from '../../assets/images/py.jpg'
import li from '../../assets/images/li.jpg'
import nmtc from '../../assets/images/nmtc-logo.jpg'
import hw from '../../assets/images/HW.jpg'


const Actualities = () => {
  return (
    <div className='section-wrapper'>
        <div className='section-header'>
            <h5 className='title'>Actualities</h5>
            <button className='button'>Toutes les actualités</button>
        </div>
        <div className='actualities'>
            <Card image={pyfac}  date="Vie estudiantine - 12 Novembre 2022" title="La 8éme version de PYFAC"/>
            <Card image={li}  date="Vie estudiantine - 12 Février 2023" title="LOREM IPSUM "/>
            <Card image={nmtc}  date="Vie estudiantine - 19 Mars 2023" title="La 3ème version de NMTC"/>
            <Card image={hw}  date="Vie estudiantine - 12 Novembre 2022" title="La 8éme version de PYFAC"/>
            <Card image={pyfac}  date="Vie estudiantine - 12 Novembre 2022" title="La 8éme version de PYFAC"/>
            <Card image={pyfac}  date="Vie estudiantine - 12 Novembre 2022" title="La 8éme version de PYFAC"/>
        </div>
      
    </div>
  )
}

export default Actualities
