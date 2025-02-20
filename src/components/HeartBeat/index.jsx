import './styles.css'
import { heartImg } from '../../assets/img'

const HeartBeat = () => {
  return (
    <div className='beats__container fadeIn'>
      <p className='beats__textA'>Hasta ahora, tu corazón ha latido <span> 'num'</span> veces, lo que equivale a 'num' pasos. Con ellos, podrías haber dado aproximadamente<span> 'num'</span>vueltas al mundo..y aún te quedan muchos por dar !</p>
      <h1 className='beats__title'>Latidos totales</h1>
      <div className='beats__subcontainer'>
        <img className='beats__heart' src={heartImg} alt='heart' />
        <div className='beat__first' />
        <div className='beat__second' />
      </div>
      <p className='beats__textB'>Tu corazón generó <span> 'num'</span> kWh, suficiente para alimentar una casa por <span> 'num'</span> días o recorrer <span> 'num'</span> km en un auto eléctrico. No solo te mantiene vivo, también es una eficiente fuente de energía !</p>
    </div>
  )
}

export default HeartBeat
