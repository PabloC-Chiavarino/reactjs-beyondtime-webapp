import './styles.css'

const JourneyClock = ({ userData }) => {
  return (
    <div className='journeyClock__container fadeIn'>
      <h1 className='journeyClock__title'>Reloj de viaje</h1>
      <p className='journeyClock__textA'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, recusandae ex rem quae fugit iste maiores laudantium vitae, ipsa, sit reprehenderit beatae pariatur aperiam dignissimos rerum ut hic nihil laboriosam?</p>
      <div className='journeyClock__subcontainer'>
        <div className='journeyClock__clock'>
          <div className='journeyClock__clock--hours' />
          <div className='journeyClock__clock--minutes' />
          <div className='journeyClock__clock--seconds' />
        </div>
      </div>
      <p className='journeyClock__textB'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, recusandae ex rem quae fugit iste maiores laudantium vitae, ipsa, sit reprehenderit beatae pariatur aperiam dignissimos rerum ut hic nihil laboriosam?</p>
    </div>
  )
}

export default JourneyClock
