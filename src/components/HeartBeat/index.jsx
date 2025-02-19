import './styles.css'
import { heartImg } from '../../assets/img'

const HeartBeat = () => {
  return (
    <div className='beats__container fadeIn'>
      <p className='beats__textA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus iusto itaque, sunt deserunt voluptas commodi pariatur omnis beatae tenetur excepturi illum, ex recusandae ratione atque, odit quisquam harum. Soluta!</p>
      <h1 className='beats__title'>Latidos totales</h1>
      <div className='beats__subcontainer'>
        <img className='beats__heart' src={heartImg} alt='heart' />
        {/* <img className='beats__heartB' src={heartImg} alt='heart' /> */}
        <div className='beat__first' />
        <div className='beat__second' />
      </div>
      <p className='beats__textB'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus iusto itaque, sunt deserunt voluptas commodi pariatur omnis beatae tenetur excepturi illum, ex recusandae ratione atque, odit quisquam harum. Soluta!</p>
    </div>
  )
}

export default HeartBeat
