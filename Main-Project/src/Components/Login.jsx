import React  from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {Button , Input, Logo } from './index'
import { login as authLogin } from '../Store/slicestore'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/Auth'
import {useForm} from "react-hook-form"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const   {register , handleForm} = useForm()
  const [error , setError] = useState("")

  //login 
  const login = async(data) => {
    console.log(data);
    setError("")
    try {
      //check kr rha hai backend se response aaya ki nhi agar aagya to usko session mai store krega 
      const session = await authservice.login(data)
      //if login seccessfully then do next step
      if (session) {
        //this will help to use login info of user 
        const userData = await authservice.getCurrentUser()
        //this will store user details 
        if(userData) dispatch(authLogin(userData))
          //user ko refer kr rha hai home page par 
          navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleForm(login)}>
          <div className='space-y-5'>
              <Input 
              label="Email: "
              placeholder = "Enter your email"
              {...register("email" , {
                required : true ,
                validate : {
                    matchPattern: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    || "Email address must be a valid address"
                }
              })}
              />
              <Input 
              type = "password"
              label = "password"
              placeholder = "Enter Your Password "
              {...register("password", {
                required : true,
              })}
              />
              <Button 
              type = "submit"
              className = "w-full"
              >sign in
              </Button>
          </div>
        </form>
        </div>
        </div>
  )
}

export default Login