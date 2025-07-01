import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todo,setTodo] = useState(0)
  const [todoData,setTodoData] = useState({})
  const [loading,setLoading] = useState(false)


  function increaseCount(){
    setCount(prevValue=>prevValue+1)
  }


  useEffect(()=>{
    let clock = setInterval(increaseCount,1000)

    // cleanup code
    return()=>{
      clearInterval(clock)
    }
  },[])
  // this efect has no dependency so it runs only once
  // when the page renders for the first time
  // but we know how setInterval works, so the count
  // keeps on increasing
  // we also have a cleanup , so if at any time
  // we were to remove this effect, it does not just keep
  // running in the background or if we want something
  // else to happen we can write that in it also
  // so think of it as an if else statement
  // if it is mounted i.e present on screen then whatever
  // code we have written will run
  // else when it is unmounted then the code inside
  // the return section will run
  // it is used in subscribing and unsubscribing to web sockets


  useEffect(()=>{
    console.log("value of count is" + count)
  },[count])

  // any time the dependency changes , it is gonna run 
  // thiseffect
  // so it has count as a dependeny , so 
  // setInterval changes the count every 1 second
  // so this effect will also run every second





  useEffect(()=>{
    // send a backend request to get data for this todo
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/'+todo)
      .then(async res=>{
        const json = await res.json()
        setTodoData(json)
        setLoading(false)

      })


    console.log("backend request for "+todo)
  },[todo])
  return (
    <>
      {count}

      <div>
        <button onClick={()=>{setTodo(1)}} style={{color:todo==1?"red":"white"}}>todo 1</button>
        <button onClick={()=>{setTodo(2)}} style={{color:todo==2?"red":"white"}}>todp 2</button>
        <button onClick={()=>{setTodo(3)}} style={{color:todo==3?"red":"white"}}>todo 3</button>
        <button onClick={()=>{setTodo(4)}} style={{color:todo==4?"red":"white"}}>todo 4</button>
      </div>
      <br />
      {loading==true?"loading...":todoData.title}


    </>
  )
}

export default App
