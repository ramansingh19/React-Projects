import { useState } from 'react'
import './App.css'
import Counterr from './Components/Counter'
import Bgchanger from './Components/bgChanger'
import Passwordchanger from './Components/Passwordchg'
import CurrencyConvetor from './CurrencyConvertor/CurrencyCov'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counterr />
    <Bgchanger />
    <Passwordchanger />
    <CurrencyConvetor />
    
    </>
  )
}

export default App
