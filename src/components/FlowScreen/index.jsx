import { useEffect } from 'react'
import './styles.css'

const FlowScreen = ({ userData, type, onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(onFinish, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [type])

  const content = type === 'welcome' ? 'Bienvenido' : `Gracias ${userData.name}, comencemos.`
console.log(content)
  return (
    <div className='flowScreen__container'>
      <h1 className='flowScreen__title'>{content}</h1>
    </div>
  )
}

export default FlowScreen
