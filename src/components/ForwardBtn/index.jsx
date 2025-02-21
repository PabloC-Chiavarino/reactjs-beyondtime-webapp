import './styles.css'
import { forwardBtn } from '../../assets/img'

const ForwardBtn = () => {
  return (
    <div className='forward__container'>
      <div data-text='Siguiente' className='forward__img--wrapper'>
        <img className='forward__img' src={forwardBtn} alt='forward' />
      </div>
    </div>
  )
}

export default ForwardBtn
