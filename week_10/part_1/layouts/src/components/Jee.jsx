import {useNavigate} from "react-router-dom"
function Jee(){
    const navigate = useNavigate();

    function Revert(){
        navigate("/");
    }
    return(
        <div>
            START YOUR Jee JOURNEY
            <br/>
            <button onClick={Revert}>Home Page</button>
        </div>
    )
}

export default Jee;