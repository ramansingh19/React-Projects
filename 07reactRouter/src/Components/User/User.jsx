import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='text-center font-bold p-3 bg-pink-600 text-white'>
    User : {userid}</div>
  )
}

export default User