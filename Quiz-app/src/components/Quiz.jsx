import '../App.css'
import { questions } from '../helpers/Questions'
import { useState } from 'react';
import { useContext } from "react";
import { GameStateContext } from "../helpers/contexts";

function Quiz() {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [optionChosen, setoptionChosen] = useState('');
    const {score, setScore, gameState, setgameState} = useContext(GameStateContext);


    
    function chooseOption(option){
        setoptionChosen(option);
    };

    function nextQuestion(){
        if(questions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }

        setcurrentQuestion(currentQuestion + 1);
    };

    function finishQuiz(){
        if(questions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setgameState('finished');
    }

    return(
        <div className="quizContainer">
            <h1>{questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => {chooseOption('optionA')}}>{questions[currentQuestion].optionA}</button>
                <button onClick={() => {chooseOption('optionB')}}>{questions[currentQuestion].optionB}</button>
                <button onClick={() => {chooseOption('optionC')}}>{questions[currentQuestion].optionC}</button>
                <button onClick={() => {chooseOption('optionD')}}>{questions[currentQuestion].optionD}</button>
                {currentQuestion == questions.length - 1 ? (
                    <button onClick={finishQuiz}>Finish Quiz</button>)
                    : (<button onClick={nextQuestion}>Next Question</button>)
                }
                
            </div>
            
        </div>
    )
}

export default Quiz