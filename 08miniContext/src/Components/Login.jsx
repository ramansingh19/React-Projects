import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

//this is use for sending data 

function Login() {
  const [username , setusername ] = useState("")
  const [password , setpassword ] = useState("")

  const {setuser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
      setuser({username , password})
  }

  return (
    <div>
      <h2 className='text-white p-4 text-2xl font-extrabold  '>Login</h2>
      <input 
      type="text" 
      placeholder ='Enter your name' className='text-white p-5 border-2 '
      value={username}
      onChange={(e) => setusername(e.target.value)}
      />
      <input 
      type="text"
      placeholder='Enter your password'className='text-white p-5 border-2 m-4'
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleSubmit} className='text-white'>Submit</button>
    </div>
  )
}

export default Login