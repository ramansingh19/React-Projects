import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/Auth'
import {logout} from '../../Store/slicestore'

function LogoutBtn() {
  const dispatch =  useDispatch();
  const logouthandler = () => {
      authservice.logout().then(() => {
        dispatch(logout())
      }).catch((error) => {
          throw error
      })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full' >LogoutBtn</button>
  )
}

export default LogoutBtn