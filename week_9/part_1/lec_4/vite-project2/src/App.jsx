import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
  return (

    <>
    
    <ItemList items={items}/>

    <ErrorBoundary>
          <CardComponent1/>
    </ErrorBoundary>


    <ErrorBoundary>
          <CardComponent2/>
    </ErrorBoundary>




    </>
  )
}

function ItemList({items}){
  return(
    <ul >
      {items.map(item=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}


function CardComponent1(){
  return (
    <>
      <div>
        hello there
      </div>
    </>
  )
}


function CardComponent2(){
  throw new Error("could not fetch messages");
  return (
    

      <div>
        
        
        hello there
      </div>
    
  )
}



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (<>Something went wrong.</>);
        }

        return this.props.children; 
    }
}
export default App
