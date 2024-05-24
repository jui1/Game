import React from 'react'

const GameOver = ({winner,gameBoard,setWinner,setGameBoard}) => {
     console.log("here is the wrinner ",winner,"and this is the board",gameBoard)
     const reMatch=()=>{
      console.log("rematiching");
      let x=''
      setWinner(x);
      setGameBoard( [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);  
    }
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
       <p>{winner} won!</p>
       <p><button onClick={reMatch}>Rematch!</button></p>
    </div>
  )
}

export default GameOver
