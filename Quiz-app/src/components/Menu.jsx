import "../App.css"
import { useContext } from "react";
import { GameStateContext } from "../helpers/contexts";

function Menu(){
    const {gameState, setgameState, userName, setuserName} = useContext(GameStateContext);
    return(    
        <div className="menu">
            <input type="text" placeholder="Username" onChange={(e) => {setuserName(e.target.value)}}/>
            <button onClick={() => {setgameState('playing')}}>Start Quiz</button>
        </div>
    )
}

export default Menu;