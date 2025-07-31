import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setcounter] = useState(0)

   const addValue = () => {
      setcounter(counter + 1)
   }

   const removeValue = () => {
      setcounter(counter - 1)
   }

  return (
    <>
      <h1>COUNTER: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
