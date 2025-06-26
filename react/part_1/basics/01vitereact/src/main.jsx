import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pubg from "./Pubg.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Pubg />
    </>
    
  </StrictMode>,
)
