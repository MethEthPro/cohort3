// ṣcroll to bottom

import React,{useEffect,useRef,useState} from "react";


function Chat(){
    const [messages,setMessages] = useState(["Hello","How are you"])

    const [inputValue,setInputValue] = useState("");
    const chatboxRef = useRef(null);


    const addMessage = (newMessage)=>{
        setMessages((prevMessages)=>[...prevMessages,newMessage])
    }

    // Scroll to the bottom whenever a new message is added

    useEffect(()=>{
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

    },[messages]);

    return (
        <>
            <div ref={chatboxRef}
            style={{height:"200px",overflowY:"scroll",border:"1px solid black",color:"white"}}>
                {messages.map((msg,index)=>(
                    <div key={index}>
                        {msg}
                    </div>    
                ))}

            </div>
            <input type="text" value={inputValue} onChange={(e)=>(setInputValue(e.target.value))} />
            <button onClick={()=>addMessage(inputValue)}>add message</button>
        </>
    )

}


export default Chat;