import { useState } from "react"
function App() {
  let [followers,setFollowers] = useState("0")
  let {time,setTime} = useState("1")
  let {text,setText} = useState("hi I am new here")

  return (
    <>
     <div style={{backgroundColor:"#95a5a6",minHeight:"100vh"}}>

          

            <ProfileCardComponent />
            <ProfileCardComponent/>

          
        <div style={{display:"flex",justifyContent:"center"}}>
          <div>
          <div>
            <PostComponent followers={"30"} time={2} text={"hello guys"}/>
          </div>
          <div>
            <PostComponent followers={"20"} time={3} text={"hi there"}/>
          </div>
          </div>
        </div>
        
      
      
     </div>
     
    </>
  )
}

export default App



function PostComponent({followers,time,text}){
  return (
    <>
    <div style={{backgroundColor:"white",width:200,padding:10,borderRadius:15,margin:10}}>
    <div style={{display:"flex"}}>
      <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" 
      style={{width:50,height:50,borderRadius:25}}
      />
      <div style={{marginLeft:5}}>
        <b>sarthak</b>

        <div>{followers} followers</div>
        <div>{time} mins ago</div>
      </div>
    </div>
    <br />
    <div>
      {text}
    </div>
    </div>
    </>
  )

}

function ProfileCardComponent(){
    return (
      <div style={{width:150,backgroundColor:"#9b59b6",borderRadius:10,margin:10}}>
        <div style={{height:20}}></div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="" 
            style={{width:50,height:50,borderRadius:25}}
            />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div>
            <div>
              sarthak ahuja
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              oomf
            </div>
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",padding:10}}>
          <div>
            DTU
          </div>
          <div>
            2027
          </div>

        </div>
        <div style={{display:"flex",justifyContent:"space-between",padding:10}}>
          <div>
            IITM
          </div>
          <div>
            XXXX
          </div>

        </div>
      </div>
    )
}
