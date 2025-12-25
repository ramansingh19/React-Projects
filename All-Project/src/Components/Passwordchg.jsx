import { useCallback, useEffect, useRef, useState } from 'react'

function Passwordchanger() {

  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setpassword] = useState("")

  const passwordRef = useRef(null)

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

  const copypasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect(() => {
    PasswordGenerator()
  }, [length , number , char , PasswordGenerator ])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      
      <div className="w-full max-w-md bg-gray-700 rounded-2xl shadow-2xl p-6 text-orange-400">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Password Generator
        </h1>

        {/* Password Field */}
        <div className="flex rounded-xl overflow-hidden shadow-lg mb-5">
          <input
            type="text"
            value={password}
            className="bg-white text-black w-full px-4 py-3 outline-none"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copypasswordClipboard}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 font-medium"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm text-white">

          {/* Length */}
          <div className="flex items-center justify-between gap-3">
            <label className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full accent-orange-400"
              onChange={(e) => {setLength(e.target.value)}}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                className="accent-orange-400"
                onChange={() => setNumber((prev) => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={char}
                id="characters"
                className="accent-orange-400"
                onChange={() => setChar((prev) => !prev)}
              />
              Characters
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Passwordchanger
