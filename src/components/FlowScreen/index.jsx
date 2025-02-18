import { useEffect } from 'react'
import './styles.css'

const FlowScreen = ({ type, onFinish }) => {
  useEffect(() => {
    setTimeout(onFinish, 1000)

    return () => {
      clearTimeout()
    }
  }, [type])

  const content = type === 'welcome' ? 'Bienvenido' : 'Comencemos'

  return (
    <div className='flowScreen__container'>
      <h1 className='flowScreen__title'>{content}</h1>
    </div>
  )
}

export default FlowScreen
