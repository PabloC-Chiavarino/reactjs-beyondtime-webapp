import { useEffect, useRef } from 'react'
import { formatNumber, calculateTotalMinutes, calculateUniverseExpansion, calculateCollapsedStars } from '../../utils/calculations'
import './styles.css'

const BangMinutes = ({ userData }) => {
  const particlesRef = useRef(null)
  const totalMinutes = calculateTotalMinutes(userData.birthdate)
  const totalExpansion = calculateUniverseExpansion(totalMinutes)
  const totalStars = calculateCollapsedStars(totalMinutes)

  const createParticle = (x, y) => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 1.01 + 2.5

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      size: Math.random() * 1.5 + 1.8
    }
  }

  useEffect(() => {
    const canvas = particlesRef.current
    const ctx = canvas.getContext('2d')

    let particles = []

    const particlesAnimation = () => {
      particles.push(createParticle(canvas.width / 2, canvas.height / 2))

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter(particle => particle.alpha > 0)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.size *= 1.01
        particle.alpha *= 0.96

        ctx.globalAlpha = particle.alpha
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = '#202020'
        ctx.fill()
        ctx.closePath()
      })

      window.requestAnimationFrame(particlesAnimation)
    }

    setTimeout(() => {
      particlesAnimation()
    }
    , 3800)
  }, [])

  return (
    <div className='bangMinutes__container fadeIn'>
      <p className='bangMinutes__textA'>Han pasado <span>{formatNumber(totalMinutes)}</span> minutos desde tu nacimiento. ¿Sabías que cada minuto el universo se expande 4,700 km? Lo que significa que el universo se ha expandido <span>{formatNumber(totalExpansion)}</span> km desde tu existencia. Cada minuto, puedes expandir tus conocimientos,  tal como lo hace el universo.</p>
      <h1 className='bangMinutes__title'>Minutos vividos</h1>
      <div className='bangMinutes__subcontainer'>
        <div className='bangMinutes__core' />
        <div className='bangMinutes__core--explosion' />
        <canvas ref={particlesRef} width={window.innerWidth / 2} height={window.innerHeight} />
        {/* <div className='bangMinutes__total'>
          <h2>{formatNumber(totalMinutes)}</h2>
          <h3>min</h3>
        </div> */}
      </div>
      <p className='bangMinutes__textB'>A lo largo tu vida, se han colapsado aproximadamente <span>{formatNumber(totalStars)}</span> estrellas en el universo, dispersando energía y materia en todas direcciones. Así como las estrellas, cada minuto es una oportunidad para colapsar tus dudas, expandir conocimientos y generar nuevas posibilidades. </p>
    </div>
  )
}

export default BangMinutes
