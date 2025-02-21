import { useState, useEffect } from 'react'
import './styles.css'

const UserForm = ({ onComplete }) => {
  const [ringAnimation, setRingAnimation] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(true)
    }, 850)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRingAnimation(true)
    }, 2500)

    const interval = setInterval(() => {
      setRingAnimation(prevState => !prevState)
    }, 2500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const [name, birthdate] = e.target
    onComplete({ name: name.value, birthdate: birthdate.value })
  }

  return (
    <div className='userData__container fadeIn'>
      <div className='fadeIn userData__container--ring' />
      <div className={`userData__container--secondRing ${ringAnimation ? 'ringAnimation' : ''}`} />
      <div className={`userData__container--thirdRing ${ringAnimation ? 'ringAnimation--reverse' : ''}`} />
      <h1 className='userData__title'>Ingresa tus datos</h1>
      {showForm && (
        <form className='userData__form' onSubmit={handleSubmit}>
          <input
            className='fadeIn'
            type='text'
            placeholder='Nombre'
            required
          />
          <input
            className='fadeIn'
            type='date'
            min='1900-01-01'
            max={new Date().toISOString().split('T')[0]}
            placeholder='Fecha de nacimiento'
            required
          />
          <button className='fadeIn'>Enviar</button>
        </form>
      )}
    </div>
  )
}

export default UserForm
