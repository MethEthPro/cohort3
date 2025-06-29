
function Time({time,setTime}){
  
  return (
    <div>
      <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}} />
    </div>
  )
}


export default Time