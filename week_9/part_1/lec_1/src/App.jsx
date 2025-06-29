import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Task from "./components/Task"
import Description from "./components/Description"
import Time from "./components/Time"


function App() {
  let [todo,setTodo] = useState([])
  let [task,setTask] = useState("")
  let [description,setDescription] =useState("")
  let [time,setTime] = useState("")

  

  return (
    <>  
        <div>
          <Task task={task} setTask={setTask}/>
          <Description description={description} setDescription={setDescription}/>
          <Time time={time} setTime={setTime}/>
          <button onClick={()=>{
            let newArr = [...todo]
            newArr.push({
              task:task,
              description:description,
              time:time
            })

            setTodo(newArr)
            setTask("")
            setDescription("")
            setTime("")
          }}>ADD TODO</button>

        </div> 
        <div>
          <h2>Todo List</h2>
          {todo.map((item, index) => (
            <div key={index}>
              <b>{item.task}</b>: {item.description} at {item.time}
            </div>
          ))}
        </div>
       
        
    </>
  )
}



export default App
