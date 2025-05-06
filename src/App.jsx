import { useState, useRef } from 'react'
import { FlowScreen, UserForm, BangMinutes, HeartBeat, Sunrises, JourneyClock, Logo, ForwardBtn } from './components'
import './App.css'

function App () {
  const [step, setStep] = useState('welcome')
  const [userData, setUserData] = useState(null)
  const userControl = useRef(false)

  const handleStep = () => {
    switch (step) {
      case 'welcome':
        setStep('user')
        break
      case 'user':
        setStep('minutes')
        userControl.current = true
        break
      case 'minutes':
        setStep('beats')
        break
      case 'beats':
        setStep('sunrises')
        break
      case 'sunrises':
        setStep('journey')
        userControl.current = false
        break
      default:
    }
  }

  const handeUserData = (data) => {
    setUserData(data)
    handleStep()
  }

  return (
    <div className='App'>
      <Logo onClick={() => setStep('welcome')} />
      {step === 'welcome' && <FlowScreen type={step} onFinish={() => handleStep()} />}
      {userControl.current === true && <ForwardBtn handleClick={handleStep} />}

      {step === 'user' && <UserForm onComplete={(data) => handeUserData(data)} />}
      {step === 'minutes' && <BangMinutes userData={userData} />}
      {step === 'beats' && <HeartBeat userData={userData} />}
      {step === 'sunrises' && <Sunrises userData={userData} />}
      {step === 'journey' && <JourneyClock userData={userData} />}
    </div>
  )
}

export default App
