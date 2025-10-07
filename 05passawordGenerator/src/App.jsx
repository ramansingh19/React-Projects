import { useCallback, useEffect, useState } from 'react'

// import './App.css'

function App() {
  
  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setpassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(char) str += "{}[]~`!@#$%^&*()_-+=?/<>"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setpassword(pass);
  
  }, [length , number , char , setpassword])

  //if you insert password in the array your stuck into the infinite loop
  useEffect(() => {
      PasswordGenerator()
  }, [length , number , char , PasswordGenerator ])
  
  return (
    <>
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 
      text-center my-10 text-orange-500 bg-gray-700'
      >Password Generator
        <div className=' text-black flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className=' bg-white  outline-none w-full py-2 px-3' placeholder='password ' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 '>Copy</button>
        </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}/>
                <label>Length : {length}</label>
            </div>
            
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev)
              }}/><label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={char}
              id='characters'
              onChange={() => {
                setChar((prev) => !prev)
              }}/><label htmlFor='numberInput'>Characters</label>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
