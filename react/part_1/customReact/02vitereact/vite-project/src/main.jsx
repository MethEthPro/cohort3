import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <> 
    <br />
    <a href="https://google.com" target="_blank">visit google</a>
  </>

)

const ReactElement = React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "click me to visit google",
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    <App/>
    {ReactElement}
    </>
      
    
    
  
)
