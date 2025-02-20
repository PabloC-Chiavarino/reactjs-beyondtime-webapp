import { time24 } from '../../assets/img'
import './styles.css'

const Logo = () => {
  return (
    <div className='logo__container fadeIn'>
      <h1>Beyond</h1>
      <img src={time24} alt='logo' />
    </div>
  )
}

export default Logo
