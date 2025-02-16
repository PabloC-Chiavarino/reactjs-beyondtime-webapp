import { useEffect } from 'react'
import './styles.css'

const WelcomeScreen = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(onFinish, 1000)
  }, [])

  return (
    <div className='welcomeScreen__container'>
      <h1 className='welcomeScreen__title'>Bienvenido</h1>
    </div>
  )
}

export default WelcomeScreen
