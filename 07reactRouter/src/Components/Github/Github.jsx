import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

//less optimize way to get data 
// const [data , setdata] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/ramansingh19')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       setdata(data)
//     }
//     )
  // }, [])

  return (
    <div className='bg-purple-800 text-white text-center font-extrabold text-2xl p-3' >
      Github : {data.name}
      <img src={data.avatar_url} alt="Github Pic" />
      </div>
  )
}

export default Github


//optimize way to get data 

export const gitubuserInfo = async () => {
  const response = await fetch('https://api.github.com/users/ramansingh19')
  return response.json();
}