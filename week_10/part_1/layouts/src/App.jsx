import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing"
import ErrorPage from './components/ErrorPage'
import Jee from "./components/Jee"
import Neet from "./components/Neet"
import Layout from "./components/Layout"
function App() {
  

  return (
    <>

    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path="/" element={<Landing/>}/>
          <Route path="/NEET" element={<Neet/>}/> 
          <Route path="/JEE" element={<Jee/>}/> 
          <Route path="*" element={<ErrorPage/>}/>
          
        </Route>

        



      </Routes>
    
    
    
    </BrowserRouter>

    </>
  )
}



export default App
