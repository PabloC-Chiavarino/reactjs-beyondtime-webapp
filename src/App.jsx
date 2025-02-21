import { useState, useRef } from 'react'
import { FlowScreen, UserForm, HeartBeat, Logo, ForwardBtn } from './components'
import './App.css'

function App () {
  const [step, setStep] = useState('welcome')
  const [userData, setUserData] = useState(null)
  const userControl = useRef(false)

  const handleStep = (nextStep) => {
    setStep(nextStep)
    if (nextStep === 'beats') {
      userControl.current = true
    }
  }

  const handeUserData = (data) => {
    setUserData(data)
    handleStep('begin')
  }

  return (
    <div className='App'>
      <Logo />
      {step === 'welcome' && <FlowScreen type='welcome' onFinish={() => handleStep('userData')} />}
      {step === 'userData' && <UserForm onComplete={(data) => handeUserData(data)} />}
      {step === 'begin' && <FlowScreen type='begin' onFinish={() => handleStep('beats')} />}
      {step === 'beats' && <HeartBeat userData={userData} />}
      {userControl.current === true && <ForwardBtn />}
    </div>
  )
}

export default App
