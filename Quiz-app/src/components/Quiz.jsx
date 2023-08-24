import '../App.css'
// import { questions } from '../helpers/Questions'
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { GameStateContext } from "../helpers/contexts";

function Quiz() {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [optionChosen, setoptionChosen] = useState('');
    const {score, setScore, gameState, setgameState} = useContext(GameStateContext);
    const [apiQuestions, setQuestions] = useState([]);

    function chooseOption(option){
        setoptionChosen(option);
    };

    useEffect( () => {
        async function fetchData(){
        try{
            const apiUrl = 'https://the-trivia-api.com/v2/questions' ; 
            const response = await fetch(apiUrl);
            const apiQuestions = await response.json();
            setQuestions(apiQuestions);
        }

        catch(error){}
    }
       fetchData();
    },[]);
  

    function nextQuestion(){
        if(apiQuestions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }

        // setcurrentQuestion(currentQuestion + 1);
    };

    function finishQuiz(){
        if(apiQuestions[currentQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setgameState('finished');
    }



    return(
        <div className="App">
      <div className="title">
        <h1>Answer All Questions</h1>
      </div>
    <div className='wrapper'>
          {apiQuestions.map((apiQuestion, key) =>{
            return <div className='question-container' key={key}>
                          <div className="Question">
                            <h3>{JSON.stringify(apiQuestion.question.text)}</h3>
                          </div>
                          <div className="options">
                                <button onClick={() => {chooseOption('incorrectAnswers[0]')}}>{JSON.stringify(apiQuestion.incorrectAnswers[0])}</button>
                                <button onClick={() => {chooseOption('incorrectAnswers[1]')}}>{JSON.stringify(apiQuestion.incorrectAnswers[1])}</button>
                                <button onClick={() => {chooseOption('incorrectAnswers[2]')}}>{JSON.stringify(apiQuestion.incorrectAnswers[2])}</button>
                                <button onClick={() => {chooseOption('correctAnswer')}}>{JSON.stringify(apiQuestion.correctAnswer)}</button>
                          </div>
                          {optionChosen}
                      </div>
                      
                   
          })}
         
          <button onClick={finishQuiz}>End Quiz</button>
    </ div>
    </div>

    )
}

export default Quiz


// {<div className="quizContainer">
// {apiQuestions.map((apiQuestion, key) => {
//     return <div className="apiQuestionContainer" key={key}>
//         <h3>{JSON.stringify(apiQuestion.question.text)}</h3>
//         <button>{JSON.stringify(apiQuestion.incorrectAnswers[0])}</button>
//         <button>{JSON.stringify(apiQuestion.incorrectAnswers[1])}</button>
//         <button>{JSON.stringify(apiQuestion.incorrectAnswers[2])}</button>
//     </div>
// })}

// <h1>{questions[currentQuestion].category}</h1>
// <div className="options">
// <button onClick={() => {chooseOption('optionA')}}>{questions[currentQuestion].incorrectAnswers[0]}</button>
// <button onClick={() => {chooseOption('optionB')}}>{questions[currentQuestion].incorrectAnswers[0]}</button>
// <button onClick={() => {chooseOption('optionC')}}>{questions[currentQuestion].incorrectAnswers[0]}</button>
// <button onClick={() => {chooseOption('optionD')}}>{questions[currentQuestion].correctAnswer}</button>
// {currentQuestion == questions.length - 1 ? (
//     <button onClick={finishQuiz}>Finish Quiz</button>)
//     : (<button onClick={nextQuestion}>Next Question</button>)
// }

// </div>

// </div> }