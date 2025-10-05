import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './component/card'

function App() {
  

  return (
    <>
      <h1 className='bg-amber-300'>Tailwind CSS</h1>
      <Card username='Raman singh'/>
      <Card username='Aman singh'/>
    </>
  )
}

export default App
