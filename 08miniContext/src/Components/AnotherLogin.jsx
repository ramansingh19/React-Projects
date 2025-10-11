import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function AnotherLogin() {

  const [Username , setUsername] =  useState('')
  const [Password , setPassword] = useState('')

  const {setuser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({Username , Password})
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
      type="text" 
      value={Username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Enter your name'
      />
      <input 
      type="text" 
      value={Password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter Password'
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default AnotherLogin