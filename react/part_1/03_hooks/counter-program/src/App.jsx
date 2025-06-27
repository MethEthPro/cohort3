import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(0)


  const increment = ()=>{
    if(counter>=20)return
    counter++
    setcounter(counter)
  }

  const decrement = ()=>{
    if(counter<=0)return
    counter--
    setcounter(counter)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter {counter}</h2>

      <button onClick={increment}>add value</button>
      <br />
      <button onClick={decrement}>decrease value</button>


      <p>counter again: {counter}</p>
    </>
  )
}

export default App
