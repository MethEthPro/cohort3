function Description({description,setDescription}){
  
  return (
    <div>
      <input type="text" placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
    </div>
  )
}

export default Description