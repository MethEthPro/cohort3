import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-red-400 text-black pd-4 rounded-2xl'>nimbu</h2>
    
      <Card year="2021"/>
      <Card />
      

    </>
  )
}

export default App
