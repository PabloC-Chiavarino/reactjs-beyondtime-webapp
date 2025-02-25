import { useState, useRef } from 'react'
import { FlowScreen, UserForm, BangMinutes, HeartBeat, Logo, ForwardBtn } from './components'
import './App.css'

function App () {
  const [step, setStep] = useState('welcome')
  const [userData, setUserData] = useState(null)
  const userControl = useRef(false)

  const handleStep = (nextStep) => {
    setStep(nextStep)
    if (nextStep === 'minutes') {
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
      {step === 'begin' && <FlowScreen type='begin' onFinish={() => handleStep('minutes')} />}
      {step === 'minutes' && <BangMinutes userData={userData} />}
      {step === 'beats' && <HeartBeat userData={userData} />}
      {userControl.current === true && <ForwardBtn />}
    </div>
  )
}

export default App
