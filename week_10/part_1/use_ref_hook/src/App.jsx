import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './Ex1'
import Stopwatch from './Ex2'

function App() {
  const myRef = useRef();

  return (
   <> 
    <input ref={myRef} type="text" placeholder='submit'/>
    <br />
    <button onClick={()=>{
      myRef.current.focus()
    }}>submit</button>

    <Chat/>
    <Stopwatch/>
   </>
  )
}

export default App
