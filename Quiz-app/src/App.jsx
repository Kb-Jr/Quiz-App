import { useState } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import { GameStateContext } from './helpers/contexts';
import Quiz from './components/Quiz';
import Endscreen from './components/Endscreen';

 
function App() {
  const [gameState, setgameState] = useState('menu');
  const [userName, setuserName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <>
        <h1>This is a Quiz app</h1>
        <GameStateContext.Provider value={{gameState, setgameState, userName, setuserName, score, setScore}}>
        {gameState == 'menu' && <Menu />}
        {gameState == 'playing' && <Quiz />}
        {gameState == 'finished' && <Endscreen />}
      
        </GameStateContext.Provider>
    </>
  )
}

export default App
