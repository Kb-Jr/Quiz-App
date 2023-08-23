import {react} from 'react'
import '../App.css'
import { useContext } from "react";
import { GameStateContext } from "../helpers/contexts";
import { questions } from '../helpers/Questions'



function Endscreen(){

    const {score, setScore, setgameState, userName} = useContext(GameStateContext);

    function restartQuiz(){
        setScore(0);
        setgameState('menu');
    };

    return(
        <div className="container">
            <h1>Hi {userName}!</h1>
            <h2>Quiz Completed!</h2>
            {/* display scores */}
            {score }/{questions.length}

            <button onClick={restartQuiz}>Restart</button>

        </div>
    )
}

export default Endscreen;