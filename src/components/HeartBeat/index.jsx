import './styles.css'
import { calculateHeartBeats, calculateEarthTurns, calculateEnergy, calculateDaysOfPower, calculateCarDistance } from '../../utils/calculations'
import { heartImg } from '../../assets/img'

const HeartBeat = ({ userData }) => {
  const totalHeartBeats = calculateHeartBeats(userData.birthdate)
  const totalEarthTurns = calculateEarthTurns(totalHeartBeats)
  const totalEnergy = calculateEnergy(totalHeartBeats)
  const totalDaysOfPower = calculateDaysOfPower(totalEnergy)
  const totalCarDistance = calculateCarDistance(totalEnergy)

  const formatNumber = (num) => {
    return new Intl.NumberFormat('es', { notation: 'compact', compactDisplay: 'long' }).format(num)
  }

  return (
    <div className='beats__container fadeIn'>
      <p className='beats__textA'>Hasta ahora, tu corazón ha latido <span> {formatNumber(totalHeartBeats)}</span> de veces, si cada latido fuera un paso, podrías haber dado aproximadamente<span> {formatNumber(totalEarthTurns)}</span> de vueltas al mundo..y aún te quedan muchas por dar !</p>
      <h1 className='beats__title'>Latidos totales</h1>
      <div className='beats__subcontainer'>
        <img className='beats__heart' src={heartImg} alt='heart' />
        <div className='beat__first' />
        <div className='beat__second' />
      </div>
      <p className='beats__textB'>Tu corazón generó <span> {formatNumber(totalEnergy)} </span> kWh, suficiente para alimentar una casa por <span> {formatNumber(totalDaysOfPower)} </span> de días o recorrer <span> {formatNumber(totalCarDistance)} </span> de kms en un auto eléctrico. No solo te mantiene vivo, también es una eficiente fuente de energía !</p>
    </div>
  )
}

export default HeartBeat
