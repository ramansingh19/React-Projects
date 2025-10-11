import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Anotherprofile() {

  const {user} = useContext(UserContext)

  if (!user) return <div>Please Login in</div>

  return <div>Welcome {user.Username}</div>
}

export default Anotherprofile