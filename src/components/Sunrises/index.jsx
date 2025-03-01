import './styles.css'

const Sunrises = () => {
  return (
    <div className='sunrises__container'>
      <h1 className='sunrises__title'>Amaneceres</h1>
      <p className='sunrises__textA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae labore temporibus explicabo molestiae numquam, modi eum accusantium non quod porro nemo! Adipisci, eveniet repudiandae? Assumenda, iure. Vero, alias fuga!</p>
      <div className='sunrises__subcontainer'>
        <div className='sunrises__sky' />
        <div className='sunrises__sun' />
        <svg width='0' height='0'>
          <filter id='heatDistortion'>
            <feTurbulence type='turbulence' baseFrequency='0.01 0.08' numOctaves='2' result='turbulence'>
              <animate attributeName='baseFrequency' dur='0.2s' values='0.01 0.08; 0.02 0.1' repeatCount='indefinite' />
            </feTurbulence>
            <feDisplacementMap in='SourceGraphic' in2='turbulence' scale='15' />
          </filter>
        </svg>
      </div>
      <p className='sunrises__textB'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, recusandae ex rem quae fugit iste maiores laudantium vitae, ipsa, sit reprehenderit beatae pariatur aperiam dignissimos rerum ut hic nihil laboriosam?</p>
    </div>
  )
}

export default Sunrises
