import { timeImg } from '../../assets/img'
import './styles.css'

const Logo = () => {
  return (
    <div className='logo__container fadeIn'>
      <h1>Beyond<span>Time</span></h1>
      <img src={timeImg} alt='logo' />
    </div>
  )
}

export default Logo
