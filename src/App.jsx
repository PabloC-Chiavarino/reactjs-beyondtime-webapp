import { useState } from 'react'
import { FlowScreen, UserForm, HeartBeat } from './components'
import './App.css'

function App () {
  const [step, setStep] = useState('welcome')

  return (
    <div className='App'>
      {step === 'welcome' && <FlowScreen type='welcome' onFinish={() => setStep('userData')} />}
      {step === 'userData' && <UserForm onComplete={() => setStep('begin')} />}
      {step === 'begin' && <FlowScreen type='begin' onFinish={() => setStep('beats')} />}
      {step === 'beats' && <HeartBeat />}
    </div>
  )
}

export default App
