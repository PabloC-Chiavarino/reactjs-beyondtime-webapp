import { useState, useEffect } from 'react'
import { calculateLifeClock } from '../../utils/calculations'
import './styles.css'

const JourneyClock = ({ userData }) => {
  const emptyLinesArray = [...Array(12)]

  const [time, setTime] = useState(calculateLifeClock(userData.birthdate))

  const { hours, minutes, seconds } = time

  const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30
  const minuteAngle = minutes * 6
  const secondAngle = (seconds / 60) * 360

  return (
    <div className='journeyClock__container fadeIn'>
      <h1 className='journeyClock__title'>Reloj de viaje</h1>
      <p className='journeyClock__textA'>Cada amanecer, cada latido, cada minuto vivido te ha llevado hasta aquí. Si la existencia fuera un reloj de 24hs, ahora serían las <span>{hours}:{minutes}:{seconds}</span> en tu vida. Tus experiencias se han sumado en cada segundo, marcando tu camino. En este momento, las agujas están donde tú las has llevado: ¿cómo seguirás avanzando?</p>
      <div className='journeyClock__subcontainer'>
        <div className='journeyClock__clock'>
          {emptyLinesArray.map((_, i) => {
            return (
              <div
                key={i}
                className='journeyClock__clock--line'
                style={{
                  transform: `rotate(${(i * 30)}deg) translateY(120px)`
                }}
              />
            )
          })}
          <div className='journeyClock__clock--hours' style={{ transform: `rotate(${hourAngle}deg)` }} />
          <div className='journeyClock__clock--minutes' style={{ transform: `rotate(${minuteAngle}deg)` }} />
          <div className='journeyClock__clock--seconds' style={{ transform: `rotate(${secondAngle}deg)` }} />
        </div>
      </div>
      <p className='journeyClock__textB'>
        Aún queda mucho tiempo por delante, muchas horas para decidir qué hacer con lo que te queda de este día…y es sola una pequeña fracción de lo que hay por delante.<span style={{ fontWeight: 600 }}> Los mejores deseos !</span>
      </p>
    </div>
  )
}

export default JourneyClock
