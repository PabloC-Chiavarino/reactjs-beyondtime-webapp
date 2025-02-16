import { useState } from 'react'
import { WelcomeScreen, UserForm } from './components'
import './App.css'

function App () {
  const [step, setStep] = useState('welcome')

  return (
    <div className='App'>
      {step === 'welcome' && <WelcomeScreen onFinish={() => setStep('userData')} />}
      {step === 'userData' && <UserForm onComplete={() => setStep('landing')} />}

    </div>
  )
}

export default App
