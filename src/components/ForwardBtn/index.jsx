import './styles.css'
import { forwardBtnImg } from '../../assets/img'

const ForwardBtn = ({ handleClick }) => {
  return (
    <div className='forward__container'>
      <div data-text='Siguiente' className='forward__img--wrapper'>
        <img className='forward__img' src={forwardBtnImg} onClick={handleClick} alt='forward' />
      </div>
    </div>
  )
}

export default ForwardBtn
