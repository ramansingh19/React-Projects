import { useCallback, useEffect, useRef, useState } from 'react'

// import './App.css'

function App() {
  
  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setpassword] = useState("")

  //this is use for reference
  const passwordRef = useRef(null)

  //this is use for generating passwords
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789" //--> if you tap on the number section then numbers will be appear 
    if(char) str += "{}[]~`!@#$%^&*()_-+=?/<>"//-->if you tap on the character section then character will be appear
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setpassword(pass);
  
  }, [length , number , char , setpassword])

  //this is use for copy the password
  //usecallback is use for memoriziestion 
  const copypasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4)
      window.navigator.clipboard.writeText(password)
  } ,[password])

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
        <input type='text' 
        value={password} 
        className=' bg-white  outline-none w-full py-2 px-3' placeholder='password ' 
        readOnly
        ref={passwordRef}
        />
        
        <button onClick={copypasswordClipboard} className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 cursor-pointer'>Copy</button>
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
