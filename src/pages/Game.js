import Board from "../board";
import {useState} from "react";
import Info from "../info";
import {Link} from "react-router-dom"


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
            <Board reset={reset} setReset={setReset} winner={winner}
                   setWinner={setWinner} />
            <Info />
            <Link to="/help"><button id="HelpButton">Help</button></Link>
            {/* Shrinks the popup when there is no winner */}
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of
            the tic-tac-toe board  */}
        </div>
      </div>

  );
};

export default Game;