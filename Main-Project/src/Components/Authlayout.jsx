import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Proctected({children ,  authentication  = true}) {

      const navigate = useNavigate()
      const [loader , setLoader] = useState("")
      const authStatus = useSelector(state => state.auth.status)

      //option 2 
      // if (authStatus === true) {
      //   navigate("/")
      // }else if (authStatus === false) {
      //   navigate("/login")
      // }


      //option 1 
      useEffect(() => {
          if (authentication && authStatus !== authentication) {
            navigate("/login")
          } else if(!authentication && authStatus !== authentication){
            navigate("/")
          }
          setLoader(false)
      }, [authStatus , navigate , authentication])

  return loader ? <h2>Loading...</ h2> : <>{children}</>
}

