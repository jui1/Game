import React, { useEffect, useState } from "react";
import { WINNING_COMBINATIONS } from "./winningCombination";

const GameBoard = ({ activePlayer, setActivePlayer, setWinner,winner,gameBoard, setGameBoard}) => {
  //const [gameBoard, setGameBoard] = useState(initalGameBoard);
  useEffect(() => {
   
  }, [gameBoard]);
  
  
  const updateBoard = (rowIdx, colIdx) => {
    if (gameBoard[rowIdx][colIdx] !== null) return;
    setGameBoard((prevBoard) => {
      let tempGameBoard;
      tempGameBoard = [...prevBoard];
      tempGameBoard[rowIdx][colIdx] = activePlayer;
      return tempGameBoard;
    });
    for (const possibilities of WINNING_COMBINATIONS) {
      let firstIdx, secondIdx, thirdIdx;
  
      try {
        firstIdx = gameBoard[possibilities[0].row][possibilities[0].column];
        secondIdx = gameBoard[possibilities[1].row][possibilities[1].column];
        thirdIdx = gameBoard[possibilities[2].row][possibilities[2].column];
      } catch (error) {
        console.error("Error accessing indices:", possibilities);
        console.error("Error message:", error.message);
        continue; // Skip to the next iteration
      }
  
      //console.log(firstIdx, secondIdx, thirdIdx);
  
      if (firstIdx !== null && firstIdx === secondIdx && firstIdx === thirdIdx) {
        setWinner(firstIdx);
        return;
      }
    }
    activePlayer === "x" ? setActivePlayer("0") : setActivePlayer("x");
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, id) => (
        <li key={id}>
          <ol>
            {row.map((symbol, idx) => (
              <li key={idx}>
                <button onClick={() => updateBoard(id, idx)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
