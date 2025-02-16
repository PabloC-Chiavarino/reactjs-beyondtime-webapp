import { useState, useEffect } from 'react'
import './styles.css'

const UserForm = () => {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true)
    }, 850)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos enviados') // debug
  }

  return (
    <div className='userData__container fadeIn'>
      <h1 className='userData__title'>Ingresa tus datos</h1>
      {showForm && (
        <form className='userData__form' onSubmit={handleSubmit}>
          <input className='fadeIn' type='text' placeholder='Nombre' required />
          <input className='fadeIn' type='date' placeholder='Fecha de nacimiento' required />
          <button className='fadeIn'>Enviar</button>
        </form>
      )}
    </div>
  )
}

export default UserForm
