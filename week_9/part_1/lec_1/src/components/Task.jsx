function Task({task,setTask}){
  
  return (
    <div>
      <input type="text" placeholder='task' value={task}  onChange={(e)=>{setTask(e.target.value)}} />
    </div>
  )
}

export default Task