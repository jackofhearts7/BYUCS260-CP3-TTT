import Board from "../board";
import {useState} from "react";

const Game = () => {
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState('');
    const resetBoard = () => {
        setReset(true);
    }
    return (
      <div class="App">
        <div class="TextBox">
          <h1 class="MainTitle">TicTacToe</h1>
          <p class="SubTitle">Game</p>
            <Board reset={reset} setReset={setReset} winner={winner}
                   setWinner={setWinner} />
          <button id="HelpButton">Help</button>
        </div>
      </div>
  );
};

export default Game;