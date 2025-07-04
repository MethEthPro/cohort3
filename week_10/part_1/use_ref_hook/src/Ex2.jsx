// clock with start and stop functionality

import {useState,useRef} from "react";

function Stopwatch(){   
    const [time,setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer=()=>{
        if(intervalRef.current != null) return;

        intervalRef.current = setInterval(() => {
            setTime((prevTime)=>prevTime+1)
        }, 1000);
    }

    const stopTimer = ()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    return (
        <>
            <div>
                <h1>timer: {time}</h1>
                <button onClick={startTimer}>start</button>
                <button onClick={stopTimer}>stop</button>
            </div>
        </>
    )


}

export default Stopwatch;