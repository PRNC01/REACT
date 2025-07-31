import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 border border-black hover:bg-red-600 shadow-2xl rounded-xl' onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 border border-black hover:bg-green-600 shadow-2xl rounded-xl' onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 border border-black hover:bg-blue-700 shadow-2xl rounded-xl' onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 border border-black hover:bg-gray-600 shadow-2xl rounded-xl' onClick={() => setColor('gray')}>Gray</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
