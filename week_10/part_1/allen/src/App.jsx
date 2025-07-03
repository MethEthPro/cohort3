import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Layout from './components/Layout'
import Home from './components/Home'
import Programs from './components/Programs'
import Error from './components/Error'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/programs" element={<Programs/>} />
            <Route path='*' element={<Error/>}/>
          </Route>

        </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
