import React, { useContext } from "react"
import UserContext from "../Context/UserContext"


function Profile() {

  const {user} = useContext(UserContext)

  if (!user) return  <div className="text-white p-5">Please Login in</div>

  return <div className="text-white p-5 font-bold text-xl">Welcome {user.username}</div>
  
}

export default Profile