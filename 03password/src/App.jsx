import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setLength] = useState(8)
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(true)
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = ''

    if (upperCaseAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowerCaseAllowed) str += 'abcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (specialCharAllowed) str += '!@#$%^&*()_-+={[}]|:;"`~<,>.?/'

    for (let i= 1; i <= lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [lenght, upperCaseAllowed, lowerCaseAllowed, numberAllowed, specialCharAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [lenght, upperCaseAllowed, lowerCaseAllowed, numberAllowed, specialCharAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-white text-black px-3 py-0.5 shrink-0'
        >COPY</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={3}
        max={20}
        value={lenght}
        onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {lenght} </label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={upperCaseAllowed}
          id='upperCase'
          onChange={() => setUpperCaseAllowed((prev) => !prev)}
      />
      <label htmlFor="upperCase">UpperCase</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={lowerCaseAllowed}
          id='lowerCase'
          onChange={() => setLowerCaseAllowed((prev) => !prev)}
      />
      <label htmlFor="lowerCase">LowerCase</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='number'
          onChange={() => setNumberAllowed((prev) => !prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={specialCharAllowed}
          id='specialChar'
          onChange={() => setSpecialCharAllowed((prev) => !prev)}
      />
      <label htmlFor="special">SpecialChar</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
