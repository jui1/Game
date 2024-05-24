import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import GameOver from "./Components/GameOver";
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [activePlayer,setActivePlayer]=useState('x');
  const [winner,setWinner]=useState('');
  const [gameBoard, setGameBoard] = useState([...initalGameBoard]);

  return (
      <main>
        {
           winner!==''?<GameOver setGameBoard={setGameBoard} setWinner={setWinner} gameBoard={gameBoard}  winner={winner}/>:<div id="game-container">
            <ol id="players"className="highlight-player">
             <Player activePlayer={activePlayer}  name={"player 1"} symbol={'0'}/>
             <Player  activePlayer={activePlayer}  name={"player 2"} symbol={'x'}/>
            </ol>
            <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard} setWinner={setWinner} setActivePlayer={setActivePlayer} activePlayer={activePlayer} />
             </div>
        }
         
        
      </main>
  );
}

export default App;
