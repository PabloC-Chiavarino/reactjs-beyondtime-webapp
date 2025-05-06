import { formatNumber, calculateTotalSunrises, calculateBreathingDays } from '../../utils/calculations'
import './styles.css'

const Sunrises = ({ userData }) => {
  const totalSunrises = calculateTotalSunrises(userData.birthdate)
  const totalEnergyDays = Math.round(totalSunrises * 12)
  const totalBreathingDays = calculateBreathingDays(totalSunrises)

  return (
    <div className='sunrises__container'>
      <h1 className='sunrises__title'>Amaneceres totales</h1>
      <p className='sunrises__textA'>Has vivido <span>{formatNumber(totalSunrises)}</span> amaneceres a lo largo de tu vida.. ¿Sabías que, durante cada uno, la Tierra recibe suficiente energía solar como para abastecer al mundo entero por más de 12 años? Si sumaras todos los amaneceres que has visto, esa energía podría haber iluminado el planeta durante <span>{formatNumber(totalEnergyDays)}</span> años.</p>
      <div className='sunrises__subcontainer'>
        <div className='sunrises__sky' />
        <div className='sunrises__sun' />
        <svg width='0' height='0'>
          <filter id='heatDistortion'>
            <feTurbulence type='turbulence' baseFrequency='0.01 0.08' numOctaves='2' result='turbulence'>
              <animate attributeName='baseFrequency' dur='0.2s' values='0.01 0.08; 0.02 0.1' repeatCount='indefinite' />
            </feTurbulence>
            <feDisplacementMap in='SourceGraphic' in2='turbulence' scale='15' />
          </filter>
        </svg>
      </div>
      <p className='sunrises__textB'>Con cada amanecer, los bosques, océanos y plantas liberan suficiente oxígeno como para que toda la humanidad respire durante un día entero. Si sumaras todos los amaneceres que has visto, habrías presenciado la creación de oxígeno suficiente para mantener con vida a la población mundial por <span>{formatNumber(totalBreathingDays)}</span> días.</p>
    </div>
  )
}

export default Sunrises
